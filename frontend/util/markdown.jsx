import { serialize } from 'next-mdx-remote/serialize'

export function renderMD(content) {
    return serialize(content)
}