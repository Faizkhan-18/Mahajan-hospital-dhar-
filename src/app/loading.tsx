'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>लोड हो रहा है...</p>

      <style jsx>{`
        .loading-container {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .spinner {
          width: 42px;
          height: 42px;
          border: 3px solid rgba(7, 27, 47, 0.1);
          border-top-color: var(--gold-primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        p {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
