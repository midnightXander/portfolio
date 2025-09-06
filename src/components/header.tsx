import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header(){
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 " >
            <nav className="container px-4 mx-auto flex max-w-3xl items-center justify-between">
                <div>
                    <Link href="/" className="text-2xl font-bold">
                        Alex's Portfolio
                    </Link>
                </div>

                <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground" >
                    <li>
                        <Link href="/posts" className="transition-colors hover:text-foreground">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="transition-colors hover:text-foreground">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="transition-colors hover:text-foreground">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}