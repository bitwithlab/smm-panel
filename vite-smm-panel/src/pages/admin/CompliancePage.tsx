import AdminSidebar from '../../components/AdminSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/admin-compliance.css';

type Incident = {
  high?: boolean;
  title: string;
  sub: string;
  sev: 'HIGH' | 'MEDIUM';
  status: string;
  statusCls: string;
  body: string;
  acts: { label: string; cls: string }[];
};

const incidents: Incident[] = [
  {
    high: true,
    title: 'Facebook · comment-endpoint 429 spike',
    sub: 'Incident #INC-2026-0424-01 · started 42 min ago · owner: @rafi',
    sev: 'HIGH',
    status: 'Investigating',
    statusCls: 'chip dot warn',
    body:
      '14 workspaces hitting 429s on Graph API comment posts between 13:15–13:57 BST. Rate-limiter auto-throttled all affected accounts; no bans yet. Root cause under review — suspected Meta-side soft limit change.',
    acts: [
      { label: 'Open runbook', cls: 'btn sm' },
      { label: 'Affected accounts · 14', cls: 'btn sm ghost' },
      { label: 'Post advisory', cls: 'btn sm' },
      { label: 'Mark resolved', cls: 'btn sm primary' },
    ],
  },
  {
    high: true,
    title: 'Instagram · 3 accounts flagged for repetitive replies',
    sub: 'Incident #INC-2026-0424-02 · started 1h 12m ago · owner: @sabbir',
    sev: 'HIGH',
    status: 'Mitigating',
    statusCls: 'chip dot',
    body:
      'Sentiment filter detected ≥70% reply-template overlap for @karim.boutique, @luxedhaka, @alamshop. Auto-suspended posting; pushed advisory email with diversification prompts. Awaiting owner confirmation.',
    acts: [
      { label: 'View audit trail', cls: 'btn sm' },
      { label: 'Users (3)', cls: 'btn sm ghost' },
      { label: 'Force reply-pool rotation', cls: 'btn sm primary' },
    ],
  },
  {
    title: 'X/Twitter API · elevated latency',
    sub: 'Incident #INC-2026-0424-03 · started 2h 30m ago · owner: @infra',
    sev: 'MEDIUM',
    status: 'Monitoring',
    statusCls: 'chip dot idle',
    body:
      'Median scan latency 4.8s (baseline 2.1s). No error spike yet — watching closely. Switched 20% of traffic to secondary pool.',
    acts: [
      { label: 'Metrics', cls: 'btn sm' },
      { label: 'View log', cls: 'btn sm ghost' },
    ],
  },
  {
    title: 'Proxy pool · 4 IPs flagged this morning',
    sub: 'Incident #INC-2026-0424-04 · started 5h 12m ago · owner: @infra',
    sev: 'MEDIUM',
    status: 'Resolved',
    statusCls: 'chip dot',
    body:
      'Residential provider rotated 4 IPs after captcha challenges. Pool refilled automatically; no customer impact. Post-mortem scheduled for Friday.',
    acts: [
      { label: 'Post-mortem doc', cls: 'btn sm' },
      { label: 'Archive', cls: 'btn sm' },
    ],
  },
];

const tosWatch = [
  { name: 'Facebook Graph API', sub: '1.8K calls · 2.4% 429 · 0 bans', cls: 'chip dot warn', label: 'Watch' },
  { name: 'Instagram Graph API', sub: '2.1K calls · 0.6% 429 · 1 shadow-flag', cls: 'chip dot', label: 'Healthy' },
  { name: 'X/Twitter v2 API', sub: '1.1K calls · 4.8s latency · 0 429s', cls: 'chip dot warn', label: 'Latency' },
  { name: 'Residential proxy pool', sub: '12,400 IPs · 4 rotated · 96% clean', cls: 'chip dot', label: 'Healthy' },
];

export default function CompliancePage() {
  return (
    <div className="p-compliance">
      <div className="app">
        <AdminSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Platform' }, { label: 'Compliance', current: true }]}
            searchPlaceholder="Search incidents, users…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Runbook</button>
                <button className="btn sm primary">New advisory</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Compliance</h1>
                <p>
                  Platform ToS surveillance · rate-limit health · user advisories. Keep the
                  ban-rate low.
                </p>
              </div>
            </div>

            <div className="kpi-row">
              <div className="stat dark">
                <div className="stat-lbl">Open incidents</div>
                <div className="stat-num">4</div>
                <div className="stat-delta">2 high · 2 medium</div>
              </div>
              <div className="stat accent">
                <div className="stat-lbl">ToS flags (7d)</div>
                <div className="stat-num">11</div>
                <div className="stat-delta">▲ 3 vs last wk</div>
              </div>
              <div className="stat lime">
                <div className="stat-lbl">Account ban-rate</div>
                <div className="stat-num">0.42%</div>
                <div className="stat-delta">Below 1% target</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Proxy pool health</div>
                <div className="stat-num">96%</div>
                <div className="stat-delta up">Clean · residential</div>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.25rem' }}>
              <div className="card-head">
                <div>
                  <div className="card-title">Active incidents</div>
                  <div className="card-sub">
                    Assigned to on-call rotation · escalate if unresolved in 4h
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  <span className="chip solid">All · 4</span>
                  <span className="chip">High · 2</span>
                  <span className="chip">Medium · 2</span>
                </div>
              </div>

              {incidents.map((inc) => (
                <div key={inc.title} className={`incident${inc.high ? ' sev-high' : ''}`}>
                  <div className="inc-head">
                    <div>
                      <div className="inc-title">{inc.title}</div>
                      <div className="inc-sub">{inc.sub}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
                      <span className={`chip${inc.high ? ' tag-sev' : ''}`}>{inc.sev}</span>
                      <span className={inc.statusCls}>{inc.status}</span>
                    </div>
                  </div>
                  <div className="inc-body">{inc.body}</div>
                  <div className="inc-acts">
                    {inc.acts.map((a, i) => (
                      <button key={i} className={a.cls}>
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-title">Platform ToS watch</div>
                <div className="card-sub">Enforcement signals by platform · last 24h</div>
                <div className="divider"></div>
                {tosWatch.map((t) => (
                  <div key={t.name} className="tos-item">
                    <div>
                      <b>{t.name}</b>
                      <div
                        style={{
                          fontSize: '.75rem',
                          color: 'var(--muted)',
                          fontFamily: "'JetBrains Mono',monospace",
                        }}
                      >
                        {t.sub}
                      </div>
                    </div>
                    <span className={t.cls}>{t.label}</span>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="card-title">Rate-limit policy</div>
                <div className="card-sub">Per-account ceilings enforced by scheduler</div>
                <div className="divider"></div>
                <div className="tos-item">
                  <span>Max actions / account / day</span>
                  <b className="mono">20</b>
                </div>
                <div className="tos-item">
                  <span>Min delay between actions</span>
                  <b className="mono">5–30 min</b>
                </div>
                <div className="tos-item">
                  <span>Warm-up window · new accounts</span>
                  <b className="mono">14 days</b>
                </div>
                <div className="tos-item">
                  <span>Reply-template diversity floor</span>
                  <b className="mono">≥ 4 variants</b>
                </div>
                <div className="tos-item">
                  <span>Manual review · agency posts</span>
                  <span className="chip dot">Required</span>
                </div>
                <div className="tos-item">
                  <span>Official API preference</span>
                  <span className="chip dot">When available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
