import CustomerSidebar from '../../components/CustomerSidebar';
import AppTopBar from '../../components/AppTopBar';
import '../../styles/pages/app-billing.css';

const invoices = [
  { num: '#EF-2026-0417', date: 'Apr 17, 2026', desc: 'Standard plan · monthly', amt: '৳199.00' },
  { num: '#EF-2026-0317', date: 'Mar 17, 2026', desc: 'Standard plan · monthly', amt: '৳199.00' },
  { num: '#EF-2026-0217', date: 'Feb 17, 2026', desc: 'Standard plan · monthly', amt: '৳199.00' },
  { num: '#EF-2026-0117', date: 'Jan 17, 2026', desc: 'Basic plan · monthly', amt: '৳99.00' },
  { num: '#EF-2025-1217', date: 'Dec 17, 2025', desc: 'Trial → Basic upgrade', amt: '৳99.00' },
];

export default function BillingPage() {
  return (
    <div className="p-billing">
      <div className="app">
        <CustomerSidebar />
        <div className="app-main">
          <AppTopBar
            crumbs={[{ label: 'Account' }, { label: 'Billing', current: true }]}
            searchPlaceholder="Search invoices…"
            rightSlot={
              <>
                <button className="iconbtn">🔔</button>
                <button className="btn sm primary">Upgrade plan</button>
              </>
            }
          />
          <div className="app-body">
            <div className="page-head">
              <div>
                <h1>Billing</h1>
                <p>Plan, invoices, and payment methods.</p>
              </div>
            </div>

            <div className="grid-2">
              <div className="plan-cur">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <h3>Standard plan</h3>
                    <div className="sub">Renews May 17, 2026 · monthly billing · ৳199/mo</div>
                  </div>
                  <span className="chip lime">Active</span>
                </div>
                <div className="meter">
                  <div></div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '.82rem',
                  }}
                >
                  <span>12 of 20 posts used</span>
                  <span>8 remaining</span>
                </div>
                <div className="next">Next charge · May 17, 2026 · ৳199 to bKash ending in 4421</div>
                <div style={{ display: 'flex', gap: '.6rem', marginTop: '1.25rem' }}>
                  <button
                    className="btn sm"
                    style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}
                  >
                    Upgrade to Ultra
                  </button>
                  <button
                    className="btn sm ghost"
                    style={{
                      color: 'var(--cream)',
                      borderColor: 'rgba(255,255,255,.4)',
                    }}
                  >
                    Switch to annual · save 15%
                  </button>
                  <button
                    className="btn sm link"
                    style={{ color: 'rgba(255,255,255,.55)' }}
                  >
                    Cancel plan
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-title">Payment methods</div>
                <div className="card-sub">Primary is used for renewals</div>
                <div className="pay-methods" style={{ marginTop: '.6rem' }}>
                  <div className="pm bk on">
                    <div className="ico">bK</div>
                    <div className="t">
                      <div className="v">bKash · ending 4421</div>
                      <div className="m">Primary · verified</div>
                    </div>
                    <span className="chip">Primary</span>
                  </div>
                  <div className="pm ng">
                    <div className="ico">NG</div>
                    <div className="t">
                      <div className="v">Nagad · ending 8890</div>
                      <div className="m">Backup · verified</div>
                    </div>
                    <button className="btn sm ghost">Set primary</button>
                  </div>
                  <div className="pm cd">
                    <div className="ico">VISA</div>
                    <div className="t">
                      <div className="v">Visa · ending 0012</div>
                      <div className="m">Expires 11/27</div>
                    </div>
                    <button className="btn sm ghost">Remove</button>
                  </div>
                </div>
                <button className="btn full" style={{ marginTop: '.8rem' }}>
                  + Add payment method
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">Invoices</div>
                  <div className="card-sub">Download receipts for every charge</div>
                </div>
                <button className="btn sm">Export all</button>
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.num}>
                      <td>
                        <b>{inv.num}</b>
                      </td>
                      <td>{inv.date}</td>
                      <td>{inv.desc}</td>
                      <td>{inv.amt}</td>
                      <td>
                        <span className="chip dot">Paid</span>
                      </td>
                      <td>
                        <button className="btn sm ghost">PDF ↓</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="note" style={{ marginTop: '1.25rem' }}>
              <div className="ico">i</div>Questions about an invoice? Email{' '}
              <b>billing@engageflow.app</b> — we respond within 2 hours during BST daytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
