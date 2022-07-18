export default async function handler(req, res) {
    if (!(req.method === 'POST')) {
        return res.status(401).json({ message: "Don't access" })
    }

    if (req.query.secret !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    if (req.body.event === 'entry.publish') {
        try {
            await res.unstable_revalidate('/')
            await res.unstable_revalidate('/articles')
            return res.json({ revalidated: true })
        } catch (err) {
            return res.status(500).send('Error revalidating')
        }
    }

    if (req.body.event === 'entry.update' || req.body.event === 'entry.delete') {
        try {
            await res.unstable_revalidate('/')
            await res.unstable_revalidate('/articles')
            await res.unstable_revalidate(`/posts/${req.body.entry.id}`)
            return res.json({ revalidated: true })
        } catch (err) {
            return res.status(500).send('Error revalidating')
        }
    }

    return res.status(500).json({ message: 'Error' })
}