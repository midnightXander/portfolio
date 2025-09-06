import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'src', 'content','posts')

export type Post = {
    metadata : PostMetaData
    content : string
}

export type PostMetaData = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
}

export async function getPostBySlug(slug: string) : Promise<Post | null> {
    try{
        const filepath = path.join(postsDirectory, `${slug}.mdx`)
        console.log('Reading file:', filepath)
        const fileContent = await fs.readFileSync(filepath,{ encoding : 'utf-8'})
        const { data, content } = matter(fileContent)
        console.log('Parsed front matter:', data)
        return { metadata : { ...data, slug }, content }
    }catch(error){
        console.error('Error reading post:', error)
        return null
    }
}

export async function getAllPosts(limit?: number) : Promise<PostMetaData[]>{
    
        const files = await fs.readdirSync(postsDirectory)
        const posts = files
        .map(file => getPostMetaData(file))
        .sort((a,b) => {
            if(new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) return 1
            if(new Date(a.publishedAt ?? '') > new Date(b.publishedAt ?? '')) return -1
            return 0
        })

        if(limit){
            return posts.slice(0, limit)
        }
        
        // const posts = await Promise.all(files.map(async (file) => {
        //     const slug = file.replace(/\.mdx$/, '')
        //     const post = await getPostBySlug(slug)
        //     return post?.metadata
        // }))
        // return posts.filter(Boolean).slice(0, limit)
        return posts
}

export function getPostMetaData(filepath: string): PostMetaData {
    const slug = filepath.replace(/\.mdx$/, '')
    const fileContent = fs.readFileSync(path.join(postsDirectory, filepath), { encoding: 'utf-8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
}
