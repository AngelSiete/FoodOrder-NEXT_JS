import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">All Meals</Link></p>
      <p><Link href="/meals/share">Sharing Meals</Link></p>
      <p><Link href="/community">Community</Link></p>
    </main>
  );
}
