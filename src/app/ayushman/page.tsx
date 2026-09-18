'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  Phone,
  ArrowRight,
  Info
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function AyushmanPage() {
  const documentsRequired = [
    { name: 'आयुष्मान भारत कार्ड (Ayushman Card)', desc: 'मूल कार्ड अथवा डिजिटल ई-कार्ड (ABHA ID)' },
    { name: 'आधार कार्ड (Aadhaar Card)', desc: 'मरीज एवं परिवार के मुखिया का मूल आधार कार्ड' },
    { name: 'समग्र आईडी (Samagra ID)', desc: 'मध्य प्रदेश शासन की वैध परिवार समग्र आईडी' },
    { name: 'राशन कार्ड (Ration Card)', desc: 'पात्रता पर्ची अथवा बीपीएल/एपीएल राशन कार्ड (यदि उपलब्ध हो)' },
    { name: 'पूर्व चिकित्सा दस्तावेज (Past Medical Records)', desc: 'पुरानी जांच रिपोर्ट, प्रिस्क्रिप्शन एवं एक्स-रे/सोनोग्राफी' },
  ];

  const coveredSpecialties = [
    'जनरल एवं लेप्रोस्कोपिक सर्जरी (हर्निया, अपेंडिक्स, पित्ताशय आदि)',
    'हड्डी रोग एवं ऑर्थोपेडिक फ्रैक्चर सर्जरी',
    'स्त्री एवं प्रसूति रोग (सिजेरियन व सामान्य प्रसव एवं गर्भाशय सर्जरी)',
    'शिशु एवं बाल रोग गहन चिकित्सा (NICU & PICU)',
    'यूरोलॉजी एवं मूत्र रोग प्रक्रियाएं',
    'जनरल मेडिसिन एवं क्रिटिकल केयर भर्ती',
  ];

  const tpaPartners = [
    'Star Health & Allied Insurance',
    'HDFC ERGO General Insurance',
    'ICICI Lombard Health Care',
    'Care Health Insurance (Religare)',
    'Niva Bupa Health Insurance (Max Bupa)',
    'Bajaj Allianz General Insurance',
    'Medi Assist TPA',
    'Paramount Health TPA',
    'MD India Health Insurance TPA',
    'Vidal Health TPA',
    'Heritage Health TPA',
    'FHPL (Family Health Plan Insurance TPA)',
  ];

  return (
    <div className="ayushman-page">
      {/* 1. Header Banner */}
      <section className="ayushman-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Govt. Scheme & Cashless TPA</span>
          <h1 className="banner-title">PM Ayushman Bharat &amp; Cashless Insurance</h1>
          <p className="banner-desc">
            महाजन मल्टीस्पेशलिटी हॉस्पिटल में आयुष्मान भारत योजना के अंतर्गत पात्र लाभार्थियों को ₹5 लाख तक का निशुल्क उपचार एवं प्रमुख निजी स्वास्थ्य बीमा कंपनियों के साथ कैशलेस सुविधा उपलब्ध है।
          </p>
        </div>
      </section>

      {/* 2. Key Scheme Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card card-hover scheme-highlight-card">
              <div className="scheme-icon-box">
                <ShieldCheck size={24} className="text-teal" />
              </div>
              <h3 className="scheme-card-title">₹5 लाख तक का निशुल्क इलाज</h3>
              <p className="scheme-card-desc">
                प्रधानमंत्री आयुष्मान योजना के अंतर्गत भर्ती के दौरान दवाइयां, जांच, सर्जरी एवं बेड चार्ज पूर्णतः निशुल्क।
              </p>
            </div>

            <div className="card card-hover scheme-highlight-card">
              <div className="scheme-icon-box">
                <FileText size={24} className="text-teal" />
              </div>
              <h3 className="scheme-card-title">समर्पित आयुष्मान हेल्पडेस्क</h3>
              <p className="scheme-card-desc">
                अस्पताल परिसर में आयुष्मान मित्र एवं टीपीए डेस्क द्वारा तत्काल ई-केवाईसी, प्री-ऑथराइजेशन व क्लेम सहायता।
              </p>
            </div>

            <div className="card card-hover scheme-highlight-card">
              <div className="scheme-icon-box">
                <CreditCard size={24} className="text-teal" />
              </div>
              <h3 className="scheme-card-title">निजी बीमा कैशलेस सुविधा</h3>
              <p className="scheme-card-desc">
                स्टार हेल्थ, एचडीएफसी अर्गो, आईसीआईसीआई लोम्बार्ड एवं सभी प्रमुख टीपीए के माध्यम से बिना अग्रिम भुगतान भर्ती।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Document Checklist & Process */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="grid-2">
            {/* Documents */}
            <div className="card">
              <span className="badge badge-teal" style={{ marginBottom: '12px' }}>Required Documents</span>
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>
                आयुष्मान कार्ड पर भर्ती हेतु आवश्यक दस्तावेज
              </h3>
              <div className="doc-list">
                {documentsRequired.map((doc, idx) => (
                  <div key={idx} className="doc-item">
                    <CheckCircle2 size={18} className="text-teal" />
                    <div>
                      <h4 className="doc-name">{doc.name}</h4>
                      <p className="doc-desc">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Process */}
            <div className="card">
              <span className="badge badge-teal" style={{ marginBottom: '12px' }}>Admission Steps</span>
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>
                कैशलेस / आयुष्मान भर्ती की सरल प्रक्रिया
              </h3>
              <div className="steps-list">
                <div className="step-item">
                  <span className="step-number">1</span>
                  <div>
                    <h4 className="step-title">ओपीडी परामर्श एवं भर्ती सलाह</h4>
                    <p className="step-desc">विशेषज्ञ चिकित्सक द्वारा मरीज की जांच एवं अस्पताल में भर्ती की सिफारिश।</p>
                  </div>
                </div>

                <div className="step-item">
                  <span className="step-number">2</span>
                  <div>
                    <h4 className="step-title">आयुष्मान हेल्पडेस्क पर दस्तावेज सत्यापन</h4>
                    <p className="step-desc">आयुष्मान कार्ड, आधार व समग्र आईडी का बायोमेट्रिक/ओटीपी सत्यापन।</p>
                  </div>
                </div>

                <div className="step-item">
                  <span className="step-number">3</span>
                  <div>
                    <h4 className="step-title">कैशलेस प्री-ऑथराइजेशन एवं उपचार</h4>
                    <p className="step-desc">योजना के तहत पैकेज अप्रूवल प्राप्त होते ही निशुल्क दवा, जांच व सर्जरी आरंभ।</p>
                  </div>
                </div>

                <div className="step-item">
                  <span className="step-number">4</span>
                  <div>
                    <h4 className="step-title">डिस्चार्ज एवं दवाइयां</h4>
                    <p className="step-desc">स्वस्थ होने पर निशुल्क डिस्चार्ज समरी एवं योजना अनुसार आवश्यक दवाइयां प्रदान की जाती हैं।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Covered Treatments & TPA Partners */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Coverage</span>
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>
                योजना में शामिल प्रमुख उपचार एवं सर्जरी
              </h3>
              <div className="covered-list">
                {coveredSpecialties.map((spec, idx) => (
                  <div key={idx} className="covered-item">
                    <CheckCircle2 size={16} className="text-teal" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Insurance Network</span>
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>
                कैशलेस मेडिक्लेम एवं TPA पार्टनर्स
              </h3>
              <div className="tpa-grid">
                {tpaPartners.map((tpa, idx) => (
                  <div key={idx} className="tpa-pill">
                    <span>{tpa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Helpdesk Contact Banner */}
      <section className="section-bg-navy section-sm">
        <div className="container flex-between flex-wrap gap-4">
          <div>
            <h3 className="heading-sm" style={{ color: '#ffffff', marginBottom: '4px' }}>
              आयुष्मान या बीमा क्लेम संबंधी कोई प्रश्न है?
            </h3>
            <p style={{ color: '#94a3b8' }}>
              हॉस्पिटल के आयुष्मान समन्वयक एवं TPA हेल्पडेस्क से तुरंत परामर्श लें।
            </p>
          </div>
          <a href={`tel:${HOSPITAL_INFO.contacts.generalMobileRaw}`} className="btn btn-primary">
            <PhoneCall size={16} />
            <span>Call Helpdesk: {HOSPITAL_INFO.contacts.generalMobile}</span>
          </a>
        </div>
      </section>

      <style jsx>{`
        .ayushman-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(5, 150, 105, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 25% / cover no-repeat;
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

        .scheme-highlight-card {
          padding: 28px;
        }

        .scheme-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .scheme-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 8px;
          font-family: var(--font-hindi);
        }

        .scheme-card-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        .text-teal {
          color: #0284c7;
        }

        /* Document list */
        .doc-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .doc-item {
          display: flex;
          gap: 12px;
        }

        .doc-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #0b1e33;
          font-family: var(--font-hindi);
        }

        .doc-desc {
          font-size: 0.82rem;
          color: #64748b;
        }

        /* Steps */
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .step-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .step-number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0284c7;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0b1e33;
          font-family: var(--font-hindi);
          margin-bottom: 2px;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.45;
        }

        /* Covered */
        .covered-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .covered-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
          padding: 8px 12px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        /* TPA Grid */
        .tpa-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .tpa-pill {
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
        }

        @media (max-width: 640px) {
          .tpa-grid {
            grid-template-columns: 1fr;
          }
          .scheme-highlight-card {
            padding: 20px 16px;
          }
        }
      `}</style>
    </div>
  );
}
