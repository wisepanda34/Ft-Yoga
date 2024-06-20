// 'composable/useAnimation.js' 
import { onMounted, onUnmounted, ref } from 'vue';

export function useAnimationObserver(addAnimation, removeAnimation) {
  const animationRef = ref(null);
  let addAnimationObserver = null;
  let removeAnimationObserver = null;

  onMounted(() => {
    addAnimationObserver = new IntersectionObserver(addAnimation, { threshold: 0.5 });
    removeAnimationObserver = new IntersectionObserver(removeAnimation, { threshold: 0 });

    if (animationRef.value) {
      addAnimationObserver.observe(animationRef.value);
      removeAnimationObserver.observe(animationRef.value);
    }
  });

  onUnmounted(() => {
    if (addAnimationObserver && animationRef.value) {
      addAnimationObserver.unobserve(animationRef.value);
    }
    if (removeAnimationObserver && animationRef.value) {
      removeAnimationObserver.unobserve(animationRef.value);
    }
  });

  return { animationRef };
}
