import Link from "next/link"
import NavBar from './nav-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        {children}</body>
    </html>
  )
}
