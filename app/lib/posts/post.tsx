import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { Frontmatter } from '../../blog/[postId]/page'
import { ReactNode } from 'react'

const rootDirectory = path.join(process.cwd(), 'content')

export async function getPostByPostId(postId: string) {
  const realPost = postId.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realPost}.mdx`)

  console.log(`Looking for file at: ${filePath}`) // Debugging statement

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { content, frontmatter } = await compileMDX<{
    title: ReactNode
    Author: ReactNode
    content: string
    frontmatter: Frontmatter
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true
    }
  })

  return { content, frontmatter }
}
