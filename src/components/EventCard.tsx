import { Card } from 'antd'
const EventCard = (props: any) => {
  const { Meta } = Card

  function formatDate(date: number) {
    var a = new Date(date * 1000)
    var year = a.getFullYear()
    var month = a.getMonth()
    var day = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var time = `${day}/${month < 10 ? `0${month}` : month}/${year} - ${hour}:${
      min < 10 ? `0${min}` : min
    }`
    return time
  }
  return (
    <>
      <Card
        cover={
          <img
            alt="Représentation du sportif en action"
            src={props.props.pictureUrl}
            style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
          />
        }
      >
        <Meta title={props.props.sportTitle} description={formatDate(props.props.date)} />
      </Card>
    </>
  )
}
export default EventCard
