import { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'block' | 'circle';
};

export default function Skeleton({ variant = 'block', className = '', ...rest }: SkeletonProps) {
  const radius = variant === 'circle' ? '50%' : '8px';
  return <div className={`skeleton ${className}`} style={{ borderRadius: radius }} {...rest} />;
}


