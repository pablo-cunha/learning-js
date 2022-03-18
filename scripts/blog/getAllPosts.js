import fs from 'fs'
import matter from 'gray-matter'

export function getAllPosts() {
    // fs lendo o diretório
    const allPostsFileNames = fs.readdirSync('./_posts')

    // map para separar metadata e conteudo de cada arquivo (lib: grey-matter)
    const posts = allPostsFileNames.map((filename) => {
        const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8')
        const { content, data: metadata } = matter(fileContent)
        const markDownContent =  content
        console.log(markDownContent)
        // retorna objeto com metadata e conteúdo dos arquivos
        return {
            metadata: {
                ...metadata, 
                slug: filename.replace('.md', ''),
            },
            content: markDownContent
        }
    })

    return posts
}