'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="error-container">
      <div className="error-card card">
        <div className="error-icon-wrap">
          <AlertTriangle size={36} className="text-red" />
        </div>
        
        <h2>कुछ गलत हो गया</h2>
        <p>
          कृपया पृष्ठ को पुनः लोड करने का प्रयास करें अथवा मुख्य पृष्ठ पर जाएं।
        </p>

        <div className="error-actions">
          <button onClick={() => reset()} className="btn btn-primary btn-md">
            <RefreshCw size={16} />
            <span>पुनः प्रयास करें</span>
          </button>
          <Link href="/" className="btn btn-outline btn-md">
            <Home size={16} />
            <span>होम पेज पर जाएं</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .error-card {
          max-width: 480px;
          width: 100%;
          text-align: center;
          padding: 40px 30px;
          background: #ffffff;
        }

        .error-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          display: grid;
          place-items: center;
          margin: 0 auto 20px auto;
        }

        .text-red {
          color: #dc2626;
        }

        h2 {
          font-family: var(--font-hindi);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 12px;
        }

        p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
