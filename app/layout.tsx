import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#f8f9fa", padding: "20px" }}>
          <h1>Property Management App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ background: "#f8f9fa", padding: "10px", marginTop: "20px" }}>
          <p>© 2025 Property Management Inc.</p>
        </footer>
      </body>
    </html>
  );
}
