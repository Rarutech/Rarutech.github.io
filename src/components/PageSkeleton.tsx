import Skeleton from './Skeleton';

export default function PageSkeleton() {
  return (
    <div className="page-skeleton container">
      <div className="hero-grid">
        <div className="hero-text">
          <Skeleton style={{ height: 52, width: '70%', marginBottom: 12 }} />
          <Skeleton style={{ height: 28, width: '55%', marginBottom: 18 }} />
          <Skeleton style={{ height: 14, width: '100%', marginBottom: 8 }} />
          <Skeleton style={{ height: 14, width: '95%', marginBottom: 8 }} />
          <Skeleton style={{ height: 14, width: '85%', marginBottom: 20 }} />
          <Skeleton style={{ height: 44, width: 220 }} />
        </div>
        <div className="hero-image">
          <Skeleton style={{ width: 320, height: 320, borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
}


