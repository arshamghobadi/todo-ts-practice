import Nav from '@/components/Nav';
import './globals.css';
import SideNav from '@/components/SideNav';
import ClientOnly from './ClientOnly';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen bg-slate-200">
        <ClientOnly>
          <Nav />
          <SideNav />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
