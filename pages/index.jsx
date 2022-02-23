import {useState, useEffect} from 'react'
import {Navbar} from '../components/Navbar'
import {ArticleCard} from '../components/ArticleCard'
import Masonry from '@rodrigovcortezi/react-masonry-css'

import Api from '../lib/api'
import Link from 'next/link'

const useMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  return mounted
}

const IndexPage = ({articleData}) => {
  const mounted = useMounted()
  // Prevents masonry flashing on first paint
  const style = mounted ? {} : {display: 'none'}
  return (
    <div className="pb-24 md:pb-0 md:pt-[5rem]">
      <Navbar />
      <div style={style} className="px-4 mt-3 max-w-6xl mx-auto">
        <Masonry breakpointCols={{default: 4, 639: 2, 1023: 3}} gutter="14px">
          {articleData.map(article => (
            <Link key={article.id} href={`/posts/${article.slug}`}>
              <a>
                <ArticleCard article={article} className="mb-5" />
              </a>
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articleData = await Api('article').getAll()
  return {
    props: {
      articleData,
    },
    revalidate: 5,
  }
}

export default IndexPage
