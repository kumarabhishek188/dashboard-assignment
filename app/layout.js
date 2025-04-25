import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = { title: 'Dashboard', description: 'Next.js + Tailwind Dashboard' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}