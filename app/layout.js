import Header from '@/components/header';
import HeaderBG from '@/components/header-bg.js';
import './globals.css';

export const metadata = {
  title: 'FoodOrder-NEXT_JS',
  description: 'A NEXT project with elegant solutions for a full stack food ordering web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderBG />
        <Header/>
        {children}
      </body>
    </html>
  );
}
