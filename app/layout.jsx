import { Open_Sans } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/MainNav';
import PageTransition from '@/components/PageTransition';
import RectangleTransition from '@/components/RectangleTransition';
import Gradient from '@/components/Gradient';
import Header from '@/components/Header';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'My Portfolio | Sedy',
  description: 'Fullstack Developer | UI/UX Designer',
  icons: {
    icon: '/favicon.ico?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            {/* main nav */}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-surface-gray">
              <MainNav />
            </div>
            {/* main content */}
            <div className="w-full max-w-[1130px] px-4 mx-auto">
              <Header />
              {children}
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
