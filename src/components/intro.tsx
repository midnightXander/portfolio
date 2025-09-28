import Image from 'next/image';
import myImage from '../../public/images/authors/avatar-8.jpg';

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between items-start gap-x-10 gap-y-4 py-24">
        <div className = "mt-2 flex-1 md:mt-0">
            <h1 className="title text-3xl font-bold underline decoration-border/75 decoration-2 underline-offset-8  no-underline">Hi, I&apos;m Alex</h1>
            <p className="text-lg my-4 text-muted-foreground">
                {/* I&apos;m a sof */}
                A passionate and innovative developer dedicated to crafting exceptional digital experiences.  I bring ideas to life through clean, efficient, and scalable code
            </p>
        </div>

        <div className="relative">
            <Image 
            className="rounded-lg flex-1"
            src={myImage}
            alt="Alex's Avatar"
            width={305}
            priority
            />

        </div>
    </section>

    // <section className="h-screen flex flex-col items-center justify-center py-32 px-4">
    //   {/* <nav className="w-full max-w-3xl flex justify-between text-sm font-medium text-gray-700 mb-6">
    //     <div className="flex gap-8">
    //       <a href="#" className="hover:underline">BIO</a>
    //       <a href="#" className="hover:underline">PORTFOLIO</a>
    //       <a href="#" className="hover:underline">PODCAST</a>
    //       <a href="#" className="hover:underline">BLOG</a>
    //     </div>
    //   </nav> */}
    //   <div className="w-full h-full max-w-3xl border border-[#cfc6bb] bg-white rounded-md flex flex-col md:flex-row items-center p-6 gap-6 shadow-sm">
    //     <div className="flex-1 flex flex-col justify-between ">
    //       <div>
    //       <h1 className="text-3xl font-serif font-bold mb-2 text-gray-900">Béatrice Marnier</h1>
    //       <p className="text-gray-700 mb-4">
    //         Je suis une critique culturelle et blogueuse dévouée située à Nantes.
    //       </p>
    //       <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
    //         <span>@sitevraimentsuper</span>
    //       </div>
    //       </div>
    //       <div className="flex gap-3 mt-2">
    //         <a href="#" aria-label="Instagram" className="hover:text-black">
    //           <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.8.312 4.02.54a7.07 7.07 0 0 0-2.56 1.62A7.07 7.07 0 0 0 .54 4.02C.312 4.8.128 5.77.07 7.052.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.282.242 2.252.47 3.032a7.07 7.07 0 0 0 1.62 2.56 7.07 7.07 0 0 0 2.56 1.62c.78.228 1.75.412 3.032.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.282-.058 2.252-.242 3.032-.47a7.07 7.07 0 0 0 2.56-1.62 7.07 7.07 0 0 0 1.62-2.56c.228-.78.412-1.75.47-3.032.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.282-.242-2.252-.47-3.032a7.07 7.07 0 0 0-1.62-2.56A7.07 7.07 0 0 0 19.98.54c-.78-.228-1.75-.412-3.032-.47C15.668.012 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
    //         </a>
    //         <a href="#" aria-label="Twitter" className="hover:text-black">
    //           <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98a4.48 4.48 0 0 0-.61 2.26c0 1.56.793 2.94 2 3.75a4.48 4.48 0 0 1-2.03-.56v.057c0 2.18 1.55 4 3.6 4.42a4.48 4.48 0 0 1-2.02.077c.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 0 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/></svg>
    //         </a>
    //         <a href="#" aria-label="LinkedIn" className="hover:text-black">
    //           <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="flex-shrink-0">
    //       <Image
    //         src={myImage}
    //         alt="Béatrice Marnier eating ice cream"
    //         width={170}
    //         height={170}
    //         className="rounded-lg object-cover"
    //         priority
    //       />
    //     </div>
    //   </div>
    // </section>
  )
} 