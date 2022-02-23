import Storyblok from './storyblok'

const slug = {
  article: 'blog-articles/',
}

const Api = contentType => {
  return {
    async getEntries() {
      const {data} = await Storyblok.get(
        `cdn/links?starts_with=${slug[contentType]}`,
      )
      const entries = Object.values(data.links)
        .filter(e => !e.is_folder)
        .map(e => ({...e, slug: e.slug.replace(slug[contentType], '')}))
      return entries
    },

    async getAll() {
      try {
        const {data} = await Storyblok.get(
          `cdn/stories?starts_with=${slug[contentType]}`,
          {
            version: 'published',
            cv: Date.now(),
          },
        )
        return data.stories.map(d => ({...d.content, id: d.uuid, slug: d.slug}))
      } catch (err) {
        console.error(err.toString())
      }
    },

    async get(s) {
      try {
        const fullSlug = slug[contentType] + s
        const {data} = await Storyblok.get(`cdn/stories/${fullSlug}`, {
          version: 'published',
          cv: Date.now(),
        })
        const {story} = data
        return {
          ...story.content,
          id: story.uuid,
        }
      } catch (err) {
        console.error(err.toString())
      }
    },
  }
}

export default Api
