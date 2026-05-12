import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-analytics.css';

const chartCols = [
  { fb: 40, ig: 28, x: 18 },
  { fb: 52, ig: 36, x: 24 },
  { fb: 45, ig: 42, x: 20 },
  { fb: 62, ig: 48, x: 28 },
  { fb: 70, ig: 55, x: 32 },
  { fb: 58, ig: 68, x: 36 },
  { fb: 82, ig: 76, x: 40 },
];

const reactions = [
  { l: '👍 Like', v: '42%' },
  { l: '❤️ Love', v: '28%' },
  { l: '😂 Haha', v: '18%' },
  { l: '😮 Wow', v: '12%' },
];

const topPosts = [
  { post: 'Behind the scenes from the shoot…', plat: 'ig', icon: '◉', reach: '12.4K', velocity: '82%', replies: 47, vBold: true },
  { post: 'New saree colors — which one?', plat: 'ig', icon: '◉', reach: '9.8K', velocity: '71%', replies: 19, vBold: true },
  { post: 'New summer drop just landed 🌸', plat: 'fb', icon: 'f', reach: '6.2K', velocity: '68%', replies: 34, vBold: true },
  { post: 'Customer review roundup', plat: 'fb', icon: 'f', reach: '3.1K', velocity: '44%', replies: 12 },
  { post: 'Free delivery inside Dhaka today', plat: 'x', icon: '𝕏', reach: '2.1K', velocity: '55%', replies: 23 },
];

const times = [
  { l: 'Mon 8pm', w: '92%', v: '9.2K' },
  { l: 'Fri 6pm', w: '86%', v: '8.6K' },
  { l: 'Sun 9pm', w: '78%', v: '7.8K' },
  { l: 'Wed 7pm', w: '64%', v: '6.4K' },
  { l: 'Thu 8pm', w: '52%', v: '5.2K' },
];

export default function AnalyticsPage() {
  return (
    <div className="p-analytics">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Insights' }, { label: 'Analytics', current: true }]}
            searchPlaceholder="Filter reports…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm">Export PDF</button>
                <button className="btn sm primary">Email weekly</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Analytics</h1>
                <p>
                  First-hour performance, platform share, and reply effectiveness — Apr 17 → Apr
                  24, 2026.
                </p>
              </div>
              <div className="page-head-actions">
                <select className="btn sm">
                  <option>Last 7 days</option>
                </select>
                <select className="btn sm">
                  <option>All targets</option>
                </select>
              </div>
            </div>

            <div className="grid-4">
              <div className="stat accent">
                <div className="stat-lbl">First-hour velocity</div>
                <div className="stat-num">71%</div>
                <div className="stat-delta up">▲ 12pts WoW</div>
              </div>
              <div className="stat">
                <div className="stat-lbl">Posts monitored</div>
                <div className="stat-num">12</div>
                <div className="stat-delta up">▲ 3 posts</div>
              </div>
              <div className="stat lime">
                <div className="stat-lbl">Total reach</div>
                <div className="stat-num">48.2K</div>
                <div className="stat-delta up">▲ 18%</div>
              </div>
              <div className="stat dark">
                <div className="stat-lbl">Reply effectiveness</div>
                <div className="stat-num">64%</div>
                <div className="stat-delta up">▲ 4pts</div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-head">
                  <div>
                    <div className="card-title">Engagement by platform</div>
                    <div className="card-sub">Daily interactions · last 7 days</div>
                  </div>
                  <span className="chip solid">Stacked</span>
                </div>
                <div className="chart">
                  {chartCols.map((c, i) => (
                    <div key={i} className="col">
                      <div className="seg" style={{ background: '#1877f2', height: `${c.fb}px` }}></div>
                      <div
                        className="seg"
                        style={{
                          background: 'linear-gradient(45deg,#f09433,#dc2743)',
                          height: `${c.ig}px`,
                        }}
                      ></div>
                      <div className="seg" style={{ background: '#000', height: `${c.x}px` }}></div>
                    </div>
                  ))}
                </div>
                <div className="chart-legend">
                  <span className="fb">Facebook</span>
                  <span className="ig">Instagram</span>
                  <span className="x">X/Twitter</span>
                </div>
              </div>

              <div className="card">
                <div className="card-title">Reaction mix</div>
                <div className="card-sub">Facebook · last 7 days</div>
                <div className="pie" style={{ margin: '1rem auto' }}></div>
                <div
                  style={{
                    marginTop: '1rem',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '.82rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.4rem',
                  }}
                >
                  {reactions.map((r) => (
                    <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{r.l}</span>
                      <b>{r.v}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-title">Top posts this week</div>
                <div className="card-sub">Ranked by first-hour velocity</div>
                <div className="divider"></div>
                <table className="tbl compact">
                  <thead>
                    <tr>
                      <th>Post</th>
                      <th>Platform</th>
                      <th>Reach</th>
                      <th>Velocity</th>
                      <th>Replies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPosts.map((p, i) => (
                      <tr key={i}>
                        <td>{p.post}</td>
                        <td>
                          <span className={`plat sm ${p.plat}`}>{p.icon}</span>
                        </td>
                        <td>{p.reach}</td>
                        <td>{p.vBold ? <b>{p.velocity}</b> : p.velocity}</td>
                        <td>{p.replies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card">
                <div className="card-title">Best posting times</div>
                <div className="card-sub">Avg engagement · last 30 days</div>
                <div className="divider"></div>
                <div className="bars">
                  {times.map((t) => (
                    <div key={t.l} className="bar">
                      <span className="l">{t.l}</span>
                      <span className="t">
                        <div style={{ width: t.w }}></div>
                      </span>
                      <span className="v">{t.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">
                    Competitor benchmark{' '}
                    <span className="badge" style={{ background: 'var(--accent)' }}>
                      Ultra
                    </span>
                  </div>
                  <div className="card-sub">Last 7 days · share-of-voice in your niche</div>
                </div>
              </div>
              <table className="tbl compact">
                <thead>
                  <tr>
                    <th>Account</th>
                    <th>Posts</th>
                    <th>Avg reach</th>
                    <th>First-hour</th>
                    <th>Reply rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>@rahimfashionhouse (you)</b>
                    </td>
                    <td>12</td>
                    <td>4.0K</td>
                    <td>
                      <b style={{ color: 'var(--good)' }}>71%</b>
                    </td>
                    <td>64%</td>
                  </tr>
                  <tr>
                    <td>@competitor-a</td>
                    <td>15</td>
                    <td>3.2K</td>
                    <td>58%</td>
                    <td>41%</td>
                  </tr>
                  <tr>
                    <td>@competitor-b</td>
                    <td>9</td>
                    <td>2.8K</td>
                    <td>52%</td>
                    <td>38%</td>
                  </tr>
                  <tr>
                    <td>@competitor-c</td>
                    <td>11</td>
                    <td>2.1K</td>
                    <td>46%</td>
                    <td>33%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
