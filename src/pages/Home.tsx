import Button from '../components/base/Button';

const Home = () => {
  const showRequestModal = () => {};

  return (
    <main className="flex flex-col text-center justify-center gap-4 md:gap-8">
      <h1 className="text-3xl font-bold tracking-wider md:text-6xl">
        A better way <br />
        to enjoy every day.
      </h1>
      <p className="tracking-wide md:text-xl">
        Be the first to know when we launch.
      </p>
      <div>
        <Button onClick={showRequestModal}>Request an invite</Button>
      </div>
    </main>
  );
};

export default Home;
