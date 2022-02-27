import Head from 'next/head'
import {Navbar} from '../components/Navbar'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Doutro</title>
      </Head>
      <Navbar />
      <div className="mt-9 md:mt-32">
        <header>
          <h2 className="text-xl font-semibold text-white text-center">
            Doutro is...
          </h2>
        </header>
        <div className="mx-6 mt-4">
          <main className="prose mx-auto">
            <p className="text-justify">
              Just an ideia brought to life. My primary goal with this project
              was to practice some design and software development skills while
              putting the <strong>user experience</strong> in the center. Now
              that it has all the features of a blog application, I decided to
              use it as a
              <strong> collection of curated written material</strong>. Doutro
              will help you discover the best articles written by the most
              qualified authors out there.
            </p>
            <hr className="border-gray-600 mt-0"></hr>
          </main>
        </div>
        <footer>
          <div className="text-center mt-4">
            <span className="text-[.875rem] text-white">Made by </span>
            <a
              className="text-[.875rem] font-semibold text-purple"
              href="https://github.com/rodrigovcortezi"
            >
              @rodrigovcortezi
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AboutPage
