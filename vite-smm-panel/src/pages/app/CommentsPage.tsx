import { useState } from 'react';
import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-comments.css';

const cats = [
  { label: 'All', n: '14' },
  { label: 'Warm · friendly', n: '5' },
  { label: 'Informational', n: '4' },
  { label: 'Playful', n: '3' },
  { label: 'Support', n: '2' },
  { divider: true },
  { label: 'Bangla', n: '9' },
  { label: 'English', n: '5' },
  { divider: true },
  { label: '+ New category', n: '·' },
];

const replies = [
  { body: '"Loving the color story on this drop — which one\'s the best-seller so far?"', tags: ['Warm', 'English'], used: '34×', rate: '↗ 68% reply rate' },
  { body: '"দারুণ কালেকশন! সাইজ কি সব available? 🔥"', tags: ['Warm', 'Bangla'], used: '28×', rate: '↗ 72% reply rate' },
  { body: '"In stock, all three sizes. DM us for the price list today."', tags: ['Info', 'English'], used: '41×', rate: '↗ 58% reply rate' },
  { body: '"ভাইরাল হওয়ার মতো কালেকশন! 👏"', tags: ['Playful', 'Bangla'], used: '19×', rate: '↗ 64% reply rate' },
  { body: '"Price inbox please — within Dhaka free delivery today."', tags: ['Info', 'Mixed'], used: '52×', rate: '↗ 81% reply rate' },
  { body: '"আমার জন্য একটা রাখুন, কাল morning তে collection point থেকে নেবো।"', tags: ['Warm', 'Bangla'], used: '17×', rate: '↗ 59% reply rate' },
  { body: '"Amazing quality! Ordered last month and the stitching is top-tier 💯"', tags: ['Warm', 'English'], used: '23×', rate: '↗ 66% reply rate' },
  { body: '"Delivery Dhaka? Outside Dhaka কত দিন লাগে সাধারণত?"', tags: ['Support', 'Bangla'], used: '12×', rate: '↗ 45% reply rate' },
];

export default function CommentsPage() {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <div className="p-comments">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Workspace' }, { label: 'Comment library', current: true }]}
            searchPlaceholder="Search replies…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm primary">+ New reply</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Comment library</h1>
                <p>Brand-voice replies reusable across posts · 14 of 20 on Standard plan.</p>
              </div>
              <div className="page-head-actions">
                <button className="btn ghost sm">Import</button>
                <button className="btn sm">Bulk edit</button>
                <button className="btn sm primary">+ New reply</button>
              </div>
            </div>

            <div className="lib-grid">
              <div className="cats">
                {cats.map((c, i) =>
                  c.divider ? (
                    <div
                      key={i}
                      style={{ margin: '.7rem 0', borderTop: '1px dashed var(--line-2)' }}
                    ></div>
                  ) : (
                    <div
                      key={i}
                      className={`cat${activeCat === i ? ' on' : ''}`}
                      onClick={() => setActiveCat(i)}
                    >
                      <span>{c.label}</span>
                      <span className="n">{c.n}</span>
                    </div>
                  ),
                )}
              </div>

              <div className="cards-grid">
                {replies.map((r, i) => (
                  <div key={i} className="rep">
                    <div className="body">{r.body}</div>
                    <div className="tags">
                      {r.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="foot">
                      <span>Used {r.used}</span>
                      <span className="mono">{r.rate}</span>
                    </div>
                  </div>
                ))}

                <div className="new-rep">+ Add reply template</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
