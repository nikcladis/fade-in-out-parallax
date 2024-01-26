import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero>
        <h1>
          <span className="text-8xl font-semibold">Hello,</span>{' '}
          <span className="block text-6xl font-semibold">I am Nikolaos</span>
        </h1>
        <p className="text-2xl mt-4">A Frontend Developer based in Greece</p>
      </Hero>
      <Work>
        <Card name={'Project 1'} index={1} />
        <Card name={'Project 2'} index={2} />
        <Card name={'Project 3'} index={3} />
      </Work>
      <section className="w-full h-[100dvh]"></section>
    </main>
  );
}
