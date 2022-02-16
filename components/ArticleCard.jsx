import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const ArticleCard = ({article, className}) => {
  const {title, cover, date, duration} = article
  const containerStyle = [className, 'relative'].join(' ')
  const dateString = moment(date).format('D MMM, YYYY')
  return (
    <div className={containerStyle}>
      <Image
        src={cover.url}
        alt={title}
        layout="responsive"
        width={cover.width}
        height={cover.height}
        className="rounded"
      />
      <h3 className="text-primary text-base font-semibold mt-2 leading-[22px]">
        {title}
      </h3>
      <div className="text-secondary text-[10px] md:text-xs font-medium mt-1">{`${dateString} · ${duration}`}</div>
    </div>
  )
}

export {ArticleCard}
