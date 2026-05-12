import AdminSidebar from '../../components/AdminSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/admin-users.css';

type User = {
  initial: string;
  bg: string;
  name: string;
  email: string;
  plan: string;
  planCls?: string;
  workspace: string;
  posts: string;
  mrr: string;
  joined: string;
  status: string;
  statusCls: string;
  cta: string;
  ctaCls: string;
};

const users: User[] = [
  { initial: 'N', bg: 'var(--accent)', name: 'Nusrat Jahan', email: 'nusrat@fashionhouse.bd', plan: 'Standard', workspace: 'Rahim Fashion', posts: '12/20', mrr: '৳199', joined: 'Dec 17', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'M', bg: 'var(--forest)', name: 'Mehedi Hassan', email: 'mehedi@orbitagency.bd', plan: 'Agency', planCls: 'accent', workspace: 'Orbit Growth', posts: '284/∞', mrr: '৳2,499', joined: 'Feb 02', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'S', bg: '#e11d48', name: 'Shakib Chowdhury', email: 'shakib@dhakabites.co', plan: 'Basic', workspace: 'Dhaka Bites', posts: '6/10', mrr: '৳99', joined: 'Mar 18', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'R', bg: '#7c3aed', name: 'Runa Khatun', email: 'runa.darazbd@gmail.com', plan: 'Standard', workspace: 'Runa Daraz Seller', posts: '16/20', mrr: '৳199', joined: 'Jan 29', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'T', bg: '#2563eb', name: 'Tanveer Rahman', email: 'tanveer@techshopbd.com', plan: 'Ultra', planCls: 'accent', workspace: 'TechShop BD', posts: '19/30', mrr: '৳399', joined: 'Feb 11', status: 'Risk · retry spike', statusCls: 'chip dot warn', cta: 'Review', ctaCls: 'btn sm' },
  { initial: 'Z', bg: '#f59e0b', name: 'Zarin Islam', email: 'zarin@craftcotton.bd', plan: 'Ultra', planCls: 'accent', workspace: 'Craft & Cotton', posts: '28/30', mrr: '৳399', joined: 'Dec 03', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'K', bg: 'var(--bad)', name: 'Karim Uddin', email: 'karim.shop@hotmail.com', plan: 'Standard', workspace: 'Karim Boutique', posts: '0/20', mrr: '৳199', joined: 'Mar 28', status: 'Suspended · ToS flag', statusCls: 'chip dot bad', cta: 'Review', ctaCls: 'btn sm' },
  { initial: 'F', bg: '#17803d', name: 'Fahim Ahmed', email: 'fahim@chapkinbd.com', plan: 'Standard', workspace: 'ChapkinBD', posts: '14/20', mrr: '৳199', joined: 'Jan 15', status: 'Active', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'P', bg: 'var(--muted)', name: 'Priya Das', email: 'priya@luxedhaka.store', plan: 'Standard', workspace: 'LuxeDhaka', posts: '—', mrr: '৳199', joined: 'Nov 22', status: 'Paused', statusCls: 'chip dot idle', cta: 'View', ctaCls: 'btn sm ghost' },
  { initial: 'A', bg: '#dc2743', name: 'Ayesha Rahman', email: 'ayesha.demo@gmail.com', plan: 'Trial', workspace: 'Personal creator', posts: '3/5 trial', mrr: '—', joined: 'Apr 22', status: 'Trial · day 2', statusCls: 'chip dot', cta: 'View', ctaCls: 'btn sm ghost' },
];

export default function UsersPage() {
  return (
    <div className="p-users">
      <div className="app">
        <AdminSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Platform' }, { label: 'Users', current: true }]}
            searchPlaceholder="Search by email, workspace, phone…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Export CSV</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Users</h1>
                <p>All workspaces across the platform · Bangladesh-first · 2,423 active.</p>
              </div>
            </div>

            <div className="kpi-row">
              <div className="stat">
                <div className="stat-lbl">Total users</div>
                <div className="stat-num">2,423</div>
                <div className="stat-delta up">▲ 284 MoM</div>
              </div>
              <div className="stat accent">
                <div className="stat-lbl">Paying</div>
                <div className="stat-num">1,847</div>
                <div className="stat-delta up">▲ 22%</div>
              </div>
              <div className="stat lime">
                <div className="stat-lbl">MRR</div>
                <div className="stat-num">৳4.82L</div>
                <div className="stat-delta up">▲ ৳82K</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Churn (30d)</div>
                <div className="stat-num">4.8%</div>
                <div className="stat-delta">Target &lt;6%</div>
              </div>
              <div className="stat dark">
                <div className="stat-lbl">NPS</div>
                <div className="stat-num">54</div>
                <div className="stat-delta up">▲ 3</div>
              </div>
            </div>

            <div className="filter-row">
              <span className="chip solid">All · 2,423</span>
              <span className="chip">Trial · 156</span>
              <span className="chip">Basic · 842</span>
              <span className="chip">Standard · 871</span>
              <span className="chip">Ultra · 122</span>
              <span className="chip">Agency · 12</span>
              <div className="sp"></div>
              <span className="chip dot warn">Risk · 18</span>
              <span className="chip dot bad">Suspended · 7</span>
            </div>

            <div className="card">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Plan</th>
                    <th>Workspace</th>
                    <th>Posts · month</th>
                    <th>MRR</th>
                    <th>Joined</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.email}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                          <div className="user-avatar" style={{ background: u.bg }}>
                            {u.initial}
                          </div>
                          <div>
                            <b>{u.name}</b>
                            <div
                              style={{
                                fontSize: '.72rem',
                                color: 'var(--muted)',
                                fontFamily: "'JetBrains Mono',monospace",
                              }}
                            >
                              {u.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`chip${u.planCls ? ` ${u.planCls}` : ''}`}>{u.plan}</span>
                      </td>
                      <td>{u.workspace}</td>
                      <td>{u.posts}</td>
                      <td>{u.mrr}</td>
                      <td>{u.joined}</td>
                      <td>
                        <span className={u.statusCls}>{u.status}</span>
                      </td>
                      <td>
                        <button className={u.ctaCls}>{u.cta}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderTop: '1px dashed var(--line-2)',
                  fontSize: '.82rem',
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                <span>1–10 of 2,423</span>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  <button className="btn sm ghost">←</button>
                  <button className="btn sm">1</button>
                  <button className="btn sm ghost">2</button>
                  <button className="btn sm ghost">3</button>
                  <button className="btn sm ghost">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
