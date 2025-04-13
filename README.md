# MemoTag - AI-Powered Dementia Care Platform

MemoTag is a revolutionary smart wearable device and app platform designed to transform dementia care through AI-powered monitoring and support for caregivers and patients.

## Features

- 🧠 **AI-Powered Monitoring**: Advanced algorithms track patient behavior patterns
- ⚡ **Real-time Alerts**: Instant notifications for caregivers
- 📊 **Data Analytics**: Detailed insights and trends for improved care
- 🤝 **Caregiver Support**: Comprehensive tools and resources

## Project Structure

```
MemoTag/
├── Frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── assets/       # Images and static assets
│   │   └── App.jsx       # Main application component
│   └── package.json      # Frontend dependencies
│
└── backend/              # Express.js backend server
    ├── src/
    │   └── index.js     # Server implementation
    └── package.json     # Backend dependencies
```

## Getting Started

### Frontend Setup

1. Install dependencies:
```bash
cd Frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create a `.env` file:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The backend will be available at `http://localhost:3001`

## Key Components

### Frontend

- **Hero Section**: Main landing section with call-to-action
- **Problem Statement**: Highlighting the challenges in dementia care
- **Solution Overview**: MemoTag's approach and features
- **Traction Metrics**: Real-time impact statistics
- **CTA Section**: Early access signup form

### Backend

- **Waitlist API**: Handles early access signups
- **In-memory Storage**: Manages waitlist entries
- **Input Validation**: Ensures data quality
- **CORS Support**: Enables frontend integration

## API Endpoints

### Waitlist Management


## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
  - Framer Motion
  - React Intersection Observer

- **Backend**:
  - Express.js
  - Express Validator
  - CORS
  - dotenv

## Development

- Use `npm run dev` in both frontend and backend directories for development
- Frontend hot-reloads for quick development
- Backend auto-restarts on file changes



