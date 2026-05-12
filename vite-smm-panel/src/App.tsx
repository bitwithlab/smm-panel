import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import HomePage from './pages/marketing/HomePage';
import FeaturesPage from './pages/marketing/FeaturesPage';
import PricingPage from './pages/marketing/PricingPage';
import AboutPage from './pages/marketing/AboutPage';
import ContactPage from './pages/marketing/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OverviewPage from './pages/app/OverviewPage';
import TargetsPage from './pages/app/TargetsPage';
import QueuePage from './pages/app/QueuePage';
import CommentsPage from './pages/app/CommentsPage';
import AnalyticsPage from './pages/app/AnalyticsPage';
import ActivityPage from './pages/app/ActivityPage';
import BillingPage from './pages/app/BillingPage';
import SettingsPage from './pages/app/SettingsPage';
import AgencyClientsPage from './pages/agency/ClientsPage';
import AgencyWhitelabelPage from './pages/agency/WhitelabelPage';
import AgencyReportsPage from './pages/agency/ReportsPage';
import AdminOpsPage from './pages/admin/OpsPage';
import AdminUsersPage from './pages/admin/UsersPage';
import AdminCompliancePage from './pages/admin/CompliancePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/app-overview" element={<OverviewPage />} />
      <Route path="/app-targets" element={<TargetsPage />} />
      <Route path="/app-queue" element={<QueuePage />} />
      <Route path="/app-comments" element={<CommentsPage />} />
      <Route path="/app-analytics" element={<AnalyticsPage />} />
      <Route path="/app-activity" element={<ActivityPage />} />
      <Route path="/app-billing" element={<BillingPage />} />
      <Route path="/app-settings" element={<SettingsPage />} />

      <Route path="/agency-clients" element={<AgencyClientsPage />} />
      <Route path="/agency-whitelabel" element={<AgencyWhitelabelPage />} />
      <Route path="/agency-reports" element={<AgencyReportsPage />} />

      <Route path="/admin-ops" element={<AdminOpsPage />} />
      <Route path="/admin-users" element={<AdminUsersPage />} />
      <Route path="/admin-compliance" element={<AdminCompliancePage />} />
    </Routes>
  );
}
