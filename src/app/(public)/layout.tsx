// src/app/(public)/layout.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevents the CSS from being double-imported


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer/>
    </>
    
  );
}
