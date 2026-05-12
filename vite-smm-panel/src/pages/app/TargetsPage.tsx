import { Link } from 'react-router-dom';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-targets.css';

type Target = {
  plat: 'fb' | 'ig' | 'x';
  icon: string;
  handle: string;
  meta: string;
  chip: string;
  chipCls: string;
  rows: { k: string; v: React.ReactNode }[];
  foot: string;
  acts: { label: string; cls: string }[];
};

const targets: Target[] = [
  {
    plat: 'fb',
    icon: 'f',
    handle: '@rahimfashionhouse',
    meta: 'Facebook page · 24.6K followers',
    chip: 'Active',
    chipCls: 'chip dot',
    rows: [
      { k: 'Last post', v: '42 min ago' },
      { k: 'Posts this month', v: '5 / 20' },
      { k: 'Avg first-hour', v: '68% velocity' },
      { k: 'Priority tag', v: <span className="chip accent" style={{ fontSize: '.7rem' }}>Primary</span> },
    ],
    foot: 'Connected Apr 1 · OAuth',
    acts: [
      { label: 'Pause', cls: 'btn sm ghost' },
      { label: 'Manage', cls: 'btn sm' },
    ],
  },
  {
    plat: 'ig',
    icon: '◉',
    handle: '@rahim.store.bd',
    meta: 'Instagram business · 18.2K followers',
    chip: 'Active',
    chipCls: 'chip dot',
    rows: [
      { k: 'Last post', v: '2 hr ago' },
      { k: 'Posts this month', v: '4 / 20' },
      { k: 'Avg first-hour', v: '82% velocity' },
      { k: 'Priority tag', v: <span className="chip" style={{ fontSize: '.7rem' }}>Standard</span> },
    ],
    foot: 'Connected Apr 1 · OAuth',
    acts: [
      { label: 'Pause', cls: 'btn sm ghost' },
      { label: 'Manage', cls: 'btn sm' },
    ],
  },
  {
    plat: 'x',
    icon: '𝕏',
    handle: '@rahim_live',
    meta: 'X handle · 8.1K followers',
    chip: 'Needs attention',
    chipCls: 'chip dot warn',
    rows: [
      { k: 'Last post', v: '1 hr ago' },
      { k: 'Posts this month', v: '3 / 20' },
      { k: 'Avg first-hour', v: '55% velocity' },
      { k: 'Priority tag', v: <span className="chip" style={{ fontSize: '.7rem' }}>Secondary</span> },
    ],
    foot: 'Connected Apr 12 · OAuth',
    acts: [
      { label: 'Pause', cls: 'btn sm ghost' },
      { label: 'Manage', cls: 'btn sm' },
    ],
  },
  {
    plat: 'ig',
    icon: '◉',
    handle: '@rahim.chittagong',
    meta: 'Instagram business · 4.4K followers',
    chip: 'Paused',
    chipCls: 'chip dot idle',
    rows: [
      { k: 'Last post', v: '3 days ago' },
      { k: 'Posts this month', v: '0 / 20' },
      { k: 'Avg first-hour', v: '—' },
      { k: 'Priority tag', v: <span className="chip" style={{ fontSize: '.7rem' }}>Low</span> },
    ],
    foot: 'Paused Apr 18',
    acts: [
      { label: 'Resume', cls: 'btn sm' },
      { label: 'Archive', cls: 'btn sm ghost' },
    ],
  },
];

export default function TargetsPage() {
  return (
    <div className="p-targets">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Workspace' }, { label: 'Targets', current: true }]}
            searchPlaceholder="Search accounts…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <a className="btn sm primary">+ Connect account</a>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Target profiles</h1>
                <p>Connected social accounts we're monitoring for first-hour engagement.</p>
              </div>
              <div className="page-head-actions">
                <button className="btn ghost sm">Import CSV</button>
                <a className="btn primary sm">+ Add target</a>
              </div>
            </div>

            <div className="toolbar">
              <span className="chip solid">All · 4</span>
              <span className="chip">Facebook · 1</span>
              <span className="chip">Instagram · 2</span>
              <span className="chip">X/Twitter · 1</span>
              <div className="sp"></div>
              <span className="chip dot">Active · 3</span>
              <span className="chip dot idle">Paused · 1</span>
            </div>

            <div className="grid-targets">
              {targets.map((t, i) => (
                <div key={i} className="t-card">
                  <div className="t-head">
                    <div className={`plat ${t.plat}`}>{t.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{t.handle}</div>
                      <div
                        style={{
                          fontSize: '.78rem',
                          color: 'var(--muted)',
                          fontFamily: "'JetBrains Mono',monospace",
                        }}
                      >
                        {t.meta}
                      </div>
                    </div>
                    <span className={t.chipCls}>{t.chip}</span>
                  </div>
                  <div className="t-body">
                    {t.rows.map((r, j) => (
                      <div key={j} className="row">
                        <span className="k">{r.k}</span>
                        <span className="v">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="t-foot">
                    <span
                      className="mono"
                      style={{ fontSize: '.72rem', color: 'var(--muted)' }}
                    >
                      {t.foot}
                    </span>
                    <div style={{ display: 'flex', gap: '.4rem' }}>
                      {t.acts.map((a, j) => (
                        <button key={j} className={a.cls}>
                          {a.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="add-card">+ Connect new account</div>
            </div>

            <div className="note info" style={{ marginTop: '1.5rem' }}>
              <div className="ico">i</div>
              Your Standard plan covers up to 3 active targets. Ultra raises this to 5, Agency
              unlimited.{' '}
              <Link to="/app-billing" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Upgrade →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
