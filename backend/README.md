# MemoTag Backend

This is the backend server for the MemoTag platform, built with Node.js, Express, and Supabase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variables file and fill in your Supabase credentials:
```bash
cp .env.example .env
```

3. Create the following table in your Supabase database:

### waitlist
```sql
create table waitlist (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  signup_date timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Health Check
- GET `/api/health`
- Response: `{ status: 'ok' }`

### Join Waitlist
- POST `/api/waitlist`
- Body:
```json
{
  "email": "string"
}
```
- Success Response (201):
```json
{
  "message": "Successfully added to waitlist",
  "data": { ... }
}
```
- Error Response (400/500):
```json
{
  "error": "Error message",
  "details": "Detailed error message"
}
```

## Environment Variables

- `PORT`: Server port (default: 3001)
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key 