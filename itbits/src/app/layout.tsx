import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Design & Development Services | IT BITS",
  description:
    "Professional website design and development services by IT BITS. We create SEO-friendly, mobile-responsive, and high-performance websites for businesses.",
  keywords: [
    "website design",
    "website development",
    "SEO friendly websites",
    "mobile responsive websites",
    "web design",
    "IT BITS",
  ],
  openGraph: {
    type: "website",
    url: "https://www.itbits.com/",
    title: "Website Design & Development Services | IT BITS",
    description:
      "Professional website design and development services by IT BITS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT BITS Website Design and Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbits",
    title: "Website Design & Development Services | IT BITS",
    description:
      "Professional website design and development services by IT BITS.",
    images: ["/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IT BITS",
              url: "https://www.itbits.com",
              logo: "https://www.itbits.com/logo.png",
              sameAs: [
                "https://www.facebook.com/it-bits",
                "https://twitter.com/it-bits",
                "https://www.linkedin.com/company/it-bits",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
