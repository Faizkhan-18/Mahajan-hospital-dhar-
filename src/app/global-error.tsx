'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="hi">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          background: '#f8fafc',
          padding: '20px'
        }}>
          <div style={{
            maxWidth: '480px',
            background: '#ffffff',
            padding: '36px 28px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(7, 27, 47, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#fee2e2',
              color: '#dc2626',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 16px auto'
            }}>
              <AlertTriangle size={32} />
            </div>
            <h2 style={{ color: '#071b2f', marginBottom: '10px' }}>सिस्टम त्रुटि (System Error)</h2>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              एप्लीकेशन लोड करने में समस्या आई है। कृपया पेज को रीफ्रेश करें।
            </p>
            <button
              onClick={() => reset()}
              style={{
                background: '#071b2f',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <RefreshCw size={16} />
              <span>पेज रीलोड करें</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
