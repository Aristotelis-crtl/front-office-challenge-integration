import data from '../data.json'
import EventCard from './EventCard'
import { Carousel, Select } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { Empty } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'

const NextEventContainer = () => {
  const { Option } = Select
  const carousel = useRef<CarouselRef>(null)
  const [filters, setFilters] = useState<string[]>([])
  const [events, setEvents] = useState(data.nextEvent)
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  }

  const handlePrev = () => carousel.current?.prev()
  const handleNext = () => carousel.current?.next()
  const handleChange = (value: string[]) => {
    setFilters(value)
  }
  const sportsTitle = data.nextEvent.map((data) => {
    return data.sportTitle
  })
  useEffect(() => {
    setEvents(
      data.nextEvent.filter((sport) => {
        return filters.includes(sport.sportTitle)
      })
    )
  }, [filters])
  return (
    <>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Choisissez un sport"
        onChange={handleChange}
      >
        {sportsTitle.map((data) => (
          <Option value={data} key={data}>
            {data}
          </Option>
        ))}
      </Select>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
        Prochaines épreuves
      </p>
      {filters.length > 0 ? (
        <>
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <LeftOutlined
              onClick={handlePrev}
              style={{ color: filters.length > 3 ? 'black' : 'silver' }}
            />
            <div style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
              <Carousel {...settings} ref={carousel}>
                {events.map((data) => {
                  return <EventCard props={data} key={data.id} />
                })}
              </Carousel>
            </div>
            <RightOutlined
              onClick={handleNext}
              style={{ color: filters.length > 3 ? 'black' : 'silver' }}
            />
          </div>
        </>
      ) : (
        <Empty description={<p>Aucune épreuve de prévu</p>} />
      )}
    </>
  )
}

export default NextEventContainer
