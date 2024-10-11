export const metadata = {
  title: 'Discover Our Products - Your Store Name',
  description: 'Explore our wide range of high-quality products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}