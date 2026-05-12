# smm-panel

## Best Prompt (User Website Only, No Admin Panel)

Copy-paste this prompt to generate your frontend from `engage-flow-backend`:

```text
You are a senior React frontend engineer.

Project goal:
- Build ONLY the user-facing SMM panel website.
- Keep visual structure close to the old `vite-smm-panel` user webview.
- Use modern stack without changing core UX flow.

Mandatory tech stack:
1) CSS library: Tailwind CSS
2) Component library: shadcn/ui
3) Routing: react-router-dom
4) API calls: axios
5) Toast/message: react-hot-toast

Backend source of truth:
- Use API contracts and route behavior from `engage-flow-backend`.
- Generate a typed API layer from backend endpoints first.
- Handle auth tokens with axios interceptors, use refresh-token endpoint flow (if available), and protect user routes.

Scope (user side only):
- Public pages: Home, Services, Pricing (if available), Login, Register
- User pages: Dashboard, New Order, Order History, Add Funds, Tickets/Support, Profile
- Shared: Navbar, Footer, Sidebar (if needed), loading states, empty states, error states
- No admin routes/components/models.

Implementation requirements:
- Create clean folder structure:
  src/
    app/
    components/
    features/
    pages/
    routes/
    services/api/
    hooks/
    lib/
    types/
- Configure axios instance with baseURL, interceptors, auth header injection, error normalization.
- Use react-router-dom with protected routes for logged-in user pages.
- Use react-hot-toast for API success/error feedback.
- Use shadcn/ui + Tailwind for all UI components.
- Keep code modular and reusable; avoid duplicated API logic.

Deliverables:
1) Full route map
2) API integration layer (grouped by feature)
3) Page-wise component breakdown
4) Final production-ready user frontend code (no admin code)
5) `.env.example` with API base URL key

Output format:
- First show architecture + route tree + API mapping table
- Then generate complete code files in logical order
- Mention any assumptions about missing backend endpoints
```

## API Help Checklist (from `engage-flow-backend`)

Before code generation, collect these from backend and map to frontend services:

- Auth: login, register, logout, current user, token refresh
- Services: category list, service list, service details
- Orders: create order, order list/history, single order status
- Wallet/Funds: payment methods, add funds request, transaction history
- Tickets: create ticket, list tickets, ticket replies
- Profile: user info, update profile, password change

If endpoint names differ, keep backend names exactly and only adapt on frontend service wrappers.
