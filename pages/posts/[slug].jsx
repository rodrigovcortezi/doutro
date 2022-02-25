import Api from '../../lib/api'
import Link from 'next/link'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import {remarkCodeBlocksShiki} from '@kentcdodds/md-temp'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import moment from 'moment'
import Image from 'next/image'
import {motion} from 'framer-motion'

const articleBody = article => {
  return unified()
    .use(remarkParse)
    .use(remarkCodeBlocksShiki)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(article.body)
}

const AnimationContainer = ({children}) => (
  <motion.div
    variants={{
      hidden: {opacity: 0},
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
)

const AnimationItem = ({children}) => (
  <motion.div
    variants={{
      hidden: {opacity: 0, y: 40},
      show: {
        opacity: 1,
        y: 0,
        transition: {
          ease: 'easeOut',
          duration: 0.6,
        },
      },
    }}
  >
    {children}
  </motion.div>
)

const ArticlePage = ({article, body}) => {
  const {title, cover, date, author_name, reading_time_in_sec} = article
  const dateString = moment(date).format('D MMM, YYYY')
  const reading_time_in_min = Math.floor(reading_time_in_sec / 60)
  const duration = `${reading_time_in_min} min`
  return (
    <AnimationContainer>
      <AnimationItem>
        <div className="mx-6">
          <div className="max-w-5xl mx-auto py-6">
            <Link href="/">
              <a className="text-primary font-medium py-3">
                {'<- Back to overview'}
              </a>
            </Link>
          </div>
        </div>
      </AnimationItem>
      <AnimationItem>
        <header className="mx-6">
          <div className="relative max-w-6xl mx-auto h-[290px] md:h-[500px]">
            <Image
              src={'https:' + cover.image}
              alt={title}
              placeholder="blur"
              blurDataURL={cover.blurData}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="mt-5 md:mt-7">
              <h2 className="text-primary text-xl md:text-2xl font-semibold">
                {title}
              </h2>
              <p className="text-secondary text-sm md:text-[.875rem] mt-2 font-medium">
                By {author_name}
              </p>
              <p className="text-secondary text-tiny md:text-sm mt-[2px]">{`${dateString} · ${duration}`}</p>
            </div>
          </div>
        </header>
      </AnimationItem>
      <AnimationItem>
        <main className="mx-6">
          <div className="max-w-5xl mx-auto pb-20">
            <div
              className="prose max-w-none mt-11"
              dangerouslySetInnerHTML={{__html: body}}
            ></div>
          </div>
        </main>
      </AnimationItem>
    </AnimationContainer>
  )
}

export async function getStaticProps({params}) {
  const {slug} = params
  const article = await Api('article').get(slug)
  const body = String(await articleBody(article))

  return {
    props: {
      article,
      body,
    },
  }
}

export async function getStaticPaths() {
  const entries = await Api('article').getEntries()
  const paths = entries.map(e => ({
    params: {slug: e.slug},
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ArticlePage
