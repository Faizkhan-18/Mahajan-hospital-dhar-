'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Search, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-card card">
          <span className="not-found-code">404</span>
          <h1>पृष्ठ नहीं मिला (Page Not Found)</h1>
          <p>
            आप जिस पृष्ठ की खोज कर रहे हैं वह उपलब्ध नहीं है अथवा स्थानांतरित कर दिया गया है।
          </p>

          <div className="not-found-actions">
            <Link href="/" className="btn btn-primary btn-md">
              <Home size={16} />
              <span>मुख्य पृष्ठ (Home)</span>
            </Link>
            <Link href="/doctors" className="btn btn-outline btn-md">
              <Search size={16} />
              <span>डॉक्टर खोजें</span>
            </Link>
            <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-emergency btn-md">
              <Phone size={16} />
              <span>हेल्पलाइन</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found-page {
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: #f8fafc;
        }

        .not-found-card {
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
          padding: 48px 32px;
          background: #ffffff;
        }

        .not-found-code {
          display: block;
          font-size: 4rem;
          font-weight: 900;
          color: var(--gold-primary);
          line-height: 1;
          margin-bottom: 12px;
        }

        h1 {
          font-family: var(--font-hindi);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 12px;
        }

        p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .not-found-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
