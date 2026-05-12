import { useState } from 'react';
import AgencySidebar from '../../components/AgencySidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/agency-whitelabel.css';

const palette = ['#ff4d1f', '#d4ff3a', '#1a3a2a', '#2563eb', '#e11d48', '#7c3aed', '#f59e0b'];

export default function WhitelabelPage() {
  const [accent, setAccent] = useState('#ff4d1f');

  return (
    <div className="p-whitelabel">
      <div className="app">
        <AgencySidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Agency' }, { label: 'White-label', current: true }]}
            searchPlaceholder="Search settings…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Preview live</button>
                <button className="btn sm primary">Save & publish</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>White-label</h1>
                <p>Your clients will see your brand — not ours.</p>
              </div>
            </div>

            <div className="wl-grid">
              <div>
                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div className="card-title">Identity</div>
                  <div className="card-sub">
                    Brand name + logo shown in app header, emails, PDF reports.
                  </div>
                  <div className="divider"></div>
                  <div className="field">
                    <label>Brand name</label>
                    <input className="input" defaultValue="Orbit Growth" />
                  </div>
                  <div className="field">
                    <label>Tagline</label>
                    <input className="input" defaultValue="Social momentum, managed." />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
                    <div className="field">
                      <label>Logo mark (SVG)</label>
                      <button className="btn sm full">↑ Upload SVG</button>
                    </div>
                    <div className="field">
                      <label>Favicon</label>
                      <button className="btn sm full">↑ Upload 32×32</button>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div className="card-title">Colors</div>
                  <div className="card-sub">Applied across login, dashboard, emails, PDF.</div>
                  <div className="divider"></div>
                  <div className="field">
                    <label>Accent</label>
                    <div className="swatches">
                      {palette.map((c) => (
                        <span
                          key={c}
                          className={`sw${accent === c ? ' on' : ''}`}
                          style={{ background: c }}
                          onClick={() => setAccent(c)}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Theme</label>
                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      <button className="btn sm" style={{ background: 'var(--paper)', flex: 1 }}>
                        ☀ Light
                      </button>
                      <button
                        className="btn sm"
                        style={{ background: 'var(--ink)', color: 'var(--cream)', flex: 1 }}
                      >
                        ● Dark
                      </button>
                      <button className="btn sm ghost" style={{ flex: 1 }}>
                        Auto
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div className="card-title">Domain</div>
                  <div className="card-sub">Where clients log in.</div>
                  <div className="divider"></div>
                  <div className="field">
                    <label>Subdomain</label>
                    <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
                      <input className="input" defaultValue="orbit" style={{ flex: 1 }} />
                      <span className="mono" style={{ color: 'var(--muted)' }}>
                        .engageflow.app
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Custom domain (optional)</label>
                    <input className="input" placeholder="dashboard.orbitagency.bd" />
                    <div
                      style={{
                        fontSize: '.75rem',
                        color: 'var(--muted)',
                        marginTop: '.3rem',
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      CNAME → whitelabel.engageflow.app · SSL auto-provisioned
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-title">Emails & reports</div>
                  <div className="card-sub">Your from-name on every outgoing email.</div>
                  <div className="divider"></div>
                  <div className="field">
                    <label>From name</label>
                    <input className="input" defaultValue="Orbit Growth" />
                  </div>
                  <div className="field">
                    <label>From email</label>
                    <input className="input" defaultValue="hello@orbitagency.bd" />
                  </div>
                  <div className="field">
                    <label>Footer line on PDFs</label>
                    <input
                      className="input"
                      defaultValue="Prepared by Orbit Growth · orbitagency.bd"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="preview-card">
                  <div className="preview-head">
                    <div className="pw-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span>orbit.engageflow.app</span>
                  </div>
                  <div
                    className="wl-app"
                    style={
                      {
                        '--brand-bg': '#f5f1ea',
                        '--brand-ink': '#0a0a0a',
                        '--brand-accent': accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="wl-topbar">
                      <div className="wl-logo">
                        <span className="wl-mark"></span>Orbit Growth
                      </div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: '.7rem',
                          opacity: 0.6,
                        }}
                      >
                        Client portal
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        marginBottom: '.6rem',
                      }}
                    >
                      Good morning, Rahim 👋
                    </div>
                    <div
                      style={{
                        color: 'rgba(0,0,0,.55)',
                        fontSize: '.82rem',
                        marginBottom: '1rem',
                      }}
                    >
                      3 new posts detected · next scan in 04:12
                    </div>

                    {[
                      { handle: '@rahimfashionhouse', tm: '42m', stats: '184 reactions · 34 comments', w: '68%' },
                      { handle: '@rahim.store.bd', tm: '2h', stats: '312 likes · 47 comments', w: '82%' },
                    ].map((c) => (
                      <div key={c.handle} className="wl-card-mini">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '.82rem',
                            fontWeight: 600,
                          }}
                        >
                          {c.handle}
                          <span
                            style={{
                              opacity: 0.5,
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: '.7rem',
                            }}
                          >
                            {c.tm}
                          </span>
                        </div>
                        <div
                          style={{
                            marginTop: '.3rem',
                            fontSize: '.72rem',
                            opacity: 0.65,
                          }}
                        >
                          {c.stats}
                        </div>
                        <div
                          style={{
                            height: '5px',
                            background: 'rgba(0,0,0,.08)',
                            borderRadius: '3px',
                            marginTop: '.5rem',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: c.w,
                              background: 'var(--brand-accent)',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}

                    <div style={{ display: 'flex', gap: '.4rem', marginTop: '1rem' }}>
                      <button className="wl-btn">Open queue →</button>
                      <button className="wl-btn" style={{ background: 'transparent' }}>
                        View reports
                      </button>
                    </div>
                    <div
                      style={{
                        marginTop: '1.5rem',
                        paddingTop: '.8rem',
                        borderTop: '1px dashed rgba(0,0,0,.15)',
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: '.65rem',
                        opacity: 0.45,
                        textAlign: 'center',
                      }}
                    >
                      Prepared by Orbit Growth · orbitagency.bd
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
