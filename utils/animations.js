// utils/animations.js 

export const addAnimation = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      entry.target.classList.add("animate");
    }
  });
}

export const removeAnimation = (entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && entry.intersectionRatio < 0.5) {
      entry.target.classList.remove("animate");
    }
  });
}