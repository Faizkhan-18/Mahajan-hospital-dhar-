'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Heart,
  ExternalLink,
  ChevronRight,
  Ambulance
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Banner: 24×7 Quick Assist */}
      <div className="footer-assist-strip">
        <div className="container assist-content">
          <div className="assist-left">
            <span className="assist-icon-box">
              <Ambulance size={22} className="text-white" />
            </span>
            <div>
              <h4 className="assist-title">24×7 Emergency & Ambulance Service</h4>
              <p className="assist-desc">Immediate medical response & critical patient transport in Dhar and surrounding areas.</p>
            </div>
          </div>
          <div className="assist-right">
            <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-white btn-sm">
              <Phone size={15} />
              <span>Call Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: Brand & Trust */}
          <div className="footer-col col-brand">
            <div className="footer-logo-row">
              <Image
                src="/images/logo.png"
                alt="Mahajan Hospital Logo"
                width={44}
                height={44}
                className="footer-logo-img"
              />
              <div>
                <h3 className="footer-brand-title">महाजन हॉस्पिटल</h3>
                <p className="footer-brand-sub">Dhar, Madhya Pradesh</p>
              </div>
            </div>

            <p className="footer-about-text">
              100 बिस्तरों का NABH Entry-Level प्रमाणित मल्टीस्पेशलिटी अस्पताल। वरिष्ठ सर्जन डॉ. एम. एम. महाजन के 50 वर्षों के सर्जिकल अनुभव के साथ धार एवं संपूर्ण निमाड़-मालवा क्षेत्र में विश्वसनीय स्वास्थ्य सेवा।
            </p>

            <div className="footer-accreditation">
              <ShieldCheck size={18} className="text-amber" />
              <span>NABH Entry-Level Certified • Estd 2011</span>
            </div>
          </div>

          {/* Col 2: Hospital Modules */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  <ChevronRight size={14} />
                  <span>About &amp; Campus Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Find a Doctor (39+ Specialists)</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Departments &amp; Specialties</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  <ChevronRight size={14} />
                  <span>1.5T MRI, CT Scan &amp; Diagnostics</span>
                </Link>
              </li>
              <li>
                <Link href="/ayushman" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Ayushman Bharat &amp; TPA Insurance</span>
                </Link>
              </li>
              <li>
                <Link href="/blood-center" className="footer-link">
                  <ChevronRight size={14} />
                  <span>24×7 Blood Center &amp; Components</span>
                </Link>
              </li>
              <li>
                <Link href="/patient-info" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Patient Guide, Checklist &amp; FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Clinical Departments */}
          <div className="footer-col">
            <h4 className="footer-heading">Specialties</h4>
            <ul className="footer-links">
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>General & Laparoscopic Surgery</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>General Medicine & Gastro</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Orthopedics & Joint Replacement</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Gynecology & Maternity Care</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="footer-link">
                  <ChevronRight size={14} />
                  <span>Pediatrics & NICU Care</span>
                </Link>
              </li>
              <li>
                <Link href="/about#campus-facilities" className="footer-link">
                  <ChevronRight size={14} />
                  <span>24×7 Blood Center & CT/MRI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & OPD Times */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact & Location</h4>
            <div className="footer-contact-list">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <p className="contact-bold">{HOSPITAL_INFO.address.street}, {HOSPITAL_INFO.address.city}</p>
                  <p className="contact-muted">Madhya Pradesh - {HOSPITAL_INFO.address.pincode}</p>
                  <a
                    href={HOSPITAL_INFO.address.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-link"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div>
                  <p className="contact-bold">Landlines: {HOSPITAL_INFO.contacts.landline1}</p>
                  <p className="contact-muted">OPD & Enquiry: {HOSPITAL_INFO.contacts.generalMobile}</p>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <div>
                  <p className="contact-bold">OPD: Mon - Sat (9 AM - 2 PM, 4 PM - 7 PM)</p>
                  <p className="contact-emergency-badge">Emergency: 24 Hours Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} Mahajan Multispeciality Hospital, Dhar. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link href="/about" className="bottom-link">About</Link>
            <span className="dot">•</span>
            <Link href="/ayushman" className="bottom-link">PM Ayushman</Link>
            <span className="dot">•</span>
            <Link href="/contact" className="bottom-link">Contact</Link>
            <span className="dot">•</span>
            <Link href="/admin" className="bottom-link">Admin Portal</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #071321;
          color: #cbd5e1;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-assist-strip {
          background: linear-gradient(135deg, #0f2942 0%, #16365c 100%);
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .assist-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .assist-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .assist-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .assist-title {
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .assist-desc {
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .footer-main {
          padding: 60px 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 36px;
        }

        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-logo-img {
          object-fit: contain;
          border-radius: 8px;
          background: #ffffff;
          padding: 2px;
        }

        .footer-brand-title {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 700;
          font-family: var(--font-hindi);
        }

        .footer-brand-sub {
          color: #38bdf8;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .footer-about-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 18px;
        }

        .footer-accreditation {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .text-amber {
          color: #f59e0b;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 18px;
          position: relative;
          padding-bottom: 8px;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: #0284c7;
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          font-size: 0.88rem;
          transition: all 0.2s;
        }

        .footer-link:hover {
          color: #38bdf8;
          transform: translateX(4px);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
        }

        .contact-icon {
          color: #38bdf8;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .contact-bold {
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .contact-muted {
          color: #94a3b8;
          font-size: 0.82rem;
        }

        .maps-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #38bdf8;
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 4px;
        }

        .maps-link:hover {
          text-decoration: underline;
        }

        .contact-emergency-badge {
          display: inline-block;
          color: #ef4444;
          font-size: 0.78rem;
          font-weight: 700;
          margin-top: 2px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 0;
          font-size: 0.82rem;
          color: #64748b;
        }

        .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bottom-link {
          color: #94a3b8;
        }

        .bottom-link:hover {
          color: #ffffff;
        }

        .dot {
          color: #475569;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .assist-content {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .assist-left {
            gap: 12px;
          }
          .assist-right {
            width: 100%;
          }
          .assist-right .btn {
            width: 100%;
            justify-content: center;
          }
          .bottom-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }
          .bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}
