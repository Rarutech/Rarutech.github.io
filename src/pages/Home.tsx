import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Home() {
  return (
    <section className="hero container">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>Hi, I'm Ralph Mamaril!</h1>
          <h2>Information Technology Student</h2>
          <p>
            I am eager to start new projects and learn new languages that could challenge my
            current mindset whilst continuously upskilling. Currently, I know Javascript, Java, CSS,
            Python, Kotlin and Lua.
          </p>
          <a className="button" href="/assets/Mamaril-Ralph Luis-Danao.pdf" target="_blank" rel="noreferrer">
            Download Portfolio
          </a>
          <div className="socials">
            <a aria-label="Email" href="mailto:ralph@example.com">M</a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer">in</a>
          </div>
        </div>
        <div className="hero-image">
          <ImageWithSkeleton src="/assets/me.jpg" alt="Ralph Mamaril" />
        </div>
      </div>
    </section>
  );
}


