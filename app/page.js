import Link from "next/link";
import Header from "@/components/header";
export default function Home() {
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <h2><Link href="/about">About Us</Link></h2>
    </main>
  );
}
