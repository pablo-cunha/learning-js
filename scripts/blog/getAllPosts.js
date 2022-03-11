import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export function getAllPosts() {
    // fs lendo o diretório
    const allPostsFileNames = fs.readdirSync('./_posts')

    // map para transformar cada file em conteúdo HTML (libs: grey-matter, remark, remark-html)
    const posts = allPostsFileNames.map((filename) => {
        const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8')
        const { content, data: metadata } = matter(fileContent)
        const htmlContent =  remark()
                .use(remarkHtml)
                .processSync(content)
                .toString()

        // retorna objeto com metadata e conteúdo dos arquivos
        return {
            metadata: {
                ...metadata, 
                slug: filename.replace('.md', ''),
            },
            content: htmlContent
        }
    })

    return posts
}