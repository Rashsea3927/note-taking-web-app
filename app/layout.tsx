import type { Metadata } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-neutral-100 dark:bg-neutral-800 lg:flex lg:bg-neutral-0 lg:dark:bg-neutral-950'>
        <Header />
        <main className='min-h-[1000px] bg-neutral-0 dark:bg-neutral-950 lg:pl-[272px]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
