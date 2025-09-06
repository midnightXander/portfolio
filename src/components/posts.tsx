import Link from "next/link";

import { PostMetaData } from "@/lib/posts";
import { formatDate } from "@/lib/utils";


export default function Posts({posts} : {posts: PostMetaData[]}){
    return (
        <section className="pb-8">
            {/* <div className="container px-4 mx-auto max-w-3xl">
                <div className="grid grid-cols-1 gap-12">
                    {posts.map((post) => (
                        <article key={post.slug} className="border-b border-muted pb-12">
                            <h2 className="text-2xl font-bold">
                                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <time dateTime={post.publishedAt} className="block text-sm text-muted-foreground">
                                {formatDate(post.publishedAt ?? '')}
                            </time>
                        </article>
                    ))}
                </div>
            </div> */}

            <ul className="flex flex-col gap-8">
                {posts.map((post) => (
                        <li key={post.slug} className="pb-6">
                            
                                <Link
                                 href={`/posts/${post.slug}`}
                                 className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex"
                                 >
                                 <div className="max-w-lg">
                                    <p className="text-lg font-semibold">{post.title}</p>
                                    <p className="mt-1 line-clamp-2 text-sm  font-light text-muted-foreground" >
                                        {post.summary}
                                    </p>
                                 </div>
                                 {post.publishedAt && (
                                    <p className="mt-1 text-sm font-light">
                                        {formatDate(post.publishedAt ?? '')}
                                    </p>
                                 )}
                                 </Link>
                        </li>
                    ))}
            </ul>
        </section>

        
    )}