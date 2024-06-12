import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { Frontmatter } from '../../blog/[postId]/page'
import { HTMLAttributes, ReactNode } from 'react'
import NewsLetter from '../../Components/NewsLetter'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import { Node, Element } from 'hast'

// rehype-pretty-code options
const options: Options = {
  theme: 'one-dark-pro',
  onVisitLine(node: Element) {
    // Add a leading space to empty lines
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(element: Element, id: string) {
    // Add a custom class to highlighted lines
    element.properties.className = ['highlighted']
  },
  onVisitHighlightedChars(element: Element, id: string) {
    // Add a custom class to highlighted characters
    element.properties.className = ['Char--Highlighted']
  }
}

const rootDirectory = path.join(process.cwd(), 'content')

// MDX Componet Classes
interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}
interface H2Props extends HTMLAttributes<HTMLHeadingElement> {}
interface H3Props extends HTMLAttributes<HTMLHeadingElement> {}
interface H4Props extends HTMLAttributes<HTMLHeadingElement> {}
interface PProps extends HTMLAttributes<HTMLParagraphElement> {}
interface UlProps extends HTMLAttributes<HTMLUListElement> {}
interface OlProps extends HTMLAttributes<HTMLOListElement> {}
interface LiProps extends HTMLAttributes<HTMLLIElement> {}
interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {}
interface CodeProps extends HTMLAttributes<HTMLPreElement> {}

// MDX Component Styles
const components = {
  h1: (props: H1Props) => (
    <h1
      {...props}
      className={`mb-4 text-4xl font-bold ${props.className || ''}`}
    >
      {props.children}
    </h1>
  ),
  h2: (props: H2Props) => (
    <h2
      {...props}
      className={`mb-3 text-3xl font-bold ${props.className || ''} `}
    >
      {props.children}
    </h2>
  ),
  h3: (props: H3Props) => (
    <h3
      {...props}
      className={`mb-2 text-2xl font-semibold ${props.className || ''} `}
    >
      {props.children}
    </h3>
  ),
  h4: (props: H4Props) => (
    <h4
      {...props}
      className={`mb-2 text-xl font-semibold ${props.className || ''} `}
    >
      {props.children}
    </h4>
  ),
  p: (props: PProps) => (
    <p {...props} className={`mb-4 ${props.className || ''} `}>
      {props.children}
    </p>
  ),
  ul: (props: UlProps) => (
    <ul {...props} className={`mb-4 list-disc pl-6 ${props.className || ''} `}>
      {props.children}
    </ul>
  ),
  ol: (props: OlProps) => (
    <ol
      {...props}
      className={`mb-4 list-decimal pl-6 ${props.className || ''} `}
    >
      {props.children}
    </ol>
  ),
  li: (props: LiProps) => (
    <li {...props} className={`mb-2 ${props.className || ''} `}>
      {props.children}
    </li>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      {...props}
      className={`mb-4 border-l-4 border-gray-300 pl-4 ${
        props.className || ''
      } dark:border-gray-600 `}
    >
      {props.children}
    </blockquote>
  ),
  code: (props: CodeProps) => (
    <pre {...props} className={`mb-4 rounded p-4 ${props.className || ''} `}>
      <code>{props.children}</code>
    </pre>
  ),
  NewsLetter: NewsLetter
}

export async function getPostByPostId(postId: string) {
  const realPost = postId.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realPost}.mdx`)

  console.log(`Looking for file at: ${filePath}`) // Debugging statement

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { content, frontmatter } = await compileMDX<{
    Title: ReactNode
    Author: ReactNode
    content: string
    frontmatter: Frontmatter
  }>({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, options]]
      }
    }
  })

  return { content, frontmatter, postId }
}

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)

  let posts = []
  for (const file of files) {
    const post = await getPostByPostId(file)
    posts.push(post)
  }

  return posts
}
