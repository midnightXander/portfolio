import Image from 'next/image';
import myImage from '../../public/images/authors/avatar-1.png';

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between items-start gap-x-10 gap-y-4 py-24">
        <div className = "mt-2 flex-1 md:mt-0">
            <h1 className="title text-3xl font-bold underline decoration-border/75 decoration-2 underline-offset-8  no-underline">Hi, I'm Alex</h1>
            <p className="text-lg text-muted-foreground">
                I'm a software engineer with a passion for building web applications.
            </p>
        </div>

        <div className="relative">
            <Image 
            className="rounded-lg flex-1 grayscale "
            src={myImage}
            alt="Alex's Avatar"
            width={175}
            height={175}
            priority
            />

        </div>
    </section>
  )
} 