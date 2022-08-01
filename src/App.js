import './App.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Travel from './Components/Travel'

class App extends Component {
  state = {data: [], isLogged: true}

  componentDidMount() {
    this.onGetData()
  }

  onGetData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const UpdatedData = data.packages.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      name: each.name,
      description: each.description,
    }))
    this.setState({data: UpdatedData, isLogged: false})
  }

  render() {
    const {data, isLogged} = this.state
    return (
      <div className="container">
        <h1 className="h1">Travel Guide</h1>
        {isLogged ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <ul>
              {data.map(each => (
                <Travel key={each.id} dataDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default App
