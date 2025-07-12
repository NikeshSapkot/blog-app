import React from 'react';
import { createRoot } from 'react-dom/client'; // Modern React 18+ syntax
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);