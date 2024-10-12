export const metadata = {
  title: 'AppScrip Task',
  description: 'Explore our wide range of high-quality products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}