// import { ClerkProvider } from '@clerk/nextjs'
// import { Toaster } from "sonner";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/ui/Header";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Finfo",
//   description: "One stop Finance Platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <head>
//           <link rel="icon" href="/logo-sm.png" sizes="any" />
//         </head>
//         <body className={`${inter.className}`}>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Toaster richColors />

//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }



import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
// import Page from "./loan/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
            
          
        </body>
      </html>
    </ClerkProvider>
  );
}