import { ImgHTMLAttributes, useState } from 'react';

export default function ImageWithSkeleton({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`image-skeleton-wrapper ${className}`}>
      {!loaded && <div className="skeleton absolute-fill" />}
      <img
        {...props}
        onLoad={() => setLoaded(true)}
        className={`image ${loaded ? 'image--visible' : 'image--hidden'}`}
      />
    </div>
  );
}


