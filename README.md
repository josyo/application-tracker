# Application Tracker

A Kanban-style job application tracker that helps you stay on top of your job search. Add applications, drag them through stages, and keep everything organised in one place.

**[Live Demo →](https://application-tracker-eight-chi.vercel.app)**

---

## Features

- **Kanban board** — visualise your pipeline across stages: Applied, Interview, Offer, and more
- **Drag & drop** — move cards between columns with smooth, intuitive interactions
- **Persistent storage** — applications saved to MongoDB so nothing gets lost
- **Fully responsive** — horizontal scroll on mobile, expanded layout on desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Database | MongoDB |
| Drag & Drop | DnD Kit |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB connection string (local or [Atlas](https://www.mongodb.com/atlas))

### Installation

```bash
git clone https://github.com/josyo/application-tracker.git
cd application-tracker
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/          # Next.js App Router pages and API routes
components/   # Reusable UI components
lib/          # Utility functions and database helpers
scripts/      # Seed scripts and tooling
public/       # Static assets
```

## Roadmap

- [ ] Search and filter applications
- [ ] User authentication
- [ ] Analytics dashboard (response rates, stage conversion)
- [ ] Notes and attachments per application
- [ ] Email reminders for follow-ups

## License

MIT
