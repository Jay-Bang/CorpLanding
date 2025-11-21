import { useEffect, useState, useCallback } from 'react';

export function useCountUp(end: number, duration: number = 2000, start: number = 0) {
    const [count, setCount] = useState(start);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        const startTime = Date.now();
        const range = end - start;

        const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentCount = Math.floor(start + range * easeProgress);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setIsAnimating(false);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isAnimating, end, start, duration]);

    return { count, startAnimation, isAnimating };
}
