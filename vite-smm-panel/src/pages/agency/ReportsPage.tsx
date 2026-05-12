import AgencySidebar from '../../components/AgencySidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/agency-reports.css';

type Report = {
  title: string;
  sub: string;
  status: string;
  statusCls: string;
  brand: string;
  period: string;
  client: string;
  note: string;
  bars: { h: string; bg?: string }[];
  rows: { k: string; v: string }[];
  acts: { label: string; cls: string }[];
};

const reports: Report[] = [
  {
    title: 'Rahim Fashion · Weekly',
    sub: 'Apr 18 – 24, 2026 · #RP-0418-RFH',
    status: 'Sent',
    statusCls: 'chip dot',
    brand: 'ORBIT GROWTH',
    period: 'Weekly · Apr 18–24',
    client: 'Rahim Fashion House',
    note: 'First-hour velocity up 12 points',
    bars: [{ h: '35%' }, { h: '55%' }, { h: '48%' }, { h: '62%' }, { h: '71%' }, { h: '58%' }, { h: '82%' }],
    rows: [
      { k: 'Posts monitored', v: '5' },
      { k: 'Avg first-hour', v: '71%' },
      { k: 'Reach', v: '24.6K' },
      { k: 'Reply rate', v: '64%' },
    ],
    acts: [
      { label: 'Preview', cls: 'btn sm ghost' },
      { label: 'PDF ↓', cls: 'btn sm' },
      { label: 'Re-send', cls: 'btn sm primary' },
    ],
  },
  {
    title: 'Nusrat Beauty · Weekly',
    sub: 'Apr 18 – 24, 2026 · #RP-0418-NBC',
    status: 'Sent',
    statusCls: 'chip dot',
    brand: 'ORBIT GROWTH',
    period: 'Weekly · Apr 18–24',
    client: 'Nusrat Beauty Co.',
    note: 'Ultra plan · strongest week in Q2',
    bars: [{ h: '55%' }, { h: '68%' }, { h: '74%' }, { h: '71%' }, { h: '80%' }, { h: '85%' }, { h: '92%' }],
    rows: [
      { k: 'Posts monitored', v: '8' },
      { k: 'Avg first-hour', v: '78%' },
      { k: 'Reach', v: '42.8K' },
      { k: 'Reply rate', v: '71%' },
    ],
    acts: [
      { label: 'Preview', cls: 'btn sm ghost' },
      { label: 'PDF ↓', cls: 'btn sm' },
      { label: 'Re-send', cls: 'btn sm primary' },
    ],
  },
  {
    title: 'Dhaka Bites · Weekly',
    sub: 'Apr 18 – 24, 2026 · #RP-0418-DB',
    status: 'Scheduled',
    statusCls: 'chip dot warn',
    brand: 'ORBIT GROWTH',
    period: 'Weekly · Apr 18–24',
    client: 'Dhaka Bites Restaurant',
    note: 'Steady week · 3 posts reviewed',
    bars: [{ h: '28%' }, { h: '35%' }, { h: '42%' }, { h: '38%' }, { h: '48%' }, { h: '52%' }, { h: '58%' }],
    rows: [
      { k: 'Posts monitored', v: '3' },
      { k: 'Avg first-hour', v: '58%' },
      { k: 'Reach', v: '9.4K' },
      { k: 'Reply rate', v: '52%' },
    ],
    acts: [
      { label: 'Preview', cls: 'btn sm ghost' },
      { label: 'PDF ↓', cls: 'btn sm' },
      { label: 'Send now', cls: 'btn sm primary' },
    ],
  },
  {
    title: 'Monthly · April rollup',
    sub: 'All 12 clients · Apr 1 – 30, 2026',
    status: 'Draft',
    statusCls: 'chip',
    brand: 'ORBIT GROWTH',
    period: 'April 2026 rollup',
    client: 'Portfolio summary',
    note: '12 clients · 284 posts handled',
    bars: [
      { h: '42%', bg: '#1877f2' },
      { h: '55%', bg: 'linear-gradient(45deg,#f09433,#dc2743)' },
      { h: '38%', bg: '#000' },
      { h: '62%', bg: '#1877f2' },
      { h: '48%', bg: 'linear-gradient(45deg,#f09433,#dc2743)' },
      { h: '32%', bg: '#000' },
      { h: '70%', bg: '#1877f2' },
    ],
    rows: [
      { k: 'Total posts', v: '284' },
      { k: 'Avg first-hour', v: '69%' },
      { k: 'MRR', v: '৳68.4K' },
      { k: 'NPS', v: '54' },
    ],
    acts: [
      { label: 'Edit', cls: 'btn sm' },
      { label: 'Generate & send', cls: 'btn sm primary' },
    ],
  },
];

export default function ReportsPage() {
  return (
    <div className="p-reports">
      <div className="app">
        <AgencySidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Agency' }, { label: 'Reports', current: true }]}
            searchPlaceholder="Search reports…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Bulk email</button>
                <button className="btn sm primary">+ New report</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Reports</h1>
                <p>Branded PDFs generated per client · schedule, email, archive.</p>
              </div>
              <div className="page-head-actions">
                <span className="chip solid">Weekly · 12</span>
                <span className="chip">Monthly · 4</span>
                <span className="chip">Ad-hoc · 3</span>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.25rem' }}>
              <div className="card-head">
                <div>
                  <div className="card-title">Auto-schedule</div>
                  <div className="card-sub">
                    Weekly reports emailed every Monday at 9am BST · branded as "Orbit Growth"
                  </div>
                </div>
                <div className="switch on"></div>
              </div>
            </div>

            <div className="reports-grid">
              {reports.map((r) => (
                <div key={r.title} className="rep-card">
                  <div className="rep-head">
                    <div>
                      <div className="rep-title">{r.title}</div>
                      <div className="rep-sub">{r.sub}</div>
                    </div>
                    <span className={r.statusCls}>{r.status}</span>
                  </div>
                  <div className="rep-preview">
                    <div className="rp-h">
                      <span>{r.brand}</span>
                      <span>{r.period}</span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        marginBottom: '.2rem',
                      }}
                    >
                      {r.client}
                    </div>
                    <div style={{ color: 'var(--muted)', marginBottom: '.4rem' }}>{r.note}</div>
                    <div className="rp-bars">
                      {r.bars.map((b, i) => (
                        <span
                          key={i}
                          style={{ height: b.h, ...(b.bg ? { background: b.bg } : {}) }}
                        ></span>
                      ))}
                    </div>
                    {r.rows.map((row) => (
                      <div key={row.k} className="rp-row">
                        <span>{row.k}</span>
                        <b>{row.v}</b>
                      </div>
                    ))}
                  </div>
                  <div className="rep-foot">
                    {r.acts.map((a, i) => (
                      <button key={i} className={a.cls}>
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
