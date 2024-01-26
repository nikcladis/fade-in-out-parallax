import { ReactNode } from 'react';

interface WorkProps {
  children: ReactNode;
}

const Work = ({ children }: WorkProps) => {
  return (
    <section className="relative mt-[100dvh] flex flex-col justify-center p-4">
      {children}
    </section>
  );
};

export default Work;
