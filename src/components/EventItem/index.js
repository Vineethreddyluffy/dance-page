import './index.css'

const GetItem = props => {
  const {item, getStatusOf} = props
  const {registrationStatus, imageUrl, name, location} = item
  const getStatus = () => {
    getStatusOf(registrationStatus)
  }
  return (
    <li className="list-item">
      <button type="button" className="button1" onClick={getStatus}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="heading">{name}</p>
      <p className="location-para">{location}</p>
    </li>
  )
}

export default GetItem
