import React, { useState, useRef } from 'react'; // NEW: Import useRef
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api'; // Ensure this matches your backend URL

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [uploadStatus, setUploadStatus] = useState(null); // 'success', 'error', null
    const { token } = useAuth();
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // NEW: Create a ref for the file input

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); // Get the first selected file
        setMessage(''); // Clear message on new file selection
        setUploadStatus(null); // Reset status
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setMessage('Uploading...');
        setUploadStatus(null); // Reset status at the start of new upload

        if (!selectedFile) {
            setMessage('Please select a file first.');
            setUploadStatus('error');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(`${API_URL}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setMessage(`Uploading: ${percentCompleted}%`);
                }
            });

            setMessage(`Success: ${response.data.message} File: ${response.data.file.originalName}`);
            setUploadStatus('success');
            setSelectedFile(null); // Clear the state
            if (fileInputRef.current) { // NEW: Clear the file input field visually
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('File upload error:', error.response?.data || error.message);
            setMessage(`Upload failed: ${error.response?.data?.message || 'Server error'}`);
            setUploadStatus('error');
        }
    };

    // Function for retry button
    const handleRetry = () => {
        setSelectedFile(null); // Clear any previously selected file from state
        setMessage(''); // Clear error message
        setUploadStatus(null); // Reset status
        if (fileInputRef.current) { // NEW: Clear the file input field visually
            fileInputRef.current.value = '';
        }
    };

    // NEW: Function for go back button
    const handleGoBack = () => {
         navigate('/');  // Navigates to the home page 
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}> {/* NEW: Header div to contain title and back button */}
                <button onClick={handleGoBack} style={styles.goBackButton}>
    Back To Home
                </button>
                <h2>Upload Academic Resource</h2>
            </div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="file-input" style={styles.label}>Select File:</label>
                    <input
                        type="file"
                        id="file-input"
                        onChange={handleFileChange}
                        required
                        style={styles.fileInput}
                        ref={fileInputRef} 
                    />
                </div>
                <button type="submit" style={styles.button} disabled={!selectedFile || uploadStatus === 'uploading'}>
                    {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload File'}
                </button>
            </form>

            {/* Conditional rendering of messages */}
            {message && (
                <p style={
                    uploadStatus === 'success' ? styles.successMessage :
                    uploadStatus === 'error' ? styles.errorMessage :
                    styles.infoMessage
                }>
                    {message}
                </p>
            )}

            {/* Conditional buttons based on upload status */}
            <div style={styles.buttonContainer}>
                {uploadStatus === 'success' && (
                    <button
                        onClick={() => navigate('/my-files')}
                        style={{ ...styles.actionButton, ...styles.viewUploadsButton }}
                    >
                        See Your Uploads
                    </button>
                )}

                {uploadStatus === 'error' && (
                    <button
                        onClick={handleRetry}
                        style={{ ...styles.actionButton, ...styles.retryButton }}
                    >
                        Retry Upload
                    </button>
                )}
            </div>

            <p style={styles.infoTextBottom}>Allowed formats: PDF, Word documents (.doc, .docx), Images. Max 10MB.</p>
        </div>
    );
}

// Basic inline styles (replace with your template's CSS)
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        boxSizing: 'border-box',
    },
    header: { // NEW: Style for the header containing title and back button
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        position: 'relative', // To position the back button
    },
    goBackButton: { // NEW: Style for the back button
        padding: '8px 15px',
        backgroundColor: '#6c757d', // Grey color
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9em',
        transition: 'background-color 0.3s ease',
        position: 'absolute', // Position absolutely within the header
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    goBackButtonHover: {
        backgroundColor: '#5a6268',
    },
    form: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
        fontSize: '1.1em',
    },
    fileInput: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '100%',
        boxSizing: 'border-box',
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1.2em',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s ease',
    },
    buttonHover: {
        backgroundColor: '#218838',
        transform: 'translateY(-1px)',
    },
    buttonDisabled: {
        backgroundColor: '#cccccc',
        cursor: 'not-allowed',
    },
    successMessage: {
        color: '#28a745',
        fontWeight: 'bold',
        marginTop: '20px',
        fontSize: '1.1em',
        backgroundColor: '#d4edda',
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        border: '1px solid #c3e6cb',
    },
    errorMessage: {
        color: '#dc3545',
        fontWeight: 'bold',
        marginTop: '20px',
        fontSize: '1.1em',
        backgroundColor: '#f8d7da',
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        border: '1px solid #f5c6cb',
    },
    infoMessage: {
        color: '#007bff',
        fontWeight: 'bold',
        marginTop: '20px',
        fontSize: '1.1em',
        backgroundColor: '#cfe2ff',
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        border: '1px solid #b9d7fd',
    },
    infoTextBottom: {
        marginTop: '15px',
        color: '#666',
        fontSize: '0.9em',
    },
    buttonContainer: {
        display: 'flex',
        gap: '15px',
        marginTop: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    actionButton: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s ease',
        color: 'white',
    },
    viewUploadsButton: {
        backgroundColor: '#007bff',
    },
    retryButton: {
        backgroundColor: '#ffc107',
        color: '#333',
    }
};

export default FileUpload;