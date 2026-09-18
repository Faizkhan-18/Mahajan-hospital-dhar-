'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  PhoneCall,
  Clock,
  MapPin,
  Menu,
  X,
  Calendar,
  ShieldCheck,
  Ambulance,
  ChevronRight,
  Headphones
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

interface HeaderProps {
  onOpenAppointment?: (dept?: string, doctor?: string) => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/treatments', label: 'Specialties' },
    { href: '/services', label: 'Services' },
    { href: '/ayushman', label: 'PM Ayushman' },
    { href: '/blood-center', label: 'Blood Center' },
  ];

  const isRouteActive = (href: string) => {
    if (!pathname) return false;
    const current = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const target = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;

    if (target === '/') {
      return current === '/';
    }
    return current === target || current.startsWith(`${target}/`);
  };

  return (
    <header className="site-header">
      {/* Top Notification / Emergency Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="emergency-indicator">
              <span className="pulsing-dot"></span>
              <strong>24×7 Emergency &amp; Trauma:</strong>
              <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="emergency-phone">
                {HOSPITAL_INFO.contacts.emergencyMobile}
              </a>
            </span>
            <span className="divider-dot">•</span>
            <span className="ambulance-tag">
              <Ambulance size={14} />
              <span>Ambulance: {HOSPITAL_INFO.contacts.ambulance}</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="nabh-tag">
              <ShieldCheck size={14} className="icon-gold" />
              <span>{HOSPITAL_INFO.accreditation}</span>
            </span>
            <span className="divider-dot">•</span>
            <span className="city-tag">
              <MapPin size={13} />
              <span>{HOSPITAL_INFO.address.city}</span>
            </span>
            <Link
              href="/admin"
              className={`admin-link ${isRouteActive('/admin') ? 'admin-link-active' : ''}`}
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container main-nav-container">
          {/* Logo & Brand Identity */}
          <Link href="/" className="brand-logo-group" onClick={() => setMobileMenuOpen(false)} aria-label="Mahajan Hospital Home">
            <div className="logo-img-wrapper">
              <Image
                src="/images/logo.png"
                alt="Mahajan Hospital Logo"
                width={100}
                height={100}
                priority
                className="hospital-logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isRouteActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-item-text">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Highlighted CTA & Mobile Toggle */}
          <div className="header-actions">
            <div className="nav-action-divider" />

            <Link
              href="/contact"
              className={`nav-contact-btn ${isRouteActive('/contact') ? 'nav-contact-btn-active' : ''}`}
              id="header-contact-btn"
            >
              <PhoneCall size={15} className="contact-btn-icon" />
              <span className="contact-btn-text">Contact Us</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-inner">
            <nav className="mobile-nav-links" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = isRouteActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-nav-link ${isActive ? 'mobile-active' : ''}`}
                    style={{
                      color: isActive ? '#0284c7' : '#1e293b',
                      fontWeight: isActive ? 700 : 600,
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="active-badge">Active</span>
                    ) : (
                      <ChevronRight size={18} className="chevron" />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${isRouteActive('/contact') ? 'mobile-active' : ''}`}
                style={{
                  color: isRouteActive('/contact') ? '#0284c7' : '#0369a1',
                  fontWeight: 700,
                  background: '#f0f9ff',
                  marginTop: '8px',
                  borderRadius: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PhoneCall size={16} />
                  <span>Contact Us</span>
                </div>
                <ChevronRight size={18} className="chevron" />
              </Link>
            </nav>

            <div className="mobile-drawer-cta">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
                className="btn btn-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <PhoneCall size={18} />
                <span>Call OPD: {HOSPITAL_INFO.contacts.landline1}</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`}
                className="btn btn-emergency"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <PhoneCall size={18} />
                <span>24×7 Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
