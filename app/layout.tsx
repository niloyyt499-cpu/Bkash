// app/layout.tsx
export const metadata = {
  title: 'Bkash App',
  description: 'Bkash clone project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
