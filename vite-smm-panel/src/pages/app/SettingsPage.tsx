import { useState } from 'react';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-settings.css';

const navItems = [
  'Profile',
  'Workspace',
  'Team & roles',
  'Notifications',
  'Connections',
  'API & webhooks',
  'Language · বাংলা/EN',
  'Security · 2FA',
];

const team = [
  { initial: 'N', bg: 'var(--accent)', name: 'Nusrat Jahan', email: 'nusrat@fashionhouse.bd', role: 'Owner', roles: ['Owner'], chip: 'chip dot', chipText: 'Active' },
  { initial: 'A', bg: 'var(--lime)', name: 'Ayesha Rahman', email: 'ayesha@fashionhouse.bd', role: 'Editor', roles: ['Editor', 'Reviewer', 'Read-only'], chip: 'chip dot', chipText: 'Active' },
  { initial: 'K', bg: 'var(--forest)', name: 'Karim Ali', email: 'karim@fashionhouse.bd', role: 'Reviewer', roles: ['Editor', 'Reviewer'], chip: 'chip dot idle', chipText: 'Invited', dark: true },
];

const toggles = [
  { tl: 'New post detected', sub: 'Email · within 5 minutes of detection', on: true },
  { tl: 'Reply needs approval', sub: 'Email + in-app · sent to reviewers', on: true },
  { tl: 'Daily digest', sub: 'One email at 8am BST with yesterday\'s numbers', on: true },
  { tl: 'Weekly PDF report', sub: 'Monday 9am BST · to all team members', on: true },
  { tl: 'Quota warning', sub: 'Ping when 80% of monthly posts used', on: false },
  { tl: 'Product announcements', sub: 'One email per month about new features', on: true },
];

export default function SettingsPage() {
  const [active, setActive] = useState('Profile');
  const [switches, setSwitches] = useState(toggles.map((t) => t.on));

  return (
    <div className="p-settings">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Account' }, { label: 'Settings', current: true }]}
            searchPlaceholder="Search settings…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm primary">Save changes</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Settings</h1>
                <p>Profile, team, notifications, and API access.</p>
              </div>
            </div>

            <div className="set-grid">
              <div className="set-nav">
                {navItems.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className={active === label ? 'on' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(label);
                    }}
                  >
                    {label}
                  </a>
                ))}
                <a href="#" style={{ color: 'var(--bad)' }} onClick={(e) => e.preventDefault()}>
                  Delete workspace
                </a>
              </div>

              <div>
                <div className="sect">
                  <h3>Profile</h3>
                  <p className="s">This is how teammates and exported reports see you.</p>
                  <div className="row">
                    <div className="field">
                      <label>Full name</label>
                      <input className="input" defaultValue="Nusrat Jahan" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input className="input" defaultValue="nusrat@fashionhouse.bd" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input className="input" defaultValue="+880 1700 000 000" />
                    </div>
                    <div className="field">
                      <label>Timezone</label>
                      <select className="input" defaultValue="Asia/Dhaka (BST)">
                        <option>Asia/Dhaka (BST)</option>
                        <option>Asia/Kolkata (IST)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="sect">
                  <h3>Team members</h3>
                  <p className="s">Standard plan includes 3 seats · 2 remaining.</p>
                  {team.map((m) => (
                    <div key={m.email} className="team-row">
                      <div
                        className="avatar-sm"
                        style={{ background: m.bg, ...(m.dark ? { color: 'var(--cream)' } : {}) }}
                      >
                        {m.initial}
                      </div>
                      <div>
                        <b>{m.name}</b>
                        <div
                          style={{
                            fontSize: '.78rem',
                            color: 'var(--muted)',
                            fontFamily: "'JetBrains Mono',monospace",
                          }}
                        >
                          {m.email}
                        </div>
                      </div>
                      <select
                        className="input"
                        style={{ padding: '.35rem .5rem', fontSize: '.8rem' }}
                        defaultValue={m.role}
                      >
                        {m.roles.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                      <span className={m.chip}>{m.chipText}</span>
                      <button className="iconbtn" style={{ fontSize: '.9rem' }}>
                        ⋯
                      </button>
                    </div>
                  ))}
                  <button className="btn sm" style={{ marginTop: '.8rem' }}>
                    + Invite teammate
                  </button>
                </div>

                <div className="sect">
                  <h3>Notifications</h3>
                  <p className="s">Choose when we ping you.</p>
                  {toggles.map((t, i) => (
                    <div key={i} className="toggle-row">
                      <div>
                        <div className="tl">{t.tl}</div>
                        <div className="sub">{t.sub}</div>
                      </div>
                      <div
                        className={`switch${switches[i] ? ' on' : ''}`}
                        onClick={() =>
                          setSwitches((s) => s.map((v, j) => (j === i ? !v : v)))
                        }
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="sect">
                  <h3>
                    API & webhooks{' '}
                    <span className="badge" style={{ background: 'var(--accent)', marginLeft: '.4rem' }}>
                      Ultra
                    </span>
                  </h3>
                  <p className="s">Integrate EngageFlow with Zapier, Pabbly, or your own stack.</p>
                  <div className="field">
                    <label>API key</label>
                    <input
                      className="input mono"
                      defaultValue="sk_live_7f2c8••••••••••••••••••"
                      readOnly
                    />
                  </div>
                  <div className="field">
                    <label>Webhook URL</label>
                    <input
                      className="input"
                      placeholder="https://your-domain.app/engageflow/webhook"
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <button className="btn sm ghost">Regenerate key</button>
                    <button className="btn sm">Test webhook</button>
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
