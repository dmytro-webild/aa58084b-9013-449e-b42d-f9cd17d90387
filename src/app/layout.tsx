import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Mainkai Café | Frankfurt Riverside Bistro & Breakfast',
  description: 'Discover Mainkai Café, a cozy riverside bistro in Frankfurt. Fresh breakfast, specialty coffee, and desserts by the Main River. Book your table today!',
  openGraph: {
    "title": "Mainkai Café | Frankfurt Riverside Bistro & Breakfast",
    "description": "Enjoy fresh coffee and breakfast with a view in Frankfurt.",
    "siteName": "Mainkai Café"
  },
};

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
