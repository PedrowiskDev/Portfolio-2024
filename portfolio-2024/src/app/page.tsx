import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/pattern.png')] bg-cover bg-fixed">
      <div>
        <p className="text-5xl font-bold font-mono text-white">
          Pedro Henrique Caetano Soares
        </p>
      </div>
    </main>
  );
}
