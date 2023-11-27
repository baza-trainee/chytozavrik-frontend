
export default function Layout({ children, params: {childId}}: { children: React.ReactNode, params: {
    childId: string
  } }) {

  return (
    <html lang="uk">
    <body>
      {children}
    </body>
    </html>
  );
}