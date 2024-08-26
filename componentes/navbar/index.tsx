import Link from "next/link"

export default function navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="/">Pagina Principal</Link>
                </li>
                <li>
                    <Link href="/link/pages">Link 01</Link>
                </li>
                <li>
                    <Link href="/link2/pages">Link 02</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}