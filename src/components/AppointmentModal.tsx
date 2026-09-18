'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Stethoscope, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { DOCTORS_DATA } from '@/data/doctors';
import { DEPARTMENTS_DATA } from '@/data/departments';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
  defaultDoctor?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultDepartment = '',
  defaultDoctor = '',
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    department: '',
    doctor: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        department: defaultDepartment || prev.department || 'General Medicine',
        doctor: defaultDoctor || prev.doctor || '',
        preferredDate: new Date().toISOString().split('T')[0],
      }));
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, defaultDepartment, defaultDoctor]);

  if (!isOpen) return null;

  const filteredDoctors = formData.department
    ? DOCTORS_DATA.filter((d) =>
      d.department.toLowerCase().includes(formData.department.toLowerCase()) ||
      formData.department.toLowerCase().includes(d.department.toLowerCase())
    )
    : DOCTORS_DATA;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.patientName.trim()) {
      setErrorMessage('कृपया मरीज का नाम दर्ज करें (Please enter patient name)');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage('कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें (Please enter valid 10-digit mobile number)');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || 'अपॉइंटमेंट दर्ज करने में समस्या आई। कृपया फोन पर संपर्क करें।');
      }
    } catch (err) {
      setErrorMessage('नेटवर्क समस्या। कृपया पुनः प्रयास करें अथवा +91 94072 99900 पर कॉल करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-icon-badge">
              <Calendar size={20} />
            </span>
            <div>
              <h3 className="modal-title">Book Doctor Appointment</h3>
              <p className="modal-subtitle">महाजन हॉस्पिटल धार — ओपीडी परामर्श बुकिंग</p>
            </div>
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSuccess ? (
            <div className="success-state">
              <CheckCircle2 size={56} className="success-icon" />
              <h4 className="success-title">Appointment Request Submitted!</h4>
              <p className="success-desc">
                धन्यवाद <strong>{formData.patientName}</strong>! आपका अपॉइंटमेंट अनुरोध सफलतापूर्वक प्राप्त हो गया है। हमारे हॉस्पिटल समन्वयक शीघ्र ही पुष्टि हेतु आपसे संपर्क करेंगे।
              </p>
              <div className="success-box">
                <p><strong>Department:</strong> {formData.department}</p>
                {formData.doctor && <p><strong>Doctor:</strong> {formData.doctor}</p>}
                <p><strong>Date:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
              </div>
              <p className="emergency-note">
                आपातकालीन स्थिति में तुरंत कॉल करें: <a href="tel:9407299900"><strong>+91 94072 99900</strong></a>
              </p>
              <button type="button" className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
                Done / बंद करें
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {errorMessage && (
                <div className="error-banner">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <User size={15} />
                    <span>Patient Name / मरीज का नाम *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राहुल वर्मा (Rahul Verma)"
                    className="form-input"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={15} />
                    <span>Mobile Number / मोबाइल नंबर *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <Stethoscope size={15} />
                    <span>Department / विभाग</span>
                  </label>
                  <select
                    className="form-select"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value, doctor: '' })}
                  >
                    <option value="General Medicine">जनरल मेडिसिन (General Medicine)</option>
                    <option value="Surgery">जनरल एवं लेप्रोस्कोपिक सर्जरी (Surgery)</option>
                    <option value="Orthopedics">हड्डी एवं जोड़ रोग (Orthopedics)</option>
                    <option value="Gynecology">स्त्री एवं प्रसूति रोग (Gynecology)</option>
                    <option value="Pediatrics">शिशु एवं बाल रोग (Pediatrics)</option>
                    <option value="Cardiology">हृदय रोग (Cardiology)</option>
                    <option value="Urology">मूत्र रोग (Urology)</option>
                    <option value="Nephrology">किडनी एवं डायलिसिस (Nephrology)</option>
                    <option value="Neurology">न्यूरोलॉजी (Neurology)</option>
                    <option value="ENT">नाक, कान व गला (ENT)</option>
                    <option value="Ophthalmology">नेत्र रोग (Eye Care)</option>
                    <option value="Dental">दंत चिकित्सा (Dental Care)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <User size={15} />
                    <span>Doctor / चिकित्सक (Optional)</span>
                  </label>
                  <select
                    className="form-select"
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  >
                    <option value="">Any Available Specialist (कोई भी उपलब्ध डॉक्टर)</option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} — {doc.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={15} />
                    <span>Preferred Date / दिनांक</span>
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Clock size={15} />
                    <span>Preferred Slot / समय</span>
                  </label>
                  <select
                    className="form-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">सुबह (10:00 AM - 01:00 PM)</option>
                    <option value="Evening (04:00 PM - 07:00 PM)">शाम (04:00 PM - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span>Symptoms / लक्षण या संदेश (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="स्वास्थ्य समस्या का संक्षिप्त विवरण..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit"
              >
                {isSubmitting ? 'Booking Appointment...' : 'Confirm Appointment Request'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 19, 33, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 16px;
        }

        .modal-container {
          background: #ffffff;
          border-radius: 16px;
          max-width: 580px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #0284c7;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0b1e33;
        }

        .modal-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          font-family: var(--font-hindi);
        }

        .close-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .appointment-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 0.9rem;
          color: #0f172a;
          background: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          font-size: 0.95rem;
          margin-top: 6px;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 8px;
          background: #fef2f2;
          color: #dc2626;
          font-size: 0.85rem;
          border: 1px solid #fecaca;
        }

        .success-state {
          text-align: center;
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 12px;
        }

        .success-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 8px;
        }

        .success-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .success-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px 16px;
          width: 100%;
          text-align: left;
          font-size: 0.85rem;
          color: #334155;
          margin-bottom: 16px;
        }

        .emergency-note {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 20px;
        }

        .emergency-note a {
          color: #dc2626;
        }

        @media (max-width: 640px) {
          .modal-backdrop {
            align-items: flex-end;
            padding: 0;
          }

          .modal-container {
            border-radius: 20px 20px 0 0;
            max-height: 92vh;
            width: 100%;
          }

          .modal-header {
            padding: 16px 20px;
          }

          .modal-body {
            padding: 20px;
            padding-bottom: 30px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 12px 14px;
            font-size: 16px; /* Prevents auto-zoom on iOS */
          }

          .btn-submit {
            padding: 14px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
