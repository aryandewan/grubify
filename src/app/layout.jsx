import "./globals.css";
import React from "react";

export const metadata = {
  title: "Grubify",
  description: "Best Chef in the World, TRY IT!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>
            {children}
          </body>
      </html>
  );
}


