'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone, PhoneCall, Users, MapPin } from 'lucide-react';
import Link from 'next/link';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />

      {/* Mobile-First Sticky Bottom Quick-Action Bar */}
      <div className="mobile-action-bar" role="navigation" aria-label="Quick mobile actions">
        <a
          href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`}
          className="mob-action-item mob-action-emergency"
          id="mobile-emergency-call-btn"
        >
          <span className="mob-icon-wrap bg-red">
            <Phone size={18} />
          </span>
          <span className="mob-label">24×7 Emergency</span>
        </a>

        <a
          href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
          className="mob-action-item mob-action-primary"
          id="mobile-call-opd-btn"
        >
          <span className="mob-icon-wrap bg-teal">
            <PhoneCall size={18} />
          </span>
          <span className="mob-label">Call OPD</span>
        </a>

        <Link href="/doctors" className="mob-action-item" id="mobile-doctors-btn">
          <span className="mob-icon-wrap">
            <Users size={18} />
          </span>
          <span className="mob-label">Doctors</span>
        </Link>

        <a
          href={HOSPITAL_INFO.address.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="mob-action-item"
          id="mobile-directions-btn"
        >
          <span className="mob-icon-wrap">
            <MapPin size={18} />
          </span>
          <span className="mob-label">Directions</span>
        </a>
      </div>

      <style jsx>{`
        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex: 1 0 auto;
        }

        .mobile-action-bar {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-action-bar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            box-shadow: 0 -4px 20px rgba(15, 23, 42, 0.12);
            z-index: 999;
            padding: 6px 8px env(safe-area-inset-bottom, 8px);
            backdrop-filter: blur(10px);
          }

          .mob-action-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            padding: 6px 4px;
            color: #475569;
            font-size: 0.72rem;
            font-weight: 600;
            border: none;
            background: none;
            cursor: pointer;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.15s ease;
          }

          .mob-action-item:active {
            transform: scale(0.94);
          }

          .mob-icon-wrap {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f1f5f9;
            color: #0f172a;
          }

          .bg-red {
            background: #dc2626;
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(220, 38, 38, 0.35);
          }

          .bg-teal {
            background: #0284c7;
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35);
          }

          .mob-action-emergency .mob-label {
            color: #dc2626;
            font-weight: 700;
          }

          .mob-action-primary .mob-label {
            color: #0284c7;
            font-weight: 700;
          }

          .mob-label {
            line-height: 1.1;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
}
