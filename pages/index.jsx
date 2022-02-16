import React from 'react'
import {Navbar} from '../components/Navbar'
import {ArticleCard} from '../components/ArticleCard'
import Masonry from '@rodrigovcortezi/react-masonry-css'

import articleData from '../data/articles'

const IndexPage = () => {
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

export default IndexPage
