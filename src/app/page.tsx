import { Content, Card, Navbar } from "./components";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen pt-4 p-24 bg-[#100028]">
      <Navbar />
      <Content />
    </main>
  );
}
