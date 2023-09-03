import "../../styles/global.css";
import { gamja } from "../../styles/font.ts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${gamja.className}`}>{children}</body>
    </html>
  );
}
