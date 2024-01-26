'use client';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

interface CardProps {
  name: string;
  index: number;
}

const Card = ({ name, index }: CardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress: scrollYProgressIn } = useScroll({
    target: cardRef,
    offset: ['0 5', '1 1'],
  });
  const { scrollYProgress: scrollYProgressOut } = useScroll({
    target: cardRef,
    offset: ['5 0', '1 0.9'],
  });
  const [scale, setScale] = useState(scrollYProgressIn);
  const { ref: divRef, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const scale = inView ? scrollYProgressIn : scrollYProgressOut;
    setScale(scale);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      style={{ scale }}
      className={`h-screen max-h-[95dvh] bg-gray-400 rounded-xl aspect-video z-[${index}] flex`}
    >
      <div
        ref={divRef}
        className="bg-gray-300 h-full w-full rounded-xl flex items-center justify-center"
      >
        {name}
      </div>
    </motion.article>
  );
};

export default Card;
