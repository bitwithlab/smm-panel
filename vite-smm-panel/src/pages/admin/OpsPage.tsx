import AdminSidebar from '../../components/AdminSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/admin-ops.css';

const services = [
  { name: 'Scheduler · scan + dispatch', sub: 'AWS Mumbai · 3 nodes · 12k jobs/hr', cls: 'chip dot', label: 'Operational' },
  { name: 'Reply worker pool', sub: '8 workers · 94% utilization', cls: 'chip dot warn', label: 'Busy' },
  { name: 'Residential proxy gateway', sub: '12,400 IPs · 96% clean', cls: 'chip dot', label: 'Operational' },
  { name: 'OpenAI · comment generator', sub: 'gpt-4 · avg 1.8s · ৳0.42/req', cls: 'chip dot', label: 'Operational' },
  { name: 'SSLCommerz payment gateway', sub: 'bKash · Nagad · card', cls: 'chip dot', label: 'Operational' },
  { name: 'Postgres primary', sub: '24 GB · p95 38ms', cls: 'chip dot', label: 'Operational' },
];

const planMix = [
  { plan: 'Basic · ৳99', users: '842', share: '46%', mrr: '৳83,358' },
  { plan: 'Standard · ৳199', users: '871', share: '47%', mrr: '৳1,73,329' },
  { plan: 'Ultra · ৳399', users: '122', share: '7%', mrr: '৳48,678' },
  { plan: 'Agency · ৳2,499', users: '12', share: '0.6%', mrr: '৳29,988' },
];

const costs = [
  { item: 'Cloud servers (AWS/DO)', cost: '৳18,400', pct: '4.9%' },
  { item: 'Residential proxy pool', cost: '৳28,200', pct: '7.6%' },
  { item: 'OpenAI · AI comments', cost: '৳11,700', pct: '3.1%' },
  { item: 'Payment gateway fees', cost: '৳10,060', pct: '2.7%' },
  { item: 'SMS + email', cost: '৳3,200', pct: '0.9%' },
  { item: 'Team (salaries)', cost: '৳2,20,000', pct: '59%' },
  { item: 'Marketing', cost: '৳80,000', pct: '21%' },
];

export default function OpsPage() {
  return (
    <div className="p-ops">
      <div className="app">
        <AdminSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Platform' }, { label: 'Operations', current: true }]}
            searchPlaceholder="Search services…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Status page</button>
                <button className="btn sm primary">Page on-call</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Operations</h1>
                <p>System health, infrastructure, and revenue at a glance.</p>
              </div>
            </div>

            <div className="kpi-row">
              <div className="stat lime">
                <div className="stat-lbl">Uptime · 30d</div>
                <div className="stat-num">99.82%</div>
                <div className="stat-delta up">SLA 99.5% ✓</div>
              </div>
              <div className="stat accent">
                <div className="stat-lbl">MRR</div>
                <div className="stat-num">৳4.82L</div>
                <div className="stat-delta up">▲ ৳82K</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Avg response</div>
                <div className="stat-num">284ms</div>
                <div className="stat-delta up">p95 812ms</div>
              </div>
              <div className="stat dark">
                <div className="stat-lbl">Cost / customer</div>
                <div className="stat-num">৳28</div>
                <div className="stat-delta">Target ≤৳40</div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-title">Service health</div>
                <div className="card-sub">Live probe · updated 12s ago</div>
                <div className="divider"></div>
                {services.map((s) => (
                  <div key={s.name} className="sys-item">
                    <div>
                      <div className="sys-name">{s.name}</div>
                      <div className="sys-sub">{s.sub}</div>
                    </div>
                    <span className={s.cls}>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="card-title">MRR · last 6 months</div>
                <div className="card-sub">Recurring revenue trend</div>
                <div className="divider"></div>
                <div className="mrr-chart">
                  <div className="col" style={{ height: '14%' }}></div>
                  <div className="col" style={{ height: '22%' }}></div>
                  <div className="col" style={{ height: '38%' }}></div>
                  <div className="col" style={{ height: '52%' }}></div>
                  <div className="col" style={{ height: '74%' }}></div>
                  <div className="col hi" style={{ height: '92%' }}></div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '.5rem',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '.7rem',
                    color: 'var(--muted)',
                  }}
                >
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                </div>
                <div
                  style={{
                    marginTop: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '.5rem',
                    fontSize: '.82rem',
                  }}
                >
                  {[
                    { num: '৳4.82L', l: 'MRR · Apr' },
                    { num: '৳31.9L', l: 'YTD revenue' },
                    { num: '৳2,786', l: 'Avg LTV' },
                  ].map((s) => (
                    <div key={s.l}>
                      <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.2rem', fontWeight: 700 }}>
                        {s.num}
                      </div>
                      <div
                        style={{
                          color: 'var(--muted)',
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: '.72rem',
                        }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-title">Plan mix</div>
                <div className="card-sub">Distribution of paying users</div>
                <div className="divider"></div>
                <table className="tbl compact">
                  <thead>
                    <tr>
                      <th>Plan</th>
                      <th>Users</th>
                      <th>Share</th>
                      <th>MRR contribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planMix.map((p) => (
                      <tr key={p.plan}>
                        <td>{p.plan}</td>
                        <td>{p.users}</td>
                        <td>{p.share}</td>
                        <td>{p.mrr}</td>
                      </tr>
                    ))}
                    <tr style={{ background: 'var(--paper-2)' }}>
                      <td>
                        <b>Total</b>
                      </td>
                      <td>
                        <b>1,847</b>
                      </td>
                      <td>
                        <b>100%</b>
                      </td>
                      <td>
                        <b>৳3,35,353</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card">
                <div className="card-title">Cost breakdown</div>
                <div className="card-sub">Monthly infra · 1,847 paying customers</div>
                <div className="divider"></div>
                <table className="tbl compact">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Cost</th>
                      <th>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costs.map((c) => (
                      <tr key={c.item}>
                        <td>{c.item}</td>
                        <td>{c.cost}</td>
                        <td>{c.pct}</td>
                      </tr>
                    ))}
                    <tr style={{ background: 'var(--paper-2)' }}>
                      <td>
                        <b>Total</b>
                      </td>
                      <td>
                        <b>৳3,71,560</b>
                      </td>
                      <td>
                        <b>100%</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
