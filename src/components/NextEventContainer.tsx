import data from '../data.json'
import EventCard from './EventCard'
import { Carousel, Select } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { Empty } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { SportInfo } from '../types/EventsTypes'
import { useEffect, useRef, useState } from 'react'

const NextEventContainer = () => {
  const { Option } = Select
  const carousel = useRef<CarouselRef>(null)
  const [filters, setFilters] = useState<string[]>([])
  const [events, setEvents] = useState<SportInfo[]>(data.nextEvent)
  const [indexCarousel, setCarouselIndex] = useState<number>(0)

  const arrowStyle = {
    backgroundColor: '#FFFAFA',
    borderRadius: '50%',
    display: 'flex',
    padding: '0.75% 0.75%',
    border: '1px solid',
    borderColor: '#D8D8D6',
    cursor: 'pointer',
    boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1rem' }}>
        Prochaines épreuves
      </p>
      {filters.length > 0 ? (
        <>
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <div style={arrowStyle} onClick={handlePrev}>
              <LeftOutlined
                style={{
                  color: filters.length > 3 && indexCarousel >= 1 ? 'black' : 'silver',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
              <Carousel
                {...settings}
                ref={carousel}
                key="carousel"
                afterChange={(e) => setCarouselIndex(e)}
              >
                {events.map((data) => {
                  return (
                    <EventCard
                      sportTitle={data.sportTitle}
                      pictureUrl={data.pictureUrl}
                      date={data.date}
                      id={data.id as string}
                      sportId={data.sportId as string}
                      key={data.id}
                    />
                  )
                })}
              </Carousel>
            </div>
            <div style={arrowStyle} onClick={handleNext}>
              <RightOutlined
                style={{
                  color:
                    filters.length > 3 && indexCarousel <= filters.length - 4 ? 'black' : 'silver',
                  fontSize: '1rem',
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <Empty description={<p>Aucune épreuve de prévu</p>} />
      )}
    </>
  )
}

export default NextEventContainer
