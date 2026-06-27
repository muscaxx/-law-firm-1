import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Şenoğlu Hukuk Bürosu | İstanbul",
  description:
    "Şenoğlu Hukuk Bürosu, 1998'den bu yana İstanbul'da ticaret, iş, ceza, aile ve gayrimenkul hukuku alanlarında uzman hukuki danışmanlık hizmeti sunmaktadır.",
  keywords: [
    "avukatlık bürosu",
    "istanbul avukat",
    "ticaret hukuku",
    "ceza hukuku",
    "iş hukuku",
    "aile hukuku",
    "gayrimenkul hukuku",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Şenoğlu Hukuk Bürosu | İstanbul",
    description:
      "25 yılı aşkın deneyimiyle İstanbul'da kurumsal ve bireysel müvekkillerine hukuki danışmanlık hizmeti sunmaktadır.",
    url: "https://www.senoglu-hukuk.com.tr",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
