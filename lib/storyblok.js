import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: 'lyin6LgLeQrktByS54c9ggtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export default Storyblok
