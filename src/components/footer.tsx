import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { JSX,SVGProps } from 'react'

const navigation = [
    {
        name : 'Facebook',
        href : "#",
        icon : (props : JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
        )
    },
    {
        name : 'X',
        href : "#",
        icon : (props : JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
        )
    },
    {
        name : 'LinkedIn',
        href : "#",
        icon : (props : JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
        )
    },

]


export default function Footer(){
    return (
        <footer className="py-8">
            {/* <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-muted-foreground mb-4 md:mb-0">&copy; {new Date().getFullYear()} Alex's Portfolio. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                            {item.icon({ className: "h-5 w-5" })}
                        </Link>
                    ))}
                </div>
            </div> */}
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {navigation.map((item) => (
                        <a key={item.name} rel="noreferrer noopener" href={item.href} className="text-muted-foreground hover:text-foreground">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden = 'true' className="h-5 w-5"/>
                        </a>
                    ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-8">
                        <p className="text-sm text-muted-foreground mb-4 md:mb-0">&copy; {new Date().getFullYear()} Alex&apos;s Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}