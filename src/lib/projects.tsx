import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(),'src', 'content','projects')

export type Project = {
    metadata : ProjectMetaData
    content : string
}

export type ProjectMetaData = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string,
    tags? : string[]
}

export async function getProjectBySlug(slug: string) : Promise<Project | null> {
    try{
        const filepath = path.join(projectsDirectory, `${slug}.mdx`)
        // console.log('Reading file:', filepath)
        const fileContent = await fs.readFileSync(filepath,{ encoding : 'utf-8'})
        const { data, content } = matter(fileContent)
        // console.log('Parsed front matter:', data)
        return { metadata : { ...data, slug }, content }
    }catch(error){
        // console.error('Error reading Project:', error)
        return null
    }
}

export async function getAllProjects(limit?: number) : Promise<ProjectMetaData[]>{
    
        const files = await fs.readdirSync(projectsDirectory)
        const projects = files
        .map(file => getProjectMetaData(file))
        .sort((a,b) => {
            if(new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) return 1
            if(new Date(a.publishedAt ?? '') > new Date(b.publishedAt ?? '')) return -1
            return 0
        })

        if(limit){
            return projects.slice(0, limit)
        }
        
        // const projects = await Promise.all(files.map(async (file) => {
        //     const slug = file.replace(/\.mdx$/, '')
        //     const Project = await getProjectBySlug(slug)
        //     return Project?.metadata
        // }))
        // return projects.filter(Boolean).slice(0, limit)
        return projects
}

export function getProjectMetaData(filepath: string): ProjectMetaData {
    const slug = filepath.replace(/\.mdx$/, '')
    const fileContent = fs.readFileSync(path.join(projectsDirectory, filepath), { encoding: 'utf-8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
}
