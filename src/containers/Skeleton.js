import React from 'react';
import { SkeletonCard } from '../components/SkeletonCard';
import '../styles/Skeleton.scss';

const Skeleton = () => {
  return (
    <div className='skeleton-container'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export { Skeleton };