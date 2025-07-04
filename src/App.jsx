import React from 'react';
// Import components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import our custom authentication context and hook
import { AuthProvider, useAuth } from './context/AuthContext';
// Import the authentication components we created earlier
import Login from './components/Login';
import Register from './components/Register';
import FileUpload from './components/FileUpload'; // Import FileUpload component
import MyFiles from './components/MyFiles';       // Import MyFiles component

import AllFiles from './components/AllFiles'; 

// --- Component: Home ---
// This component serves as the landing page. Its content changes based on authentication status.
const Home = () => {
    // Access authentication state and functions from our AuthContext
    const { user, isAuthenticated, logout } = useAuth();
    return (
        <div style={homeStyles.container}>
            <h2 style={homeStyles.heading}>Welcome to the Rootle🌴 Academic Hub!</h2>
            {/* Conditional rendering: Show different content if user is authenticated or not */}
            {isAuthenticated ? (
                // Content for logged-in users
                <>
                    <p style={homeStyles.greeting}>Hello, {user}!</p> {/* Display logged-in username */}
                    <p style={homeStyles.message}>You are logged in. Explore academic resources.</p>
                    <nav style={homeStyles.nav}>
                        {/* Navigation links for authenticated users */}
                        <a href="/upload" style={homeStyles.navLink}>Upload File</a>
                        <a href="/my-files" style={homeStyles.navLink}>My Files</a>
                        <a href="/all-files" style={homeStyles.navLink}>All Files</a>
                        <button onClick={logout} style={homeStyles.logoutButton}>Logout</button> {/* Logout button */}
                        <a href="/protected" style={homeStyles.navLink}>Test Protected Route</a>
                    </nav>
                </>
            ) : (
                // Content for unauthenticated users
                <>
                    <p style={homeStyles.message}>Please log in or register to access resources.</p>
                    <nav style={homeStyles.nav}>
                        {/* Navigation links for unauthenticated users */}
                        <a href="/login" style={homeStyles.navLink}>Login</a>
                        <a href="/register" style={homeStyles.navLink}>Register</a>
                    </nav>
                </>
            )}
        </div>
    );
};

// --- Component: Protected ---
// A simple component to demonstrate a page that only authenticated users can see.
const Protected = () => {
    const { user } = useAuth(); // Get user info from context
    return (
        <div style={homeStyles.container}>
            <h2 style={homeStyles.heading}>Protected Content</h2>
            <p style={homeStyles.message}>If you see this, you are authenticated, {user}!</p>
            <a href="/" style={homeStyles.navLink}>Go Home</a> {/* Link back to home */}
        </div>
    );
};

// --- Component: ProtectedRoute ---
// This is a special component that acts as a gatekeeper for protected routes.
// It checks if the user is authenticated; if not, it redirects them to the login page.
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Get authentication status from context
    // If the user is NOT authenticated (isAuthenticated is false), redirect them to /login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // `replace` prevents adding the protected route to browser history
    }
    // If the user IS authenticated, render the children (the actual component for the protected route)
    return children;
};

// --- Inline Styles (Placeholder) ---
// These are very basic inline styles for visual feedback.
// When you integrate your React template, you will replace these with the template's CSS classes or components.
const homeStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#e9eff4',
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        color: '#333',
        marginBottom: '20px',
    },
    greeting: {
        fontSize: '1.2em',
        color: '#007bff',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    message: {
        fontSize: '1.1em',
        color: '#555',
        marginBottom: '30px',
    },
    nav: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    navLink: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1em',
        transition: 'background-color 0.3s ease',
    },
    navLinkHover: { // Note: Inline styles don't directly support hover states; this is illustrative.
        backgroundColor: '#0056b3',
    },
    logoutButton: {
        backgroundColor: '#dc3545',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1em',
        transition: 'background-color 0.3s ease',
    },
    logoutButtonHover: { // Note: Inline styles don't directly support hover states; this is illustrative.
        backgroundColor: '#c82333',
    },
};

// --- Main App Component ---
// This is the root component where our routing logic is defined.
function App() {
    return (
        // 1. BrowserRouter (as Router): Wraps your entire application, enabling client-side routing.
        // It uses the HTML5 history API to keep your UI in sync with the URL.
        <Router>
            {/* 2. AuthProvider: Wraps all components that need access to authentication state.
                Any component inside AuthProvider can use the `useAuth()` hook to get token, user, login, logout, etc. */}
            <AuthProvider>
                {/* 3. Routes: A container for all your individual Route components.
                    It renders only the first <Route> that matches the current URL. */}
                <Routes>
                    {/* 4. Route for Login Page */}
                    {/* path="/login": The URL path to match. */}
                    {/* element={<Login />}: The React component to render when the path matches. */}
                    <Route path="/login" element={<Login />} />

                    {/* 5. Route for Register Page */}
                    <Route path="/register" element={<Register />} />

                    {/* 6. Route for Home Page */}
                    {/* path="/": The root URL of your application. */}
                    <Route path="/" element={<Home />} />

                    {/* 7. Protected Route Example */}
                    {/* This route uses our custom ProtectedRoute component as a wrapper. */}
                    {/* The `element` prop here takes the <ProtectedRoute> component. */}
                    {/* The actual component we want to protect (<Protected />) is passed as children to ProtectedRoute. */}
                   
                      {/* Protected Routes (Require Authentication) */}
                    <Route
                        path="/protected"
                        element={
                            <ProtectedRoute>
                                <Protected />
                            </ProtectedRoute>
                        }
                    />
                    {/* New Protected Route for File Upload */}
                    <Route
                        path="/upload"
                        element={
                            <ProtectedRoute>
                                <FileUpload />
                            </ProtectedRoute>
                        }
                    />
                    {/* New Protected Route for All Files */}
                      <Route
                        path="/all-files"
                        element={
                            <ProtectedRoute>
                                <AllFiles />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/my-files"
                        element={
                            <ProtectedRoute>
                                <MyFiles />
                            </ProtectedRoute>
                        }
                    />

                    {/* FUTURE STEPS: We will add routes for /upload, /my-files, /all-files here, also likely protected. */}

                    {/* Optional: Catch-all route for 404 (Not Found) pages. */}
                    {/* The '*' path means "match any path that hasn't been matched by previous routes". */}
                    <Route path="*" element={<h2>404 Not Found</h2>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App; // Export the App component to be rendered by index.js