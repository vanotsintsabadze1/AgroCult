import Card from "../../../components/Login/Card";

export default function page() {
  return (
    <main className="w-full h-screen p-[5rem_2rem] flex items-center justify-center">
      <canvas className="absolute w-full h-full brightness-50 top-0 left-0 bg-gray-100"></canvas>
      <Card />
    </main>
  );
}
