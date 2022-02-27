import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const ArticleCard = ({article, className, imageSizes}) => {
  const {title, cover, date, reading_time_in_sec} = article
  const dateString = moment(date).format('D MMM, YYYY')
  const reading_time_in_min = Math.floor(reading_time_in_sec / 60)
  const duration = `${reading_time_in_min} min`
  return (
    <div className={className}>
      <div className="rounded overflow-hidden">
        <Image
          src={'https:' + cover.image}
          alt={title}
          placeholder="blur"
          blurDataURL={cover.blurData}
          layout="responsive"
          width={cover.width}
          height={cover.height}
          sizes={imageSizes}
        />
      </div>
      <h3 className="text-primary text-base font-semibold mt-2 leading-[22px]">
        {title}
      </h3>
      <div className="text-secondary text-tiny md:text-xs font-medium mt-1">{`${dateString} · ${duration}`}</div>
    </div>
  )
}

export {ArticleCard}
