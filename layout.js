export const metadata = {
  title: 'AI Trading Tools',
  description: 'Slimme AI-tools voor traders',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}