import { useState } from 'react';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-queue.css';

const queueItems = [
  { plat: 'fb', icon: 'f', title: '"New summer drop just landed 🌸"', meta: '@rahimfashionhouse · 184 reactions', tm: '42m' },
  { plat: 'ig', icon: '◉', title: '"Behind the scenes from the shoot…"', meta: '@rahim.store.bd · 312 likes', tm: '2h' },
  { plat: 'x', icon: '𝕏', title: '"Free delivery inside Dhaka today"', meta: '@rahim_live · 2.1K imp.', tm: '1h' },
  { plat: 'fb', icon: 'f', title: '"Customer review roundup"', meta: '@rahimfashionhouse · 96 reactions', tm: '6h' },
  { plat: 'ig', icon: '◉', title: '"New saree colors — which one?"', meta: '@rahim.store.bd · 212 likes', tm: '4h' },
  { plat: 'fb', icon: 'f', title: '"Eid sale preview 🎉"', meta: '@rahimfashionhouse · 51 reactions', tm: '8h' },
  { plat: 'ig', icon: '◉', title: '"Styling tips reel"', meta: '@rahim.store.bd · 486 plays', tm: '12h' },
];

const drafts = [
  {
    tone: 'Warm · matches "friendly shopkeeper" voice',
    body: '"Loving the color story on this drop — which one\'s the best-seller so far? Mint is catching our eye 💚"',
    on: true,
    primary: true,
  },
  {
    tone: 'Info · transactional',
    body: '"In stock in all three colors, all sizes. DM us for the price list and we\'ll send today."',
  },
  {
    tone: 'Playful · casual creator voice',
    body: '"Mint mint mint. Someone please tell the coral to stop being so distracting 😤"',
  },
];

export default function QueuePage() {
  const [selected, setSelected] = useState(0);
  const [reply, setReply] = useState(
    "Loving the color story on this drop — which one's the best-seller so far? Mint is catching our eye 💚",
  );

  return (
    <div className="p-queue">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Workspace' }, { label: 'Response queue', current: true }]}
            searchPlaceholder="Filter queue…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm ghost">Snooze all</button>
                <button className="btn sm primary">Scan now</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Response queue</h1>
                <p>7 posts awaiting review · next auto-scan in 04:12</p>
              </div>
              <div className="page-head-actions">
                <button className="btn ghost sm">Filter</button>
                <button className="btn sm">Sort: Urgency</button>
              </div>
            </div>

            <div className="q-grid">
              <div className="q-list">
                <div className="q-tabs">
                  <div className="q-tab active">Needs reply · 7</div>
                  <div className="q-tab">Scheduled · 3</div>
                  <div className="q-tab">Sent · 42</div>
                </div>
                <div className="q-items">
                  {queueItems.map((q, i) => (
                    <div
                      key={i}
                      className={`q-item${selected === i ? ' on' : ''}`}
                      onClick={() => setSelected(i)}
                    >
                      <div className={`plat ${q.plat}`}>{q.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="t">{q.title}</div>
                        <div className="m">{q.meta}</div>
                      </div>
                      <div className="tm">{q.tm}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="q-detail">
                <div className="post-card">
                  <div className="post-head">
                    <div className="plat fb">f</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>@rahimfashionhouse</div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: '.72rem',
                          color: 'var(--muted)',
                        }}
                      >
                        Posted 42 min ago · id #fb_18472
                      </div>
                    </div>
                    <span className="chip dot warn">First hour · 18min left</span>
                  </div>
                  <div className="post-body">
                    "New summer drop just landed 🌸 Three new colors in the signature saree line —
                    pastel mint, midnight blue, and coral. In stock from today, 10am–10pm. Which
                    color would you pick?"
                  </div>
                  <div className="post-stats">
                    <span className="chip">👍 86</span>
                    <span className="chip">❤️ 52</span>
                    <span className="chip">😂 28</span>
                    <span className="chip">😮 18</span>
                    <span className="chip">💬 34 comments</span>
                    <span className="chip accent">Reach 6.2K</span>
                  </div>
                </div>

                <div className="drafts">
                  <h4>
                    AI reply drafts <span className="badge">3 options · regenerate</span>
                  </h4>
                  {drafts.map((d, i) => (
                    <div key={i} className={`draft${d.on ? ' on' : ''}`}>
                      <div className="draft-body">
                        <span className="tone">{d.tone}</span>
                        {d.body}
                      </div>
                      <div className="acts">
                        <button className="btn sm">Edit</button>
                        <button className={`btn sm${d.primary ? ' primary' : ''}`}>Use</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reply-box">
                  <textarea value={reply} onChange={(e) => setReply(e.target.value)} />
                  <div className="reply-foot">
                    <span className="mono">
                      {reply.length} chars · Bangla+English mix · brand voice: friendly
                    </span>
                    <span className="chip dot">Within rate limit</span>
                  </div>
                </div>

                <div className="compose-actions">
                  <button className="btn ghost">Save as draft</button>
                  <button className="btn">Schedule</button>
                  <button className="btn primary lg" style={{ flex: 1 }}>
                    Approve & send →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
