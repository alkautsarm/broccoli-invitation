import RegisterButton from '@/components/registration/RegisterButton';

const Home = () => {
  return (
    <main className="flex flex-col text-center justify-center gap-4 md:gap-8 bg-gradient-to-br from-emerald-200 to-gray-50">
      <h1 className="text-3xl font-bold tracking-wider md:text-6xl">
        A <span className="animate-pulse">better</span> way
        <br />
        to <span className="animate-pulse">enjoy</span> every day.
      </h1>
      <p className="tracking-wide md:text-xl">
        Be the first to know when we launch.
      </p>
      <div>
        <RegisterButton />
      </div>
    </main>
  );
};

export default Home;
