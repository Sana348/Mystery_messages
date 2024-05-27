// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// import Navbar from '@/components/Navbar';

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
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//       </body>

//     </html>
//   );
// }

import Navbar from '@/components/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}