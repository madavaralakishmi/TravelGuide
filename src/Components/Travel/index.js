import './index.css'

const Travel = props => {
  const {dataDetails} = props
  const {name, imageUrl, description} = dataDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Travel
