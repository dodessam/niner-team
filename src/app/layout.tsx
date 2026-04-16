import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niner Team",
  description: "IGCSE Combined Science Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="fixed bottom-2 right-2 text-xs text-textSecondary opacity-50">
          v0.1
        </div>
      </body>
    </html>
  );
}
