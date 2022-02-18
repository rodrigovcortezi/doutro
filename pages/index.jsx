import React from 'react'
import {Navbar} from '../components/Navbar'
import {ArticleCard} from '../components/ArticleCard'
import Masonry from '@rodrigovcortezi/react-masonry-css'

import Storyblok from '../lib/storyblok'

const IndexPage = ({articleData}) => {
  return (
    <>
      <Navbar />
      <div className="px-4 mt-3 max-w-6xl mx-auto">
        <Masonry breakpointCols={{default: 4, 639: 2, 1023: 3}} gutter="14px">
          {articleData.map(article => (
            <ArticleCard key={article.id} article={article} className="mb-5" />
          ))}
        </Masonry>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const {data} = await Storyblok.get('cdn/stories?starts_with=blog-articles', {
    version: 'published',
    cv: Date.now(),
  })
  return {
    props: {
      articleData: data.stories.map(d => ({...d.content, id: d.uuid})),
    },
  }
}

export default IndexPage
