export default async function handler(req, res) {
    if (!(req.method === 'POST')) {
        return res.status(401).json({ message: "Don't access" })
    }

    if (req.query.secret !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    if (req.body.event === 'entry.publish') {
        try {
            await res.revalidate('/')
            await res.revalidate('/articles')
            return res.json({ revalidated: true })
        } catch (err) {
            return res.status(500).send('Error revalidating')
        }
    }

    if (req.body.event === 'entry.update' || req.body.event === 'entry.delete') {
        try {
            await res.revalidate('/')
            await res.revalidate('/articles')
            await res.revalidate(`/posts/${req.body.entry.id}`)
            return res.json({ revalidated: true })
        } catch (err) {
            return res.status(500).send('Error revalidating')
        }
    }

    return res.status(500).json({ message: 'Error' })
}