import React from 'react';

const SkeletonCard = () => {
  return (
    <div class="card is-loading">
      <div class="image"></div>
      <div class="content">
        <h2></h2>
      </div>
    </div>
  )
}

export { SkeletonCard };