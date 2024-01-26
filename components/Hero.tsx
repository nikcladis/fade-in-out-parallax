import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="h-[100dvh] flex flex-col fixed inset-0 justify-end">
      {children}
    </section>
  );
};

export default Hero;
