import {useState, useEffect} from 'react'
import {Navbar} from '../components/Navbar'
import {ArticleCard} from '../components/ArticleCard'
import Masonry from '@rodrigovcortezi/react-masonry-css'

import Api from '../lib/api'
import Link from 'next/link'
import {motion} from 'framer-motion'

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

const PageWrapper = ({children}) => (
  <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.3}}
  >
    {children}
  </motion.div>
)

const IndexPage = ({articleData}) => {
  const mounted = useMounted()
  // Prevents masonry flashing on first paint
  const style = mounted ? {} : {visibility: 'hidden'}
  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="pb-24 md:pb-0 md:pt-[5rem]">
          <div style={style} className="px-4 mt-3 max-w-6xl mx-auto">
            <Masonry
              breakpointCols={{default: 4, 639: 2, 1023: 3}}
              gutter="14px"
            >
              {articleData.map(article => (
                <Link key={article.id} href={`/posts/${article.slug}`}>
                  <a>
                    <ArticleCard
                      article={article}
                      className="mb-5"
                      imageSizes={'50vw'}
                    />
                  </a>
                </Link>
              ))}
            </Masonry>
          </div>
        </div>
      </PageWrapper>
    </>
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
