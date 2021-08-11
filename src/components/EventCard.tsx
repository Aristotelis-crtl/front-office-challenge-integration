import moment from 'moment'
import { Card } from 'antd'
import { FunctionComponent } from 'react'
import { SportInfo } from '../types/EventsTypes'
const EventCard: FunctionComponent<SportInfo> = (props) => {
  const { Meta } = Card
  const { sportTitle, pictureUrl, date } = props
  function formatDate(date: number) {
    let time: string = moment(date * 1000).format('DD/MM/YYYY - h:mm')
    return time
  }
  return (
    <>
      <Card
        cover={
          <img
            alt="Représentation du sportif en action"
            src={pictureUrl}
            style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
          />
        }
      >
        <Meta title={sportTitle} description={formatDate(parseInt(date))} />
      </Card>
    </>
  )
}
export default EventCard
