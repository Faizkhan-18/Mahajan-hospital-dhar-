'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Activity,
  Bone,
  Baby,
  Eye,
  Heart,
  Smile,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronRight,
  Search,
  PhoneCall
} from 'lucide-react';
import { DEPARTMENTS_DATA, DepartmentDetail } from '@/data/departments';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeptId, setSelectedDeptId] = useState<string>(DEPARTMENTS_DATA[0]?.id || '');

  const filteredDepts = DEPARTMENTS_DATA.filter((d) =>
    d.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.procedures.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const activeDept = DEPARTMENTS_DATA.find((d) => d.id === selectedDeptId) || DEPARTMENTS_DATA[0];

  return (
    <div className="treatments-page">
      {/* 1. Header Banner */}
      <section className="treatments-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Clinical Departments & Specialties</span>
          <h1 className="banner-title">Specialties & Surgical Treatments</h1>
          <p className="banner-desc">
            महाजन हॉस्पिटल में 25+ विशेषज्ञ चिकित्सा विभाग — जनरल मेडिसिन, लेप्रोस्कोपिक सर्जरी, हड्डी व जोड़ प्रत्यारोपण, स्त्री रोग, बाल चिकित्सा, क्रिटिकल केयर व सुपर-स्पेशलिटी सेवाएं।
          </p>
        </div>
      </section>

      {/* 2. Interactive Department Explorer */}
      <section className="section">
        <div className="container">
          <div className="treatments-layout">
            {/* Left Sidebar: Department List */}
            <div className="dept-sidebar">
              <div className="sidebar-search">
                <Search size={16} className="sidebar-search-icon" />
                <input
                  type="text"
                  placeholder="Search department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="sidebar-search-input"
                />
              </div>

              <div className="dept-nav-list">
                {filteredDepts.map((dept) => {
                  const isActive = dept.id === activeDept?.id;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      className={`dept-nav-item ${isActive ? 'dept-nav-active' : ''}`}
                      onClick={() => setSelectedDeptId(dept.id)}
                    >
                      <div className="dept-item-text">
                        <span className="dept-item-title">{dept.titleEnglish}</span>
                        <span className="dept-item-hindi">{dept.titleHindi}</span>
                      </div>
                      <ChevronRight size={16} className="dept-chevron" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Active Department Details */}
            {activeDept && (
              <div className="dept-detail-card card">
                <div className="dept-detail-header">
                  <div>
                    <span className="badge badge-teal">Specialty Overview</span>
                    <h2 className="dept-main-title">{activeDept.titleHindi}</h2>
                    <h3 className="dept-sub-title">{activeDept.titleEnglish}</h3>
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
                    className="btn btn-primary"
                  >
                    <PhoneCall size={16} />
                    <span>Call OPD: 07292-232900</span>
                  </a>
                </div>

                <div className="dept-full-desc">
                  <p>{activeDept.fullDesc}</p>
                </div>

                {/* Key Features */}
                <div className="detail-section">
                  <h4 className="detail-section-title">Key Clinical Highlights & Care</h4>
                  <div className="features-grid">
                    {activeDept.features.map((feat, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle2 size={16} className="text-teal" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Procedures Handled */}
                <div className="detail-section">
                  <h4 className="detail-section-title">Procedures & Diagnostics Covered</h4>
                  <div className="procedures-tags">
                    {activeDept.procedures.map((proc, idx) => (
                      <span key={idx} className="procedure-tag">
                        {proc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OPD Timings */}
                {activeDept.opdSchedule && (
                  <div className="opd-schedule-box">
                    <Clock size={18} className="text-teal" />
                    <div>
                      <strong>OPD Consultation Schedule:</strong>
                      <span> {activeDept.opdSchedule}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Grid of All Specialties */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Complete Catalog</span>
            <h2 className="heading-lg">All 25+ Clinical Departments</h2>
            <p className="subheading">
              एक ही परिसर में संपूर्ण प्राथमिक, द्वितीयक एवं तृतीयक स्तर की चिकित्सा सेवाएं।
            </p>
          </div>

          <div className="grid-3">
            {DEPARTMENTS_DATA.map((dept) => (
              <div
                key={dept.id}
                className="card card-hover dept-overview-card"
                onClick={() => {
                  setSelectedDeptId(dept.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="card-dept-title">{dept.titleEnglish}</h3>
                <p className="card-dept-hindi">{dept.titleHindi}</p>
                <p className="card-dept-desc">{dept.shortDesc}</p>
                <span className="view-detail-btn">
                  <span>View Details & OPD Timings →</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .treatments-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(14, 116, 144, 0.76) 100%), url('/images/treatments-banner.jpg') center 30% / cover no-repeat;
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
        }

        /* Layout */
        .treatments-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Sidebar */
        .dept-sidebar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .sidebar-search {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .sidebar-search-icon {
          color: #64748b;
        }

        .sidebar-search-input {
          width: 100%;
          border: none;
          background: none;
          outline: none;
          font-size: 0.88rem;
        }

        .dept-nav-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: 540px;
          overflow-y: auto;
        }

        .dept-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dept-nav-item:hover {
          background: #f1f5f9;
        }

        .dept-nav-active {
          background: #f0f9ff;
          border-color: #bae6fd;
        }

        .dept-item-text {
          display: flex;
          flex-direction: column;
        }

        .dept-item-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0b1e33;
        }

        .dept-nav-active .dept-item-title {
          color: #0284c7;
        }

        .dept-item-hindi {
          font-size: 0.75rem;
          color: #64748b;
          font-family: var(--font-hindi);
        }

        .dept-chevron {
          color: #94a3b8;
        }

        .dept-nav-active .dept-chevron {
          color: #0284c7;
        }

        /* Detail Card */
        .dept-detail-card {
          padding: 36px;
        }

        .dept-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 24px;
        }

        .dept-main-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0b1e33;
          margin: 10px 0 2px;
          font-family: var(--font-hindi);
        }

        .dept-sub-title {
          font-size: 1.05rem;
          color: #0284c7;
          font-weight: 600;
        }

        .dept-full-desc {
          font-size: 1.02rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .detail-section {
          margin-bottom: 28px;
        }

        .detail-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 14px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.45;
        }

        .text-teal {
          color: #0284c7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .procedures-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .procedure-tag {
          background: #f1f5f9;
          color: #1e293b;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid #e2e8f0;
        }

        .opd-schedule-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 14px 18px;
          font-size: 0.92rem;
          color: #166534;
        }

        /* Overview Grid */
        .dept-overview-card {
          display: flex;
          flex-direction: column;
        }

        .card-dept-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 2px;
        }

        .card-dept-hindi {
          font-size: 0.85rem;
          color: #0284c7;
          font-family: var(--font-hindi);
          margin-bottom: 10px;
        }

        .card-dept-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .view-detail-btn {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0284c7;
        }

        @media (max-width: 1024px) {
          .treatments-layout {
            grid-template-columns: 1fr;
          }
          .dept-sidebar {
            max-height: none;
          }
          .dept-nav-list {
            max-height: 260px;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .dept-detail-card {
            padding: 20px 16px;
          }
          .opd-schedule-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
