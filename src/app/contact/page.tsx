'use client';

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Ambulance,
  Utensils,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('कृपया नाम एवं मोबाइल नंबर दर्ज करें (Please enter name and phone)');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', subject: '', message: '' });
      } else {
        setErrorMessage(data.error || 'संदेश भेजने में त्रुटि आई। कृपया सीधे फोन पर संपर्क करें।');
      }
    } catch (err) {
      setErrorMessage('नेटवर्क समस्या। कृपया +91 94072 99900 पर संपर्क करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Header Banner */}
      <section className="contact-hero-banner">
        <div className="container">
          <span className="badge badge-amber">Contact & Location Directory</span>
          <h1 className="banner-title">Contact Mahajan Multispeciality Hospital</h1>
          <p className="banner-desc">
            मगजपुरा, धार (मध्य प्रदेश) स्थित अस्पताल के इमरजेंसी, ओपीडी, एम्बुलेंस एवं पूछताछ संपर्क नंबर।
          </p>
        </div>
      </section>

      {/* 2. Contact Grid & Inquiry Form */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Complete Contact Directory */}
            <div className="contact-dir-col">
              <h2 className="heading-md" style={{ marginBottom: '20px' }}>
                Department Phone Directory
              </h2>

              <div className="dir-cards-list">
                {/* Emergency Card */}
                <div className="dir-card dir-card-emergency">
                  <div className="dir-icon-box bg-red">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="badge badge-red" style={{ marginBottom: '4px' }}>24×7 Active</span>
                    <h3 className="dir-title">आपातकालीन एवं ट्रॉमा केयर (Emergency)</h3>
                    <p className="dir-desc">गंभीर चिकित्सा स्थिति, दुर्घटना एवं आईसीयू भर्ती</p>
                    <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="dir-phone-link text-red">
                      {HOSPITAL_INFO.contacts.emergencyMobile}
                    </a>
                  </div>
                </div>

                {/* Ambulance */}
                <div className="dir-card">
                  <div className="dir-icon-box bg-teal">
                    <Ambulance size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="dir-title">एम्बुलेंस एवं रोगी वाहन सेवा (Ambulance)</h3>
                    <p className="dir-desc">24 घंटे धार एवं आसपास के क्षेत्रों में रोगी परिवहन</p>
                    <a href={`tel:${HOSPITAL_INFO.contacts.ambulanceRaw}`} className="dir-phone-link">
                      {HOSPITAL_INFO.contacts.ambulance}
                    </a>
                  </div>
                </div>

                {/* OPD & Appointments */}
                <div className="dir-card">
                  <div className="dir-icon-box bg-teal">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="dir-title">ओपीडी एवं सामान्य पूछताछ (OPD & Enquiry)</h3>
                    <p className="dir-desc">डॉक्टर समय, जांच दरें एवं रिपोर्ट जानकारी</p>
                    <div className="multi-phone">
                      <a href={`tel:${HOSPITAL_INFO.contacts.generalMobileRaw}`} className="dir-phone-link">
                        {HOSPITAL_INFO.contacts.generalMobile}
                      </a>
                      <span className="dot">•</span>
                      <a href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`} className="dir-phone-link">
                        {HOSPITAL_INFO.contacts.landline1}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Canteen */}
                <div className="dir-card">
                  <div className="dir-icon-box bg-slate">
                    <Utensils size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="dir-title">हॉस्पिटल इन-हाउस कैंटीन (Canteen)</h3>
                    <p className="dir-desc">मरीजों एवं परिजनों हेतु शुद्ध व पौष्टिक आहार</p>
                    <a href={`tel:${HOSPITAL_INFO.contacts.canteenRaw}`} className="dir-phone-link">
                      {HOSPITAL_INFO.contacts.canteen}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message / Inquiry Form */}
            <div className="contact-form-col">
              <div className="card inquiry-card">
                <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Online Inquiry</span>
                <h3 className="heading-sm">Send us a Message / संदेश भेजें</h3>
                <p className="subheading" style={{ fontSize: '0.88rem', margin: '4px 0 20px' }}>
                  किसी भी प्रश्न अथवा फीडबैक के लिए नीचे दिया गया फॉर्म भरें।
                </p>

                {isSuccess ? (
                  <div className="success-banner">
                    <CheckCircle2 size={32} className="text-emerald" />
                    <div>
                      <h4 className="success-title">संदेश सफलतापूर्वक प्राप्त हुआ!</h4>
                      <p className="success-desc">हमारी टीम शीघ्र ही आपसे संपर्क करेगी। धन्यवाद।</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form">
                    {errorMessage && (
                      <div className="error-banner">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label">Full Name / आपका नाम *</label>
                      <input
                        type="text"
                        required
                        placeholder="उदा. राहुल शर्मा"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Mobile Number / मोबाइल नंबर *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject / विषय</label>
                      <input
                        type="text"
                        placeholder="उदा. ओपीडी समय, जांच शुल्क, आयुष्मान पूछताछ"
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message / संदेश</label>
                      <textarea
                        rows={3}
                        placeholder="अपना संदेश यहाँ लिखें..."
                        className="form-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '6px' }}
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPD Timetable & Exact Location Map */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="grid-2">
            {/* OPD Timetable & Address */}
            <div className="card">
              <span className="badge badge-teal" style={{ marginBottom: '12px' }}>Timetable & Location</span>
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>
                ओपीडी समय एवं अस्पताल का सटीक पता
              </h3>
              <div className="timetable-list">
                {HOSPITAL_INFO.opdTimings.map((item, idx) => (
                  <div key={idx} className="timing-row-item">
                    <div className="timing-day">
                      <Clock size={16} className="text-teal" />
                      <span>{item.day}</span>
                    </div>
                    <div className="timing-hours">{item.time}</div>
                  </div>
                ))}
              </div>

              <div className="address-box">
                <MapPin size={22} className="text-teal flex-shrink-0" />
                <div>
                  <strong className="address-heading">महाजन मल्टीस्पेशलिटी हॉस्पिटल</strong>
                  <p className="address-text">{HOSPITAL_INFO.address.fullHindi}</p>
                  <p className="address-sub">{HOSPITAL_INFO.address.fullEnglish}</p>
                  <p className="landmark-text">
                    <strong>Landmark:</strong> {HOSPITAL_INFO.address.landmark}
                  </p>
                </div>
              </div>

              <div className="address-actions-row">
                <a
                  href={HOSPITAL_INFO.address.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>🧭 Get Live Directions</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={HOSPITAL_INFO.address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>📍 Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Google Map Embed with Exact Location */}
            <div className="map-card card">
              <div className="map-header-bar">
                <div className="map-pin-label">
                  <span className="live-dot"></span>
                  <strong>Exact Location: Mahajan Hospital, Magajpura, Dhar</strong>
                </div>
                <a
                  href={HOSPITAL_INFO.address.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-dir-link"
                >
                  <span>Directions</span>
                  <ExternalLink size={13} />
                </a>
              </div>
              <div className="map-iframe-container">
                <iframe
                  src={HOSPITAL_INFO.address.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Exact Location of Mahajan Multispeciality Hospital Dhar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(15, 23, 42, 0.84) 50%, rgba(2, 132, 199, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 30% / cover no-repeat;
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
        .contact-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: start;
        }

        .dir-cards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dir-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .dir-card-emergency {
          border-left: 4px solid #dc2626;
          background: #fffafa;
        }

        .dir-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bg-red { background: #dc2626; }
        .bg-teal { background: #0284c7; }
        .bg-slate { background: #475569; }
        .text-white { color: #ffffff; }

        .dir-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 2px;
          font-family: var(--font-hindi);
        }

        .dir-desc {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 6px;
        }

        .dir-phone-link {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0284c7;
        }

        .text-red {
          color: #dc2626;
        }

        .multi-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .dot {
          color: #cbd5e1;
        }

        /* Inquiry Card */
        .inquiry-card {
          padding: 28px;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          background: #ffffff;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 6px;
          font-size: 0.82rem;
        }

        .success-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 8px;
        }

        .text-emerald { color: #059669; }

        .success-title {
          font-size: 1rem;
          font-weight: 700;
          color: #065f46;
          font-family: var(--font-hindi);
        }

        .success-desc {
          font-size: 0.85rem;
          color: #047857;
        }

        /* Timetable */
        .timetable-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .timing-row-item {
          padding: 12px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .timing-day {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: #0b1e33;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }

        .timing-hours {
          font-size: 0.85rem;
          color: #475569;
          padding-left: 24px;
        }

        .address-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: #f0f9ff;
          border-radius: 10px;
          border: 1px solid #bae6fd;
          font-size: 0.9rem;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .address-heading {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          color: #0369a1;
          font-family: var(--font-hindi);
          margin-bottom: 2px;
        }

        .address-text {
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .address-sub {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 6px;
        }

        .landmark-text {
          font-size: 0.82rem;
          color: #0369a1;
          background: #e0f2fe;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        .address-actions-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .map-card {
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          height: 100%;
          min-height: 520px;
          border-radius: 16px;
        }

        .map-header-bar {
          background: #0b1e33;
          color: #ffffff;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.86rem;
          flex-shrink: 0;
        }

        .map-pin-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .map-dir-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #38bdf8;
          font-weight: 600;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 5px 10px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .map-dir-link:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .map-iframe-container {
          flex: 1 1 0;
          width: 100%;
          height: 100%;
          min-height: 440px;
          position: relative;
        }

        .map-iframe-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .address-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .address-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .inquiry-card {
            padding: 20px 16px;
          }
          .map-iframe-container {
            min-height: 300px;
          }
        }

        @media (max-width: 480px) {
          .dir-card {
            flex-direction: column;
            gap: 10px;
            padding: 16px;
          }
          .map-header-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .map-dir-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
