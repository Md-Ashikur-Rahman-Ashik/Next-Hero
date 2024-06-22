const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

export default async function Home() {
  const currentTime = await getTime();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card card-compact container rounded-xl mx-auto max-w-fit">
        <h2 className="font-bold text-6xl">As Salamu Alaikum</h2>
        <h3 className="text-3xl text-center text-cyan-600 mt-12">
          Current Time : {currentTime}
        </h3>
      </div>
    </main>
  );
}
