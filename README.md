# Dashboard

A modern, responsive Next.js dashboard for managing franchise onboarding, tracking progress, and providing AI-powered support.

## Features

- **Account Progress**  
  Donut chart visualizing overall setup completion (85%), with detailed “Steps Completed” and “Steps Remaining” lists.
- **Pending Questions**  
  Live list of user inquiries with avatars, usernames, timestamps, and question text.
- **Franchisee Overview**  
  - **Total Franchisees Onboard**: Current count, growth percentage, avatar stack, and stage breakdown.  
  - **Key Insights & Feedback**: Sales growth metric and custom feedback notes.
- **Financial Wellbeing**  
  Targets vs. current values for franchisee financial metrics, with growth indicator.
- **Prospect Leads**  
  List of new leads with avatar, name, and current inquiry stage.
- **AI Chat Assistant**  
  Embedded chat widget for submitting questions to an AI backend, with a welcome header and send button.

## Tech Stack

- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [react-icons](https://react-icons.github.io/react-icons/)  
- Next/Image for optimized image handling

## Getting Started

### Prerequisites

- Node.js ≥ 14.x  
- npm or yarn

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/franchise-dashboard.git
   cd franchise-dashboard
   ```
2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start development server  
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser to [http://localhost:3000](http://localhost:3000)

## Deployment

This app is designed for seamless deployment on Vercel:

1. Push your code to GitHub (or GitLab/Bitbucket).  
2. Sign in at [vercel.com](https://vercel.com) and import your project.  
3. Vercel will auto-detect Next.js—just click **Deploy**.  
4. Your dashboard will be live at [https://dashboar-assignment.app](https://dashboard-assignment-weld.vercel.app/).

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
# follow prompts, then:
vercel --prod
```

## Folder Structure

```text
/
├── components/        # Reusable UI components (e.g., DashboardContent)
├── pages/             # Next.js pages (index.js → the main dashboard)
├── public/            # Static assets (avatars, icons, etc.)
├── styles/            # Global CSS / Tailwind config
├── .gitignore
├── README.md
└── package.json
```

## Customization

- **Colors & Spacing**: Tweak `tailwind.config.js` to adjust theme colors, breakpoints, or spacing scale.  
- **Data & API**: Replace hard-coded data in `pages/index.js` (or `Page.jsx`) with live API calls.  
- **Environment Variables**: Add any backend URLs or API keys in a `.env.local` file.  
- **AI Chat**: Wire up the input field’s submit handler to your AI or chat-bot service.

## Contributing

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature/xyz`).  
3. Commit your changes (`git commit -m "Add XYZ feature"`).  
4. Push to your branch (`git push origin feature/xyz`).  
5. Open a Pull Request and describe your changes.

Please follow our code style and commit message conventions.
9
