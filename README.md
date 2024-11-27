# Modern Next.js Website

A modern, responsive website built with Next.js 13+, TypeScript, Tailwind CSS, and Supabase.

## Features

- Modern UI with responsive design
- Blog system with Supabase integration
- SEO optimized
- TypeScript support
- Tailwind CSS for styling

## Prerequisites

- Node.js 16.8 or later
- Supabase account and project

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials
4. Run the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

1. Create a new Supabase project
2. Create the following table:

\`\`\`sql
create table blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author text,
  slug text unique
);
\`\`\`

## Project Structure

- `/src/app` - Next.js 13+ app directory
- `/src/components` - React components
- `/src/lib` - Utility functions and configurations
- `/src/types` - TypeScript type definitions

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)

## License

This project is licensed under the MIT License.