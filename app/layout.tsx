import "../styles/global.css";
import { poorS } from "../styles/font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={poorS.className}>
      <body>{children}</body>
    </html>
  );
}
