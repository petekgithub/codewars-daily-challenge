function bouncingBall(h,  bounce,  window) {
  const final = h > 0 && (bounce > 0 && bounce < 1) && window < h;
  if (final) {
      return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
  } else {
      return -1;
  }
}