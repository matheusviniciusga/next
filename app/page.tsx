import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul>
          <li>
            <Link href="/"></Link>
          </li>
          <li>
            <Link href="/link/pages"></Link>
          </li>
          <li>
            <Link href="/link2/pages"></Link>
          </li>
        </ul>
      </nav>
      <div className="text-lg">
        Oi Matheus
      </div>
    </main>
  );
}
