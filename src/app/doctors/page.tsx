'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Search,
  Calendar,
  Clock,
  GraduationCap,
  Stethoscope,
  Building,
  Filter,
  UserCheck,
  MapPin,
  ChevronRight,
  PhoneCall,
  User
} from 'lucide-react';
import { DOCTORS_DATA, Doctor } from '@/data/doctors';
import { HOSPITAL_INFO } from '@/data/hospital-info';

function DoctorAvatar({
  id,
  name,
  image,
  department,
  category
}: {
  id: string;
  name: string;
  image?: string;
  department: string;
  category: string;
}) {
  const [imgError, setImgError] = useState(false);

  // Extract clean 2-letter uppercase initials from ID or Name
  const getInitials = (docId: string, docName: string) => {
    if (docId) {
      const parts = docId.replace(/^dr-/, '').split('-').filter(Boolean);
      if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      }
      if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
      }
    }
    const clean = docName.replace('डॉ.', '').replace('Dr.', '').replace('DR.', '').trim();
    const parts = clean.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0]?.slice(0, 2).toUpperCase() || 'DR';
  };

  const initials = getInitials(id, name);

  // Department / Category theme class for distinct colored gradient placeholders
  const getCategoryTheme = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('medicine') || c.includes('gastro')) return 'theme-medicine';
    if (c.includes('surgery')) return 'theme-surgery';
    if (c.includes('ortho') || c.includes('spine')) return 'theme-ortho';
    if (c.includes('gynec') || c.includes('maternity')) return 'theme-gynec';
    if (c.includes('pediatric') || c.includes('child')) return 'theme-pediatric';
    if (c.includes('cardio') || c.includes('heart')) return 'theme-cardio';
    if (c.includes('uro') || c.includes('nephro')) return 'theme-urology';
    if (c.includes('neuro')) return 'theme-neuro';
    if (c.includes('eye') || c.includes('opthal')) return 'theme-eye';
    if (c.includes('ent') || c.includes('dental') || c.includes('skin')) return 'theme-ent';
    return 'theme-default';
  };

  const themeClass = getCategoryTheme(category);

  if (!image || imgError) {
    return (
      <div className={`doc-avatar-placeholder ${themeClass}`} title={`${name} - ${department}`}>
        {/* Doctor Silhouette & Medical Stethoscope Illustration */}
        <div className="doc-vector-art">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="doc-vector-svg">
            <circle cx="32" cy="20" r="11" fill="currentColor" fillOpacity="0.95" />
            <path d="M12 56C12 43 20 37 32 37C44 37 52 43 52 56" fill="currentColor" fillOpacity="0.95" />
            {/* Stethoscope around neck */}
            <path d="M25 37V45C25 48.866 28.134 52 32 52C35.866 52 39 48.866 39 45V37" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="39" cy="45" r="2.5" fill="#ffffff" />
          </svg>
        </div>
        <span className="doc-initials-badge">{initials}</span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      width={72}
      height={72}
      className="doc-avatar-img"
      unoptimized
      onError={() => setImgError(true)}
    />
  );
}

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState<'all' | 'hospital' | 'indore'>('all');

  const categories = [
    { id: 'all', label: 'All Specialties (सभी विभाग)' },
    { id: 'medicine', label: 'General Medicine & Gastro' },
    { id: 'surgery', label: 'General & Laparoscopic Surgery' },
    { id: 'orthopedics', label: 'Orthopedics & Spine' },
    { id: 'gynecology', label: 'Gynecology & Maternity' },
    { id: 'pediatrics', label: 'Pediatrics & Neonatology' },
    { id: 'cardiology', label: 'Cardiology (हृदय रोग)' },
    { id: 'urology', label: 'Urology (मूत्र रोग)' },
    { id: 'nephrology', label: 'Nephrology & Dialysis' },
    { id: 'neurology', label: 'Neurology (मस्तिष्क व नस)' },
    { id: 'ent', label: 'ENT (कान, नाक, गला)' },
    { id: 'eye', label: 'Eye Care (नेत्र रोग)' },
  ];

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      // Search term matching
      const matchesSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.qualifications && doc.qualifications.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category matching
      const matchesCategory =
        selectedCategory === 'all' || doc.category.toLowerCase() === selectedCategory.toLowerCase();

      // Source matching
      const matchesSource =
        selectedSource === 'all' ||
        (selectedSource === 'hospital' && doc.source === 'hospital') ||
        (selectedSource === 'indore' && (doc.source === 'indore' || doc.source === 'visiting'));

      return matchesSearch && matchesCategory && matchesSource;
    });
  }, [searchTerm, selectedCategory, selectedSource]);

  return (
    <div className="doctors-page">
      {/* 1. Header Banner */}
      <section className="doctors-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Medical Specialists Directory</span>
          <h1 className="banner-title">Find a Doctor &amp; Consultation Schedule</h1>
          <p className="banner-desc">
            महाजन हॉस्पिटल धार में 39+ समर्पित इन-हाउस एवं इंदौर के विजिटिंग सुपर-स्पेशलिस्ट चिकित्सकों की संपूर्ण सूची व ओपीडी समय।
          </p>

          {/* Live Search Bar */}
          <div className="search-bar-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search doctor by name, specialty, or condition (e.g. Dr. Meetesh, Surgery, Knee, Diabetes)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="clear-search-btn"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Filter Controls & Catalog */}
      <section className="section">
        <div className="container">
          <div className="filters-container">
            {/* Source Filter (All / Hospital Specialists / Indore Visiting) */}
            <div className="source-filter-tabs">
              <button
                type="button"
                className={`tab-btn ${selectedSource === 'all' ? 'tab-active' : ''}`}
                onClick={() => setSelectedSource('all')}
              >
                All Specialists ({DOCTORS_DATA.length})
              </button>
              <button
                type="button"
                className={`tab-btn ${selectedSource === 'hospital' ? 'tab-active' : ''}`}
                onClick={() => setSelectedSource('hospital')}
              >
                Hospital Specialists (धार इन-हाउस)
              </button>
              <button
                type="button"
                className={`tab-btn ${selectedSource === 'indore' ? 'tab-active' : ''}`}
                onClick={() => setSelectedSource('indore')}
              >
                Indore Visiting Consultants (इंदौर विशेषज्ञ)
              </button>
            </div>

            {/* Department Category Pills */}
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`pill-btn ${selectedCategory === cat.id ? 'pill-active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="results-meta">
            <span>
              Showing <strong>{filteredDoctors.length}</strong> doctors
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </span>
            {(searchTerm || selectedCategory !== 'all' || selectedSource !== 'all') && (
              <button
                type="button"
                className="reset-filters-link"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSource('all');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Doctor Cards Grid */}
          {filteredDoctors.length === 0 ? (
            <div className="empty-state card text-center">
              <Stethoscope size={48} className="empty-icon" />
              <h3 className="heading-sm">No doctors match your search</h3>
              <p className="subheading" style={{ margin: '8px auto 16px' }}>
                Try searching with a different keyword or specialty filter.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSource('all');
                }}
              >
                Show All Doctors
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredDoctors.map((doc) => (
                <div key={doc.id} className="card card-hover doctor-card">
                  <div className="doc-card-top">
                    <div className="doc-avatar-wrapper">
                      <DoctorAvatar
                        id={doc.id}
                        name={doc.name}
                        image={doc.image}
                        department={doc.department}
                        category={doc.category}
                      />
                    </div>
                    <div className="doc-meta-top">
                      <span className={`source-badge ${doc.source === 'indore' ? 'badge-indore' : 'badge-inhouse'}`}>
                        {doc.source === 'indore' ? 'Indore Visiting' : 'Hospital Specialist'}
                      </span>
                      <span className="doc-dept-tag">{doc.department}</span>
                    </div>
                  </div>

                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="doc-role">{doc.role}</p>

                  {doc.qualifications && (
                    <div className="doc-info-row">
                      <GraduationCap size={15} className="info-icon" />
                      <span>{doc.qualifications}</span>
                    </div>
                  )}

                  {doc.timing && (
                    <div className="doc-info-row timing-row">
                      <Clock size={15} className="info-icon" />
                      <span>{doc.timing}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .doctors-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(2, 132, 199, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 25% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 54px;
          position: relative;
        }

        .banner-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 14px 0 10px;
          color: #ffffff;
        }

        .banner-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 780px;
          margin-bottom: 28px;
        }

        .search-bar-wrapper {
          position: relative;
          max-width: 700px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          padding: 6px 14px;
        }

        .search-icon {
          color: #64748b;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .search-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: #0f172a;
          padding: 8px 0;
        }

        .clear-search-btn {
          background: none;
          border: none;
          color: #ef4444;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 4px 8px;
        }

        /* Filters */
        .filters-container {
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .source-filter-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .source-filter-tabs::-webkit-scrollbar {
          display: none;
        }

        .tab-btn {
          padding: 8px 18px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #334155;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        .tab-active {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        .tab-active:hover {
          color: #ffffff;
        }

        .category-pills {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 6px;
          scrollbar-width: none;
        }

        .category-pills::-webkit-scrollbar {
          display: none;
        }

        .pill-btn {
          white-space: nowrap;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pill-btn:hover {
          background: #f0f9ff;
          color: #0284c7;
          border-color: #bae6fd;
        }

        .pill-active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }

        .pill-active:hover {
          background: #1e293b;
          color: #ffffff;
        }

        .results-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.88rem;
          color: #64748b;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .reset-filters-link {
          background: none;
          border: none;
          color: #0284c7;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .reset-filters-link:hover {
          text-decoration: underline;
        }

        /* Doctor Card */
        .doctor-card {
          display: flex;
          flex-direction: column;
        }

        .doc-card-top {
          display: flex;
          gap: 14px;
          margin-bottom: 14px;
        }

        .doc-avatar-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 12px;
          overflow: hidden;
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .doc-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .doc-avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #ffffff;
          overflow: hidden;
        }

        /* Specialty-Themed Gradients */
        .theme-medicine {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-surgery {
          background: linear-gradient(135deg, #0d9488 0%, #047857 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-ortho {
          background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-gynec {
          background: linear-gradient(135deg, #9333ea 0%, #7e22ce 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-pediatric {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-cardio {
          background: linear-gradient(135deg, #e11d48 0%, #9f1239 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-urology {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-neuro {
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-eye {
          background: linear-gradient(135deg, #d97706 0%, #92400e 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-ent {
          background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .theme-default {
          background: linear-gradient(135deg, #334155 0%, #0f172a 100%);
          color: rgba(255, 255, 255, 0.35);
        }

        .doc-vector-art {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .doc-vector-svg {
          width: 100%;
          height: 100%;
          transform: translateY(3px) scale(1.05);
        }

        .doc-initials-badge {
          position: absolute;
          bottom: 4px;
          right: 4px;
          font-size: 0.62rem;
          font-weight: 800;
          background: #ffffff;
          color: #0f172a;
          padding: 1px 5px;
          border-radius: 6px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
          line-height: 1.2;
          z-index: 2;
        }

        .doc-meta-top {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-start;
        }

        .source-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .badge-indore {
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fde68a;
        }

        .badge-inhouse {
          background: #f0f9ff;
          color: #0284c7;
          border: 1px solid #bae6fd;
        }

        .doc-dept-tag {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        .doc-name {
          font-size: 1.12rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 2px;
          font-family: var(--font-hindi);
        }

        .doc-role {
          font-size: 0.85rem;
          color: #0284c7;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .doc-info-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: #475569;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .timing-row {
          color: #1e293b;
          font-weight: 500;
          margin-top: 4px;
        }

        .info-icon {
          color: #0284c7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .doc-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .btn-book {
          width: 100%;
          justify-content: center;
          text-decoration: none;
        }

        .empty-state {
          padding: 48px 24px;
        }

        .empty-icon {
          color: #cbd5e1;
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .doctors-hero-banner {
            padding: 40px 0 35px;
          }
          .filters-container {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
