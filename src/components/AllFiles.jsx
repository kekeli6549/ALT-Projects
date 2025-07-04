import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // To get token
import { useNavigate } from 'react-router-dom'; // NEW: For navigation

const API_URL = 'http://localhost:5000/api'; // Ensure this matches your backend URL

function AllFiles() {
    const [allFiles, setAllFiles] = useState([]);
    const [message, setMessage] = useState('');
    const { token, isAuthenticated } = useAuth(); // Only need token and isAuthenticated here
    const navigate = useNavigate(); // For navigation buttons

    useEffect(() => {
        const fetchAllFiles = async () => {
            if (!isAuthenticated || !token) {
                setMessage('Please log in to view all files.');
                setAllFiles([]);
                return;
            }
            setMessage('Loading all files...');
            try {
                // Make a GET request to the backend to fetch ALL files
                const response = await axios.get(`${API_URL}/all-files`, {
                    headers: {
                        'x-auth-token': token // Send the JWT for authentication
                    }
                });
                // console.log("Data received for All Files:", response.data); // Removed debugging log
                setAllFiles(response.data);
                setMessage(response.data.length > 0 ? '' : 'No files have been uploaded to the platform yet.');
            } catch (error) {
                console.error('Error fetching all files:', error.response?.data || error.message);
                setMessage(`Failed to load files: ${error.response?.data?.message || 'Server error'}`);
                setAllFiles([]);
            }
        };

        fetchAllFiles();
    }, [isAuthenticated, token]); // Depend on auth state

    const handleDownload = (fileName) => {
        // console.log("Value of fileName received for download:", fileName); // Removed debugging log
        // console.log("Type of fileName:", typeof fileName); // Removed debugging log
        // THIS IS THE CRUCIAL FIX: Use proper template literal syntax for the URL
         const downloadUrl = `${API_URL}/download/${fileName}`;
        // console.log("Attempting to open download URL:", downloadUrl); // Removed debugging log
        window.open(downloadUrl, '_blank');
    };

    // NEW: Function for 'Go Back Home' button
    const goBackHome = () => {
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h2>All Available Files</h2>

            {/* NEW: Navigation Buttons Container */}
            <div style={styles.navigationButtons}>
                <button onClick={goBackHome} style={{ ...styles.navButton, ...styles.homeButton }}>
                    Go Back Home
                </button>
            </div>

            {message && <p style={message.includes('Loading') ? styles.infoMessage : styles.errorMessage}>{message}</p>}

            {allFiles.length > 0 ? (
                <ul style={styles.fileList}>
                    {allFiles.map((file) => (
                        <li key={file.id} style={styles.fileItem}>
                            <span style={styles.fileName}>{file.originalName}</span>
                            <span style={styles.fileMeta}> (Uploaded by: {file.uploader} on {new Date(file.uploadDate).toLocaleDateString()})</span>
                            <button onClick={() => handleDownload(file.savedName)} style={styles.downloadButton}>Download</button>
                        </li>
                    ))}
                </ul>
            ) : (
                !message.includes('Loading') && <p style={styles.noFilesMessage}>No files have been uploaded to the platform yet.</p>
            )}
        </div>
    );
}

// Basic inline styles (reused and slightly modified from MyFiles.jsx)
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        boxSizing: 'border-box',
    },
    navigationButtons: {
        display: 'flex',
        gap: '15px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '600px',
    },
    navButton: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s ease',
        color: 'white',
    },
    homeButton: {
        backgroundColor: '#007bff', // Blue
    },
    fileList: {
        listStyle: 'none',
        padding: 0,
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    },
    fileItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        borderBottom: '1px solid #eee',
        gap: '10px',
        flexWrap: 'wrap',
    },
    fileName: {
        flexGrow: 1,
        fontWeight: 'bold',
        color: '#333',
        wordBreak: 'break-word',
    },
    fileMeta: {
        fontSize: '0.85em',
        color: '#777',
        marginLeft: '10px',
    },
    downloadButton: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '8px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9em',
        transition: 'background-color 0.3s ease',
        marginLeft: '15px',
        whiteSpace: 'nowrap',
    },
    downloadButtonHover: {
        backgroundColor: '#0056b3',
    },
    infoMessage: {
        color: '#007bff',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    errorMessage: {
        color: '#dc3545',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    noFilesMessage: {
        marginTop: '20px',
        color: '#555',
        fontSize: '1.1em',
        textAlign: 'center',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default AllFiles;