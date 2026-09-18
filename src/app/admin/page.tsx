'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  MessageSquare, 
  Stethoscope, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Search, 
  ShieldCheck, 
  Award,
  RefreshCw,
  Home
} from 'lucide-react';
import { DOCTORS_DATA } from '@/data/doctors';
import { HOSPITAL_INFO } from '@/data/hospital-info';

interface AppointmentItem {
  id: string;
  patientName: string;
  phone: string;
  department: string;
  doctor?: string;
  preferredDate?: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

interface InquiryItem {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message?: string;
  createdAt: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'appointments' | 'inquiries' | 'doctors'>('appointments');
  const [appointments, setAppointments] = useState<AppointmentItem[]>([]);
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [doctorFilter, setDoctorFilter] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [aptRes, inqRes] = await Promise.all([
        fetch('/api/appointments'),
        fetch('/api/inquiries'),
      ]);

      if (aptRes.ok) {
        const aptData = await aptRes.json();
        setAppointments(aptData.data || []);
      }

      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData.data || []);
      }
    } catch {
      // Keep existing data on fetch error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = (id: string, newStatus: 'pending' | 'confirmed' | 'completed') => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  const filteredDoctors = DOCTORS_DATA.filter(
    (d) =>
      !doctorFilter ||
      d.name.toLowerCase().includes(doctorFilter.toLowerCase()) ||
      d.department.toLowerCase().includes(doctorFilter.toLowerCase())
  );

  return (
    <div className="admin-page-container">
      {/* Top Admin Header */}
      <header className="admin-header">
        <div className="container admin-header-inner">
          <div className="admin-brand">
            <Link href="/" className="back-link" title="वेबसाइट पर वापस जाएं">
              <Home size={18} />
            </Link>
            <div className="admin-logo-wrap">
              <img src="/images/logo.png" alt="Mahajan Logo" className="admin-logo" />
            </div>
            <div>
              <h2>महाजन हॉस्पिटल — प्रबंधन पोर्टल (Hospital Management)</h2>
              <small>Mahajan Multispeciality Hospital, Dhar · 100-Bedded Certified Portal</small>
            </div>
          </div>

          <div className="admin-actions">
            <button onClick={fetchData} className="btn btn-outline btn-sm refresh-btn">
              <RefreshCw size={14} className={loading ? 'spinning' : ''} />
              <span>रिफ्रेश (Refresh Data)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="admin-stats-strip">
        <div className="container">
          <div className="stats-cards-grid">
            <div className="stat-card card">
              <div className="stat-icon-wrap icon-gold">
                <Calendar size={22} />
              </div>
              <div>
                <small>कुल अपॉइंटमेंट</small>
                <strong>{appointments.length}</strong>
              </div>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrap icon-blue">
                <MessageSquare size={22} />
              </div>
              <div>
                <small>कुल पूछताछ (Inquiries)</small>
                <strong>{inquiries.length}</strong>
              </div>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrap icon-green">
                <Stethoscope size={22} />
              </div>
              <div>
                <small>सक्रिय डॉक्टर</small>
                <strong>{DOCTORS_DATA.length}</strong>
              </div>
            </div>

            <div className="stat-card card">
              <div className="stat-icon-wrap icon-red">
                <ShieldCheck size={22} />
              </div>
              <div>
                <small>इमरजेंसी हेल्पलाइन</small>
                <strong>{HOSPITAL_INFO.contacts.emergencyMobile}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Content Area */}
      <section className="admin-main-section">
        <div className="container">
          {/* Tabs Navigation */}
          <div className="admin-tabs" role="tablist">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`admin-tab ${activeTab === 'appointments' ? 'is-active' : ''}`}
            >
              <Calendar size={16} />
              <span>अपॉइंटमेंट अनुरोध ({appointments.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`admin-tab ${activeTab === 'inquiries' ? 'is-active' : ''}`}
            >
              <MessageSquare size={16} />
              <span>पूछताछ व संदेश ({inquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('doctors')}
              className={`admin-tab ${activeTab === 'doctors' ? 'is-active' : ''}`}
            >
              <Stethoscope size={16} />
              <span>डॉक्टर डायरेक्टरी ({DOCTORS_DATA.length})</span>
            </button>
          </div>

          {/* Tab 1: Appointments List */}
          {activeTab === 'appointments' && (
            <div className="admin-tab-content card">
              <div className="table-header">
                <h3>प्राप्त मरीज अपॉइंटमेंट अनुरोध</h3>
                <small>मरीज को कॉल कर समय की पुष्टि करें और स्टेटस अपडेट करें।</small>
              </div>

              {appointments.length > 0 ? (
                <div className="table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>मरीज का नाम</th>
                        <th>मोबाइल नंबर</th>
                        <th>विभाग / डॉक्टर</th>
                        <th>पसंदीदा तारीख</th>
                        <th>संदेश</th>
                        <th>स्टेटस (Status)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((apt) => (
                        <tr key={apt.id}>
                          <td><code>{apt.id}</code></td>
                          <td><strong>{apt.patientName}</strong></td>
                          <td>
                            <a href={`tel:${apt.phone}`} className="phone-table-link">
                              <Phone size={12} /> {apt.phone}
                            </a>
                          </td>
                          <td>
                            <span>{apt.department}</span>
                            {apt.doctor && <small className="doc-sub">{apt.doctor}</small>}
                          </td>
                          <td>{apt.preferredDate || 'तुरंत'}</td>
                          <td><span className="msg-preview">{apt.message || '-'}</span></td>
                          <td>
                            <select
                              value={apt.status}
                              onChange={(e) =>
                                handleStatusChange(
                                  apt.id,
                                  e.target.value as 'pending' | 'confirmed' | 'completed'
                                )
                              }
                              className={`status-select ${apt.status}`}
                            >
                              <option value="pending">प्रतीक्षारत (Pending)</option>
                              <option value="confirmed">पुष्ट (Confirmed)</option>
                              <option value="completed">संपन्न (Completed)</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-admin">
                  <p>कोई नया अपॉइंटमेंट अनुरोध उपलब्ध नहीं है।</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Inquiries List */}
          {activeTab === 'inquiries' && (
            <div className="admin-tab-content card">
              <div className="table-header">
                <h3>प्राप्त ऑनलाइन संदेश एवं पूछताछ</h3>
                <small>वेबसाइट संपर्क फॉर्म से आए सवाल।</small>
              </div>

              {inquiries.length > 0 ? (
                <div className="table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>नाम</th>
                        <th>मोबाइल नंबर</th>
                        <th>विषय</th>
                        <th>संदेश</th>
                        <th>प्राप्त समय</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map((inq) => (
                        <tr key={inq.id}>
                          <td><code>{inq.id}</code></td>
                          <td><strong>{inq.name}</strong></td>
                          <td>
                            <a href={`tel:${inq.phone}`} className="phone-table-link">
                              <Phone size={12} /> {inq.phone}
                            </a>
                          </td>
                          <td><span className="badge badge-blue">{inq.subject}</span></td>
                          <td>{inq.message || '-'}</td>
                          <td><small>{new Date(inq.createdAt).toLocaleString('hi-IN')}</small></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-admin">
                  <p>कोई नया संदेश उपलब्ध नहीं है।</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Doctors Management */}
          {activeTab === 'doctors' && (
            <div className="admin-tab-content card">
              <div className="table-header flex-between">
                <div>
                  <h3>सक्रिय डॉक्टर एवं विशेषज्ञ रोस्टर</h3>
                  <small>महाजन हॉस्पिटल के सभी 39 डॉक्टर।</small>
                </div>
                <div className="table-search">
                  <Search size={16} />
                  <input
                    type="text"
                    placeholder="डॉक्टर या विभाग खोजें..."
                    value={doctorFilter}
                    onChange={(e) => setDoctorFilter(e.target.value)}
                  />
                </div>
              </div>

              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>डॉक्टर का नाम</th>
                      <th>विभाग</th>
                      <th>पद एवं विशेषता</th>
                      <th>OPD समय</th>
                      <th>स्रोत (Type)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDoctors.map((doc, idx) => (
                      <tr key={doc.id}>
                        <td>{idx + 1}</td>
                        <td>
                          <strong>{doc.name}</strong>
                          {doc.director && <span className="director-tag">MD</span>}
                        </td>
                        <td><span className="badge badge-gold">{doc.department}</span></td>
                        <td>{doc.role}</td>
                        <td><small>{doc.timing || 'नियमित OPD'}</small></td>
                        <td>
                          <span className={`type-tag ${doc.source}`}>
                            {doc.source === 'hospital' ? 'हॉस्पिटल' : doc.source === 'indore' ? 'इंदौर विज़िटिंग' : 'विज़िटिंग'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .admin-page-container {
          min-height: 100vh;
          background: #f1f5f9;
          padding-bottom: 64px;
        }

        .admin-header {
          background: #071b2f;
          color: #ffffff;
          padding-block: 16px;
          border-bottom: 1px solid rgba(242, 183, 5, 0.3);
        }

        .admin-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .admin-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .back-link {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.1);
          color: var(--gold-light);
          display: grid;
          place-items: center;
        }

        .back-link:hover {
          background: var(--gold-primary);
          color: var(--navy-dark);
        }

        .admin-logo-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          display: grid;
          place-items: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .admin-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .admin-brand h2 {
          font-family: var(--font-hindi);
          font-size: 1.18rem;
          font-weight: 800;
        }

        .admin-brand small {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.75rem;
        }

        .spinning {
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Stats */
        .admin-stats-strip {
          padding-block: 24px;
        }

        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          padding: 18px 20px;
          background: #ffffff;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .stat-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .icon-gold { background: rgba(242, 183, 5, 0.15); color: var(--gold-dark); }
        .icon-blue { background: rgba(8, 116, 201, 0.12); color: var(--medical-blue); }
        .icon-green { background: rgba(16, 185, 129, 0.12); color: #059669; }
        .icon-red { background: rgba(239, 68, 68, 0.12); color: #dc2626; }

        .stat-card small {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .stat-card strong {
          display: block;
          font-size: 1.25rem;
          color: var(--navy-primary);
        }

        /* Tabs */
        .admin-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .admin-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
        }

        .admin-tab.is-active {
          background: var(--navy-primary);
          color: #ffffff;
          border-color: var(--navy-primary);
        }

        /* Tables */
        .admin-tab-content {
          padding: 28px;
          background: #ffffff;
        }

        .table-header {
          margin-bottom: 20px;
        }

        .table-header h3 {
          font-family: var(--font-hindi);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-primary);
        }

        .table-header small {
          color: var(--text-muted);
        }

        .flex-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .table-search {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          background: var(--bg-soft);
        }

        .table-search input {
          border: none;
          background: none;
          outline: none;
          font-size: 0.88rem;
          width: 220px;
        }

        .table-wrap {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }

        .admin-table th {
          text-align: left;
          padding: 12px 14px;
          background: var(--bg-soft);
          color: var(--navy-primary);
          font-weight: 700;
          border-bottom: 1px solid var(--border-light);
        }

        .admin-table td {
          padding: 14px;
          border-bottom: 1px solid var(--border-light);
          color: var(--text-main);
          vertical-align: middle;
        }

        .phone-table-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--medical-blue);
          font-weight: 600;
        }

        .doc-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .msg-preview {
          display: block;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .status-select {
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 700;
          outline: none;
          cursor: pointer;
        }

        .status-select.pending {
          background: #fef3c7;
          border: 1px solid #fde68a;
          color: #92400e;
        }

        .status-select.confirmed {
          background: #dcfce7;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        .status-select.completed {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
        }

        .director-tag {
          margin-left: 6px;
          padding: 2px 6px;
          border-radius: 4px;
          background: var(--gold-primary);
          color: var(--navy-dark);
          font-size: 0.65rem;
          font-weight: 800;
        }

        .type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .type-tag.hospital { background: rgba(16, 185, 129, 0.12); color: #059669; }
        .type-tag.visiting { background: rgba(8, 116, 201, 0.12); color: var(--medical-blue); }
        .type-tag.indore { background: rgba(242, 183, 5, 0.15); color: var(--gold-dark); }

        .empty-admin {
          text-align: center;
          padding: 48px;
          color: var(--text-muted);
        }

        /* Responsive */
        @media (max-width: 1080px) {
          .stats-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-cards-grid {
            grid-template-columns: 1fr;
          }
          .admin-tab-content {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
