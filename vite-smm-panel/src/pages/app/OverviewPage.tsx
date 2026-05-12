import { Link } from 'react-router-dom';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-overview.css';

const feed = [
  { plat: 'fb', icon: 'f', handle: '@rahimfashionhouse', meta: '42 min ago · 184 reactions · 34 comments · first-hour velocity 68%', velocity: 68, badge: 'New post', cta: 'Review →', primary: false },
  { plat: 'ig', icon: '◉', handle: '@rahim.store.bd', meta: '2 hr ago · 312 likes · 47 comments · first-hour velocity 82%', velocity: 82, cta: 'Review →' },
  { plat: 'x', icon: '𝕏', handle: '@rahim_live', meta: '1 hr ago · 2.1K impressions · 89 likes · 23 replies', velocity: 55, chip: 'Needs reply', cta: 'Reply →', primary: true },
  { plat: 'ig', icon: '◉', handle: '@rahim.store.bd', meta: '4 hr ago · 212 likes · 19 comments · velocity 71%', velocity: 71, cta: 'Review →' },
  { plat: 'fb', icon: 'f', handle: '@rahimfashionhouse', meta: '6 hr ago · 96 reactions · 12 comments · velocity 44%', velocity: 44, cta: 'Review →' },
];

export default function OverviewPage() {
  return (
    <div className="p-overview">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[
              { label: 'EngageFlow' },
              { label: 'Overview', current: true },
            ]}
            searchPlaceholder="Search posts, comments, targets…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="iconbtn">⚙</button>
                <Link to="/app-queue" className="btn sm primary">
                  Open queue →
                </Link>
              </>
            }
          />
          <div className="app-body">
            <div className="brief">
              <div>
                <h2>Good morning, Nusrat 👋</h2>
                <p>3 new posts detected in the last hour · 7 items waiting in your queue · next scan in 04:12</p>
              </div>
              <span className="chip">All systems on track</span>
            </div>

            <div className="grid-4">
              <div className="stat accent">
                <div className="stat-lbl">Posts this month</div>
                <div className="stat-num">12 / 20</div>
                <div className="stat-delta up">▲ 3 this week</div>
              </div>
              <div className="stat lime">
                <div className="stat-lbl">Quota remaining</div>
                <div className="stat-num">08</div>
                <div className="stat-delta">Resets May 17</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Active targets</div>
                <div className="stat-num">04</div>
                <div className="stat-delta">FB · IG · X · IG</div>
              </div>
              <div className="stat dark">
                <div className="stat-lbl">On-time response</div>
                <div className="stat-num">94%</div>
                <div className="stat-delta up">▲ 6pts vs last wk</div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-head">
                  <div>
                    <div className="card-title">Live feed</div>
                    <div className="card-sub">Posts detected in the last 24 hours</div>
                  </div>
                  <div style={{ display: 'flex', gap: '.4rem' }}>
                    <button className="chip">All</button>
                    <button className="chip solid">FB</button>
                    <button className="chip">IG</button>
                    <button className="chip">X</button>
                  </div>
                </div>

                {feed.map((f, i) => (
                  <div key={i} className="feed-item">
                    <div className={`plat ${f.plat}`}>{f.icon}</div>
                    <div className="meta">
                      <div className="h">
                        {f.handle}
                        {f.badge && <span className="badge">{f.badge}</span>}
                        {f.chip && <span className="chip dot warn">{f.chip}</span>}
                      </div>
                      <div className="sub">{f.meta}</div>
                      <div className="bar-h">
                        <div style={{ width: `${f.velocity}%` }}></div>
                      </div>
                    </div>
                    <Link
                      to="/app-queue"
                      className={`btn sm${f.primary ? ' primary' : ''}`}
                    >
                      {f.cta}
                    </Link>
                  </div>
                ))}
              </div>

              <div>
                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div className="card-title">7-day velocity</div>
                  <div className="card-sub">First-hour engagement index</div>
                  <div className="spark">
                    <span style={{ height: '35%' }}></span>
                    <span style={{ height: '55%' }}></span>
                    <span style={{ height: '48%' }}></span>
                    <span style={{ height: '62%' }} className="hi"></span>
                    <span style={{ height: '71%' }} className="hi"></span>
                    <span style={{ height: '58%' }}></span>
                    <span style={{ height: '82%' }} className="hi"></span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '.4rem',
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: '.68rem',
                      color: 'var(--muted)',
                    }}
                  >
                    <span>Apr 18</span>
                    <span>Apr 24</span>
                  </div>
                </div>

                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div className="card-title">Quick actions</div>
                  <div className="card-sub" style={{ marginBottom: '1rem' }}>
                    Shortcuts for your team
                  </div>
                  <div className="quick">
                    <Link to="/app-queue">⎘ Open queue</Link>
                    <Link to="/app-comments">✎ New reply</Link>
                    <Link to="/app-targets">◎ Add target</Link>
                    <Link to="/app-analytics">◫ View reports</Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-title">Today's schedule</div>
                  <div className="card-sub">Next auto-scans</div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: '.82rem',
                      lineHeight: 1.9,
                      color: 'var(--muted)',
                    }}
                  >
                    → 14:45 · Facebook scan
                    <br />
                    → 15:30 · Instagram scan
                    <br />
                    → 16:15 · X/Twitter scan
                    <br />
                    → 23:00 · Daily digest email
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
