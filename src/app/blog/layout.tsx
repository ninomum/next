export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <header>
        <h1>Blog Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 My Blog</p>
      </footer>
    </section>
  )
}