import "../styles/global.css";
import { orbit } from "../styles/font";
import { Head } from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={orbit.className}>
      <Head />
      <body>
        {children}
        <footer>CopyrightⓒPowered by HaekyungSeong All Right Reserved</footer>
      </body>
    </html>
  );
}
