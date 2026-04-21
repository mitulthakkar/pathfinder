import './globals.css';
import { AuthProvider } from '@/lib/auth';

export const metadata = {
  title: 'Pathfinder — 15-Week Career & Life Design',
  description: 'A guided program for teenagers to explore careers, understand business, and design their future.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
