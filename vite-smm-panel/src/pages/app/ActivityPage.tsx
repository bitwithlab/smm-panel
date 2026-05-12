import type { ReactNode } from 'react';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-activity.css';

type Row = {
  time: string;
  icoCls: 'ok' | 'warn' | 'bad' | 'scan';
  ico: string;
  body: ReactNode;
  sub: string;
  chip: ReactNode;
  seat: string;
};

const rows: Row[] = [
  {
    time: '14:32 · Apr 24',
    icoCls: 'ok',
    ico: '✓',
    body: (
      <>
        <b>Reply sent</b> · "Loving the color story on this drop…" to post <b>#fb_18472</b>
      </>
    ),
    sub: '@rahimfashionhouse · approved by Nusrat J.',
    chip: <span className="chip dot">Delivered</span>,
    seat: 'Nusrat J.',
  },
  {
    time: '14:30 · Apr 24',
    icoCls: 'scan',
    ico: '⟳',
    body: (
      <>
        <b>Facebook scan</b> completed · 1 new post detected
      </>
    ),
    sub: '6 posts scanned · 4.2s · scheduler',
    chip: <span className="chip">Auto</span>,
    seat: 'System',
  },
  {
    time: '14:28 · Apr 24',
    icoCls: 'ok',
    ico: '✓',
    body: (
      <>
        <b>Approval granted</b> · 3 AI drafts reviewed and 1 chosen
      </>
    ),
    sub: 'Post #fb_18472 · draft variant A (warm)',
    chip: <span className="chip">Approval</span>,
    seat: 'Nusrat J.',
  },
  {
    time: '13:18 · Apr 24',
    icoCls: 'ok',
    ico: '✓',
    body: (
      <>
        <b>Reply sent</b> · "In stock, all three sizes…" to post <b>#ig_3422</b>
      </>
    ),
    sub: '@rahim.store.bd · approved by Ayesha R.',
    chip: <span className="chip dot">Delivered</span>,
    seat: 'Ayesha R.',
  },
  {
    time: '12:45 · Apr 24',
    icoCls: 'warn',
    ico: '!',
    body: (
      <>
        <b>Rate limit warning</b> · @rahim_live near daily ceiling (18/20)
      </>
    ),
    sub: 'Throttling enabled · next reply available 13:15',
    chip: <span className="chip dot warn">Warning</span>,
    seat: 'System',
  },
  {
    time: '11:02 · Apr 24',
    icoCls: 'ok',
    ico: '✓',
    body: (
      <>
        <b>Reply sent</b> · "দারুণ কালেকশন! সাইজ কি…" to post <b>#fb_18431</b>
      </>
    ),
    sub: '@rahimfashionhouse · approved by Nusrat J.',
    chip: <span className="chip dot">Delivered</span>,
    seat: 'Nusrat J.',
  },
  {
    time: '10:15 · Apr 24',
    icoCls: 'scan',
    ico: '⟳',
    body: (
      <>
        <b>Instagram scan</b> completed · 2 new posts detected
      </>
    ),
    sub: '8 posts scanned · 3.8s · scheduler',
    chip: <span className="chip">Auto</span>,
    seat: 'System',
  },
  {
    time: '09:42 · Apr 24',
    icoCls: 'bad',
    ico: '✕',
    body: (
      <>
        <b>Reply failed</b> · Comment thread locked by page admin
      </>
    ),
    sub: 'Post #fb_18399 · retry queued for 10:42',
    chip: <span className="chip dot bad">Failed</span>,
    seat: 'System',
  },
  {
    time: '09:30 · Apr 24',
    icoCls: 'ok',
    ico: '✓',
    body: (
      <>
        <b>New target added</b> · @rahim.chittagong (Instagram)
      </>
    ),
    sub: 'OAuth grant · 4.4K followers',
    chip: <span className="chip">Config</span>,
    seat: 'Nusrat J.',
  },
  {
    time: '08:00 · Apr 24',
    icoCls: 'scan',
    ico: '⟳',
    body: (
      <>
        <b>Daily digest emailed</b> · 3 posts reviewed overnight
      </>
    ),
    sub: 'Sent to nusrat@fashionhouse.bd',
    chip: <span className="chip">Email</span>,
    seat: 'System',
  },
  {
    time: '23:00 · Apr 23',
    icoCls: 'scan',
    ico: '⟳',
    body: (
      <>
        <b>X/Twitter scan</b> completed · 1 new post detected
      </>
    ),
    sub: '4 posts scanned · 2.1s',
    chip: <span className="chip">Auto</span>,
    seat: 'System',
  },
];

export default function ActivityPage() {
  return (
    <div className="p-activity">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Insights' }, { label: 'Activity log', current: true }]}
            searchPlaceholder="Search log…"
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
                <h1>Activity log</h1>
                <p>Every action — human or automated — on your workspace.</p>
              </div>
              <div className="page-head-actions">
                <button className="btn sm">Last 7 days</button>
              </div>
            </div>

            <div className="filters">
              <span className="chip solid">All · 142</span>
              <span className="chip">Replies sent · 42</span>
              <span className="chip">Scans · 68</span>
              <span className="chip">Approvals · 28</span>
              <span className="chip">Warnings · 4</span>
            </div>

            <div className="stream">
              {rows.map((r, i) => (
                <div key={i} className="log-row">
                  <div className="log-time">{r.time}</div>
                  <div className={`log-ico ${r.icoCls}`}>{r.ico}</div>
                  <div className="log-body">
                    {r.body}
                    <div className="sub">{r.sub}</div>
                  </div>
                  {r.chip}
                  <span className="log-seat">{r.seat}</span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button className="btn">Load earlier activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
