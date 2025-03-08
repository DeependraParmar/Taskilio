import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Taskilio: B2B, SaSS Task and Project Management Platform",
    template: `%s`,
  },
  description:
    "B2B, SaSS Task and Project Management Platform",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/logo.svg" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
