import { Link } from 'react-router-dom';
import AgencySidebar from '../../components/AgencySidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/agency-clients.css';

type Client = {
  name: string;
  domain: string;
  plan: string;
  planCls?: string;
  posts: string;
  bar: number;
  barCls?: string;
  velocity: string;
  velocityGood?: boolean;
  mrr: string;
  status: string;
  statusCls: string;
  cta: string;
};

const clients: Client[] = [
  { name: 'Rahim Fashion House', domain: 'rahim.engageflow.app', plan: 'Standard', posts: '18 / 20', bar: 90, velocity: '71%', velocityGood: true, mrr: '৳199', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Dhaka Bites Restaurant', domain: 'dhakabites.engageflow.app', plan: 'Basic', posts: '6 / 10', bar: 60, barCls: 'var(--good)', velocity: '58%', mrr: '৳99', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Nusrat Beauty Co.', domain: 'nusratbeauty.engageflow.app', plan: 'Ultra', planCls: 'accent', posts: '24 / 30', bar: 80, velocity: '78%', velocityGood: true, mrr: '৳399', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'ChapkinBD', domain: 'chapkinbd.engageflow.app', plan: 'Standard', posts: '14 / 20', bar: 70, velocity: '64%', mrr: '৳199', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Ctg Street Food', domain: 'ctgstreet.engageflow.app', plan: 'Standard', posts: '11 / 20', bar: 55, velocity: '61%', mrr: '৳199', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Craft & Cotton', domain: 'craftcotton.engageflow.app', plan: 'Ultra', planCls: 'accent', posts: '28 / 30', bar: 93, barCls: 'var(--warn)', velocity: '74%', velocityGood: true, mrr: '৳399', status: 'Quota near', statusCls: 'chip dot warn', cta: 'Login as →' },
  { name: 'Sylhet Estates', domain: 'sylhetestates.engageflow.app', plan: 'Basic', posts: '4 / 10', bar: 40, velocity: '52%', mrr: '৳99', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'LuxeDhaka', domain: 'luxedhaka.engageflow.app', plan: 'Standard', posts: '—', bar: 0, velocity: '—', mrr: '৳199', status: 'Paused', statusCls: 'chip dot idle', cta: 'Resume' },
  { name: 'TechShop BD', domain: 'techshopbd.engageflow.app', plan: 'Ultra', planCls: 'accent', posts: '19 / 30', bar: 63, velocity: '67%', mrr: '৳399', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Roots Bookstore', domain: 'rootsbooks.engageflow.app', plan: 'Basic', posts: '3 / 10', bar: 30, velocity: '48%', mrr: '৳99', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Daraz Seller · Runa', domain: 'runa.engageflow.app', plan: 'Standard', posts: '16 / 20', bar: 80, velocity: '65%', mrr: '৳199', status: 'Active', statusCls: 'chip dot', cta: 'Login as →' },
  { name: 'Momin Motors', domain: 'moment.engageflow.app', plan: 'Standard', posts: '—', bar: 0, velocity: '—', mrr: '৳199', status: 'Onboarding', statusCls: 'chip dot idle', cta: 'Continue →' },
];

export default function ClientsPage() {
  return (
    <div className="p-clients">
      <div className="app">
        <AgencySidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Agency' }, { label: 'Clients', current: true }]}
            searchPlaceholder="Search clients…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm primary">+ Onboard client</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Clients</h1>
                <p>12 of unlimited workspaces · 284 total posts handled this month.</p>
              </div>
              <div className="page-head-actions">
                <button className="btn sm">Export</button>
                <button className="btn sm primary">+ Onboard client</button>
              </div>
            </div>

            <div className="agency-banner">
              <div>
                <h3>Orbit Agency · white-label dashboard</h3>
                <p>
                  Your clients log in at <b>orbit.engageflow.app</b> · 284 posts handled · ৳68,400
                  MRR across clients
                </p>
              </div>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <Link
                  to="/agency-whitelabel"
                  className="btn sm"
                  style={{ background: 'var(--lime)', borderColor: 'var(--lime)' }}
                >
                  Edit white-label
                </Link>
                <Link
                  to="/agency-reports"
                  className="btn sm ghost"
                  style={{ color: 'var(--cream)', borderColor: 'rgba(255,255,255,.4)' }}
                >
                  Branded reports
                </Link>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat accent">
                <div className="stat-lbl">Active clients</div>
                <div className="stat-num">12</div>
                <div className="stat-delta up">▲ 2 this month</div>
              </div>
              <div className="stat lime">
                <div className="stat-lbl">Total MRR</div>
                <div className="stat-num">৳68.4K</div>
                <div className="stat-delta up">▲ 12%</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Posts this month</div>
                <div className="stat-num">284</div>
                <div className="stat-delta">of 1,200 pooled</div>
              </div>
              <div className="stat dark">
                <div className="stat-lbl">Avg first-hour</div>
                <div className="stat-num">69%</div>
                <div className="stat-delta up">▲ 4pts WoW</div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">Client workspaces</div>
                  <div className="card-sub">
                    Login as any client · manage quotas · pause sub-accounts
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  <span className="chip solid">All · 12</span>
                  <span className="chip">Active · 10</span>
                  <span className="chip">Paused · 2</span>
                </div>
              </div>

              <table className="tbl">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Plan</th>
                    <th>Posts</th>
                    <th>Velocity</th>
                    <th>MRR</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((c) => (
                    <tr key={c.name}>
                      <td>
                        <div className="client-head">{c.name}</div>
                        <div
                          style={{
                            fontSize: '.75rem',
                            color: 'var(--muted)',
                            fontFamily: "'JetBrains Mono',monospace",
                          }}
                        >
                          {c.domain}
                        </div>
                      </td>
                      <td>
                        <span className={`chip${c.planCls ? ` ${c.planCls}` : ''}`}>{c.plan}</span>
                      </td>
                      <td>
                        <b>{c.posts}</b>
                        {c.bar > 0 && (
                          <div className="mini-bar" style={{ marginTop: '.3rem' }}>
                            <div
                              style={{
                                width: `${c.bar}%`,
                                ...(c.barCls ? { background: c.barCls } : {}),
                              }}
                            ></div>
                          </div>
                        )}
                      </td>
                      <td>
                        {c.velocityGood ? (
                          <b style={{ color: 'var(--good)' }}>{c.velocity}</b>
                        ) : c.velocity === '—' ? (
                          c.velocity
                        ) : (
                          <b>{c.velocity}</b>
                        )}
                      </td>
                      <td>{c.mrr}</td>
                      <td>
                        <span className={c.statusCls}>{c.status}</span>
                      </td>
                      <td>
                        <button className="btn sm">{c.cta}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
