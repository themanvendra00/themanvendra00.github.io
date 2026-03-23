export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Manvendra Singh. Built with React and Vite.</p>
      </div>
    </footer>
  );
}
