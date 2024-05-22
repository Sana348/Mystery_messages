// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import AuthProvider from '../context/AuthProvider';
// import { Toaster } from '@/components/ui/toaster';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'True Feedback',
//   description: 'Real feedback from real people.',
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// export default async function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" >
//       <AuthProvider>
//         <body className={inter.className}>
//           {children}
//           <Toaster />
//         </body>
//       </AuthProvider>
//     </html>
//   );
// }
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import AuthProvider from '../context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

// Explicitly define the type for the dynamic import
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster), { ssr: false });

export const metadata: Metadata = {
  title: 'True Feedback',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
