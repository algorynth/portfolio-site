'use client';
import { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation?: string;
}

export default function AnimateOnScroll({ children, className = '', animation = '' }: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`animate-on-scroll ${animation} ${className}`}>
            {children}
        </div>
    );
}
