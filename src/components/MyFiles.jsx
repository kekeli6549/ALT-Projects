import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

function MyFiles() {
    const [myFiles, setMyFiles] = useState([]);
    const [message, setMessage] = useState('');
    const { token, isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMyFiles = async () => {
            if (!isAuthenticated || !token) {
                setMessage('Please log in to view your files.');
                setMyFiles([]);
                return;
            }
            setMessage('Loading your files...');
            try {
                const response = await axios.get(`${API_URL}/my-files`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setMyFiles(response.data);
                setMessage(response.data.length > 0 ? '' : 'You have not uploaded any files yet.');
            } catch (error) {
                console.error('Error fetching my files:', error.response?.data || error.message);
                setMessage(`Failed to load files: ${error.response?.data?.message || 'Server error'}`);
                setMyFiles([]);
            }
        };

        fetchMyFiles();
    }, [isAuthenticated, token, user]);

    const handleDownload = (fileName) => {
        // CRITICAL FIX: Use backticks (`) and ${} for template literals
        const downloadUrl = `${API_URL}/download/${fileName}`;
        window.open(downloadUrl, '_blank');
    };

    const goToUploadPage = () => {
        navigate('/upload');
    };

    const goBackHome = () => {
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h2>My Uploaded Files</h2>

            <div style={styles.navigationButtons}>
                <button onClick={goToUploadPage} style={{ ...styles.navButton, ...styles.uploadButton }}>
                    Upload New File
                </button>
                <button onClick={goBackHome} style={{ ...styles.navButton, ...styles.homeButton }}>
                    Go Back Home
                </button>
            </div>

            {message && <p style={message.includes('Loading') ? styles.infoMessage : styles.errorMessage}>{message}</p>}

            {myFiles.length > 0 ? (
                <ul style={styles.fileList}>
                    {myFiles.map((file) => (
                        <li key={file.id} style={styles.fileItem}>
                            <span style={styles.fileName}>{file.originalName}</span>
                            <span style={styles.fileMeta}> (Uploaded by: {file.uploader} on {new Date(file.uploadDate).toLocaleDateString()})</span>
                            <button onClick={() => handleDownload(file.savedName)} style={styles.downloadButton}>Download</button>
                        </li>
                    ))}
                </ul>
            ) : (
                !message.includes('Loading') && <p style={styles.noFilesMessage}>No files uploaded by you yet. Go to <a href="/upload" style={styles.link}>Upload File</a> to add some!</p>
            )}
        </div>
    );
}

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
    uploadButton: {
        backgroundColor: '#28a745',
    },
    homeButton: {
        backgroundColor: '#007bff',
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

export default MyFiles;