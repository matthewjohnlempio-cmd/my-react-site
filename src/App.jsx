import './index.css';

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>My Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="site-main">
        <section className="hero">
          <h2>Welcome!</h2>
          <p>This is a starter layout for your React website.</p>
        </section>

        <section className="content">
          <h2>Section Title</h2>
          <p>Use this space for content, services, or anything else.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
