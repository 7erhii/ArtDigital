import React from "react";
import { Inter } from "next/font/google";
import { useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function DesignPage() {
  const messages = useMessages();
  
  return (
    <div className={inter.className}>
      <h1>{messages['design.title'] || 'Design Page'}</h1>
      <p>{messages['design.description'] || 'This is the design page.'}</p>
    </div>
  );
}