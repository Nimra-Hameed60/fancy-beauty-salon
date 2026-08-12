import "./globals.css";

export const metadata = {
  title: "Fancy Beauty Salon | Beauty • Care • Confidence",
  description:
    "Fancy Beauty Salon — professional beauty, bridal and salon services in Jaranwala, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}