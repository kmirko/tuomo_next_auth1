export default function RootLayout({ children }) {
  console.log('Server 2-RootLayout Page');
  return (
    <html>
      <head>
        <title>TUMOTO</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
