// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const teamsApiUrl = 'https://apis.ccbp.in/ipl'
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const obtainedList = data.teams
    const updatedData = obtainedList.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(teamsList)
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1>IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {teamsList.map(eachdata => (
              <li key={eachdata.id}>
                <TeamCard teamDetails={eachdata} key={eachdata.id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
