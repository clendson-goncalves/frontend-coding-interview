# Clever's Frontend Coding Interview by Clendson Gonçalves

A simple, responsive photo gallery web application built with Next.js, TypeScript, and the Pexels API.

## Features

- Mobile-first approach using Tailwind CSS and responsive design
- Simple authentication system with state stored in `localStorage`
- Like/unlike photos with state stored in `localStorage`
- Photo gallery with images from Pexels API
- Photographer information and portfolio links
- Dynamic color squares using photo average colors
- Use "SIGN OUT" to return to the sign-in page (INCLUDED JUST FOR AUTENTICATION TESTING)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: Pexels API
- **Storage**: localStorage (for authentication and likes)
- **ESLint**: for code quality

## Environment Variables

No environment variables required - API key is included in the code for demo purposes.

For production deployment, consider moving the API key to environment variables:

```env
PEXELS_API_KEY=your_api_key_here
```

## Future Enhancements

- [ ] Search functionality for different photo queries
- [ ] Photo categories (nature, city, people, etc.)
- [ ] Full-size photo modal/lightbox
- [ ] User profiles and photo collections
- [ ] Photo download functionality
- [ ] Infinite scroll or pagination
- [ ] Real authentication system
- [ ] Photo sharing capabilities

## Installation

1. Clone the repository:
```bash
git clone https://github.com/clendson-goncalves/frontend-coding-interview.git
cd frontend-coding-interview
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.