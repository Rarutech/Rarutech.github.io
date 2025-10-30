import ImageWithSkeleton from '../components/ImageWithSkeleton';

const demoProjects = [
  { id: 1, title: 'Project One', img: '/assets/me.jpg', desc: 'Sample thumbnail using skeleton.' },
  { id: 2, title: 'Project Two', img: '/assets/me.jpg', desc: 'Sample thumbnail using skeleton.' },
  { id: 3, title: 'Project Three', img: '/assets/me.jpg', desc: 'Sample thumbnail using skeleton.' }
];

export default function Projects() {
  return (
    <section className="container">
      <h1>Projects</h1>
      <div className="grid-cards">
        {demoProjects.map((p) => (
          <article key={p.id} className="card">
            <ImageWithSkeleton className="card-image" src={p.img} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


