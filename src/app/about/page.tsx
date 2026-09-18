'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  Users,
  Stethoscope,
  Calendar,
  Clock,
  ArrowRight,
  Radio,
  Activity,
  Bed,
  Droplet,
  PhoneCall,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';
import { FACILITIES_DATA } from '@/data/facilities';

export default function AboutPage() {
  const [selectedBlock, setSelectedBlock] = useState<'all' | 'blockA' | 'blockB'>('all');

  const milestones = [
    { year: '1970s', title: 'Surgical Pioneer', desc: 'Dr. M. M. Mahajan began serving Dhar and western MP, performing complex surgeries with dedication.' },
    { year: '2011', title: 'Foundation of Mahajan Hospital', desc: 'Modern multispeciality hospital established at Magajpura to bring superspeciality care to rural and tribal communities.' },
    { year: '2018', title: 'Campus Expansion (Block B)', desc: 'Expanded to 31,000 sq.ft. dual-block campus with 100+ beds, advanced ICU, and specialized OT suites.' },
    { year: 'Present', title: 'NABH Entry-Level Accreditation', desc: 'Certified for high standards in patient safety, advanced CT Scan, 1.5T MRI, and Government-recognized Blood Center.' },
  ];

  const campusBlocks = [
    {
      id: 'blockA',
      name: 'Block A (ओपीडी, एडवांस्ड डायग्नोस्टिक्स व इमरजेंसी विंग)',
      nameEn: 'Block A: Diagnostics, Emergency & OPD Hub',
      desc: 'मल्टीस्पेशलिटी ओपीडी विंग, 24×7 इमरजेंसी एवं ट्रॉमा केयर, 1.5T MRI, मल्टी-स्लाइस सीटी स्कैन, 24×7 पैथोलॉजी लैब, फार्मेसी एवं रजिस्ट्रेशन।',
      features: ['24×7 Emergency & Triage Bay', '1.5 Tesla HD MRI Scan', 'Multi-Slice CT Scan Center', 'Automated Pathology Laboratory', 'Specialist OPD Chambers'],
    },
    {
      id: 'blockB',
      name: 'Block B (सर्जिकल कॉम्प्लेक्स, क्रिटिकल केयर व इनपेशेंट विंग)',
      nameEn: 'Block B: Critical Care, Modular OT & Inpatient Wing',
      desc: 'मॉड्यूलर ऑपरेशन थिएटर्स (लैमिनार फ्लो), 24×7 आईसीयू, एनआईसीयू (नवजात शिशु केयर), शासकीय ब्लड सेंटर एवं 100+ बेड्स डीलक्स/प्राइवेट/जनरल वार्ड्स।',
      features: ['Laminar Flow Modular OTs', 'Multi-bed Critical Care ICU', 'Advanced Neonatal NICU', 'Govt. Licensed Blood Center', '100+ Inpatient Beds & Deluxe Rooms'],
    },
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header Banner */}
      <section className="about-hero-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge badge-amber">
              <Sparkles size={14} />
              <span>Hospital Profile &amp; Campus Facilities</span>
            </span>
            <h1 className="banner-title">अस्पताल परिचय एवं सुविधाएं (About &amp; Facilities)</h1>
            <p className="banner-desc">
              धार जिले में 31,000 वर्गफीट डुअल-ब्लॉक कैंपस, 100+ बेड्स, 1.5T MRI, 24×7 आईसीयू, ब्लड सेंटर एवं 50 वर्षों की विश्वसनीय सर्जिकल परंपरा।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Director's Vision & Profile */}
      <section className="section">
        <div className="container">
          <div className="director-grid">
            <div className="director-card">
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                <Image
                  src="/images/hosted/Dr.-M.M.-Mahajan-Managing-Director-scaled.jpg"
                  alt="Dr. M. M. Mahajan - Managing Director"
                  width={450}
                  height={520}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="director-badge">Managing Director &amp; Senior Surgeon</div>
              <h2 className="director-name">{HOSPITAL_INFO.managingDirector.name}</h2>
              <p className="director-role">{HOSPITAL_INFO.managingDirector.role}</p>

              <div className="director-stats-row">
                <div className="d-stat">
                  <span className="d-stat-val">50+ Yrs</span>
                  <span className="d-stat-lbl">Surgical Experience</span>
                </div>
                <div className="d-stat">
                  <span className="d-stat-val">90,000+</span>
                  <span className="d-stat-lbl">Successful Surgeries</span>
                </div>
                <div className="d-stat">
                  <span className="d-stat-val">100+</span>
                  <span className="d-stat-lbl">Hospital Beds</span>
                </div>
              </div>

              <blockquote className="director-quote">
                &quot;{HOSPITAL_INFO.managingDirector.message}&quot;
              </blockquote>

              <p className="director-bio">
                डॉ. एम. एम. महाजन ने अपने पांच दशकों के समर्पित सेवाकाल में धार, झाबुआ, अलीराजपुर, बड़वानी एवं खरगोन अंचल के हजारों मरीजों को नया जीवन दिया है। उनके नेतृत्व में महाजन हॉस्पिटल निरंतर उच्चतम नैतिक व चिकित्सीय मूल्यों के साथ संचालित हो रहा है।
              </p>
            </div>

            <div className="about-story-col">
              <span className="badge badge-teal">Our Vision &amp; Heritage</span>
              <h3 className="heading-md">विश्वसनीय चिकित्सा, आधुनिक तकनीक व स्थानीय सुलभता</h3>
              <p className="story-p">
                महाजन हॉस्पिटल की स्थापना इस विचार के साथ की गई थी कि धार और आसपास के ग्रामीण अंचल के किसी भी परिवार को गंभीर बीमारी, सर्जरी अथवा जांच के लिए बड़े शहरों में भटकना न पड़े।
              </p>
              <p className="story-p">
                आज 31,000 वर्गफीट में फैले इस 100-बिस्तरों वाले आधुनिक अस्पताल में 39 से अधिक समर्पित विशेषज्ञ व इंदौर के सुपर-स्पेशलिस्ट विज़िटिंग डॉक्टर्स अपनी नियमित सेवाएं दे रहे हैं।
              </p>

              <div className="values-list">
                <div className="value-item">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <strong>NABH Entry-Level Certified:</strong>
                    <p>रोगी सुरक्षा, संक्रमण नियंत्रण एवं गुणवत्तापूर्ण उपचार के राष्ट्रीय मानकों पर खरा।</p>
                  </div>
                </div>
                <div className="value-item">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <strong>आयुष्मान भारत सहभागिता:</strong>
                    <p>पात्र गरीब व मध्यमवर्गीय परिवारों को ₹5 लाख तक का पूर्णतः निशुल्क कैशलेस इलाज।</p>
                  </div>
                </div>
                <div className="value-item">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <strong>एक ही छत के नीचे संपूर्ण सुविधाएं:</strong>
                    <p>ओपीडी, 1.5T MRI, CT Scan, 24×7 आईसीयू, ब्लड बैंक, एनआईसीयू व फार्मेसी।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 31,000 Sq. Ft. Dual-Campus Infrastructure (Block A & Block B) */}
      <section className="section section-bg-muted" id="campus-infrastructure">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>
              <Building2 size={14} />
              <span>Campus Architecture</span>
            </span>
            <h2 className="heading-lg">31,000 वर्गफीट डुअल-ब्लॉक परिसर (Dual-Block Campus)</h2>
            <p className="subheading">
              रोगी सुविधा एवं संक्रमण मुक्त वातावरण हेतु अस्पताल को दो सुनियोजित ब्लॉक्स में विभाजित किया गया है।
            </p>
          </div>

          <div className="campus-grid">
            {campusBlocks.map((blk) => (
              <div key={blk.id} className="campus-block-card card">
                <div className="block-card-header">
                  <Building2 size={26} className="text-teal" />
                  <div>
                    <h3 className="heading-sm" style={{ color: '#0b1e33' }}>{blk.name}</h3>
                    <span className="block-sub">{blk.nameEn}</span>
                  </div>
                </div>
                <p className="block-desc">{blk.desc}</p>
                <div className="block-features-grid">
                  {blk.features.map((feat, fIdx) => (
                    <div key={fIdx} className="block-feat-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detailed Clinical Facilities Breakdown */}
      <section className="section" id="clinical-facilities">
        <div className="container">
          <div className="section-header flex-between flex-wrap gap-4">
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '8px' }}>
                <Activity size={14} />
                <span>Clinical Facilities &amp; Technology</span>
              </span>
              <h2 className="heading-lg">अस्पताल सुविधाएं एवं तकनीक (Clinical Facilities)</h2>
              <p className="subheading" style={{ marginTop: '4px' }}>
                24 घंटे क्रिटिकल केयर, एडवांस इमेजिंग, ब्लड बैंक एवं अत्याधुनिक ऑपरेशन थिएटर्स।
              </p>
            </div>
            <div className="facility-filter-chips">
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'all' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('all')}
              >
                All 6 Facilities
              </button>
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'blockA' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('blockA')}
              >
                Block A (Diagnostics &amp; OPD)
              </button>
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'blockB' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('blockB')}
              >
                Block B (ICU, OT &amp; Wards)
              </button>
            </div>
          </div>

          <div className="facilities-detailed-grid">
            {FACILITIES_DATA.map((fac) => {
              // Map icon based on facility id
              let FacIcon = Activity;
              if (fac.id === 'icu-critical-care') FacIcon = Activity;
              if (fac.id === 'nicu-neonatal') FacIcon = Bed;
              if (fac.id === 'blood-center') FacIcon = Droplet;
              if (fac.id === 'ct-mri-diagnostics') FacIcon = Radio;
              if (fac.id === 'operation-theatre') FacIcon = Activity;
              if (fac.id === 'inpatient-wards') FacIcon = Bed;

              return (
                <div key={fac.id} className="facility-detail-card card">
                  <div className="fac-card-top">
                    <div className="fac-number-pill">{fac.number}</div>
                    <div className="fac-icon-circle">
                      <FacIcon size={24} className="text-teal" />
                    </div>
                    <div>
                      <h3 className="fac-title-hi">{fac.titleHindi}</h3>
                      <span className="fac-title-en">{fac.titleEnglish}</span>
                    </div>
                  </div>

                  <p className="fac-card-desc">{fac.descriptionHindi}</p>

                  <div className="fac-features-list">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="fac-feat-row">
                        <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="fac-card-footer">
                    {fac.contactNumber ? (
                      <a href={`tel:${fac.contactNumber.replace(/[^0-9]/g, '')}`} className="btn btn-secondary btn-sm">
                        <PhoneCall size={14} />
                        <span>{fac.contactLabel || 'Enquiry'}: {fac.contactNumber}</span>
                      </a>
                    ) : (
                      <Link href="/contact" className="btn btn-secondary btn-sm">
                        <span>Contact Desk</span>
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Hospital Journey & Milestones */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Journey of Trust</span>
            <h2 className="heading-lg">हमारी विकास यात्रा (Milestones of Care)</h2>
            <p className="subheading">
              एक समर्पित सर्जन के संकल्प से 100-बिस्तरों वाले आधुनिक मल्टीस्पेशलिटी अस्पताल तक की यात्रा।
            </p>
          </div>

          <div className="milestones-timeline">
            {milestones.map((ms, idx) => (
              <div key={idx} className="milestone-card card">
                <div className="ms-year">{ms.year}</div>
                <h3 className="heading-sm" style={{ color: '#0b1e33', marginBottom: '8px' }}>{ms.title}</h3>
                <p className="ms-desc">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Action Strip */}
      <section className="section">
        <div className="container">
          <div className="about-cta-card card">
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '8px' }}>24×7 Emergency &amp; OPD</span>
              <h2 className="heading-md" style={{ color: '#0b1e33' }}>
                विश्वसनीय स्वास्थ्य परामर्श अथवा जांच हेतु संपर्क करें
              </h2>
              <p style={{ color: '#475569', marginTop: '6px', fontSize: '0.95rem' }}>
                सोमवार से शनिवार नियमित ओपीडी • 24 घंटे इमरजेंसी, सीटी स्कैन, एमआरआई एवं ब्लड सेंटर खुला है।
              </p>
            </div>
            <div className="about-cta-btns">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
                className="btn btn-primary"
              >
                <PhoneCall size={18} />
                <span>Call OPD: 07292 - 232900</span>
              </a>
              <Link href="/doctors" className="btn btn-secondary">
                <Users size={18} />
                <span>View 39+ Doctors</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Banner */
        .about-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(7, 19, 33, 0.84) 50%, rgba(3, 105, 161, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 30% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 56px;
          position: relative;
        }

        .banner-content {
          max-width: 800px;
        }

        .banner-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          margin: 12px 0 10px;
          line-height: 1.2;
          font-family: var(--font-hindi);
        }

        .banner-desc {
          font-size: 1.05rem;
          color: #bae6fd;
          line-height: 1.6;
        }

        /* Director Grid */
        .director-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: start;
        }

        .director-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .director-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .director-name {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0b1e33;
          margin-bottom: 4px;
        }

        .director-role {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .director-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
          text-align: center;
        }

        .d-stat-val {
          display: block;
          font-size: 1.35rem;
          font-weight: 800;
          color: #0284c7;
        }

        .d-stat-lbl {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 600;
        }

        .director-quote {
          font-size: 0.98rem;
          color: #334155;
          font-style: italic;
          border-left: 4px solid #0284c7;
          padding-left: 14px;
          margin: 20px 0;
          line-height: 1.6;
        }

        .director-bio {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.65;
        }

        /* About Story Col */
        .about-story-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .story-p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 10px;
        }

        .value-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.5;
        }

        .value-item strong {
          display: block;
          color: #0b1e33;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }

        /* Campus Architecture Grid */
        .campus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .campus-block-card {
          padding: 28px;
        }

        .block-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .block-sub {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
        }

        .block-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .block-features-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .block-feat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #334155;
          font-weight: 600;
        }

        /* Facilities Detailed Grid */
        .facilities-detailed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 20px;
        }

        .facility-detail-card {
          padding: 26px;
          display: flex;
          flex-direction: column;
        }

        .fac-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
          position: relative;
        }

        .fac-number-pill {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 0.8rem;
          font-weight: 800;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .fac-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fac-title-hi {
          font-size: 1.12rem;
          font-weight: 800;
          color: #0b1e33;
          font-family: var(--font-hindi);
          margin-bottom: 2px;
        }

        .fac-title-en {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
          display: block;
        }

        .fac-card-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .fac-features-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .fac-feat-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.4;
        }

        .fac-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .facility-filter-chips {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-chip {
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-chip:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        .chip-active {
          background: #0284c7 !important;
          color: #ffffff !important;
          border-color: #0284c7 !important;
        }

        /* Milestones Timeline */
        .milestones-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .milestone-card {
          padding: 24px;
        }

        .ms-year {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0284c7;
          margin-bottom: 8px;
        }

        .ms-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* Bottom Action Strip */
        .about-cta-card {
          padding: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          background: linear-gradient(135deg, #f0f7fc 0%, #ffffff 100%);
          flex-wrap: wrap;
        }

        .about-cta-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .director-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .campus-grid {
            grid-template-columns: 1fr;
          }
          .facilities-detailed-grid {
            grid-template-columns: 1fr;
          }
          .milestones-timeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .director-stats-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
            padding: 12px 8px;
          }
          .d-stat-val {
            font-size: 1.1rem;
          }
          .d-stat-lbl {
            font-size: 0.68rem;
          }
          .milestones-timeline {
            grid-template-columns: 1fr;
          }
          .about-cta-card {
            padding: 24px 18px;
            flex-direction: column;
            align-items: flex-start;
          }
          .about-cta-btns {
            width: 100%;
            flex-direction: column;
          }
          .about-cta-btns .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
