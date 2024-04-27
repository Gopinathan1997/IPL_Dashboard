// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, obtaineddata: [], bgclr: ''}

  componentDidMount() {
    this.getTeamStats()
  }

  getTeamStats = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bgclr = id
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const eachItem = await response.json()

    const latestMatchDetails = {
      id: eachItem.latest_match_details.id,
      umpires: eachItem.latest_match_details.umpires,
      result: eachItem.latest_match_details.result,
      manOftheMatch: eachItem.latest_match_details.man_of_the_match,
      date: eachItem.latest_match_details.date,
      venue: eachItem.latest_match_details.venue,
      competingTeam: eachItem.latest_match_details.competing_team,
      competingTeamLogo: eachItem.latest_match_details.competing_team_logo,
      firstInnings: eachItem.latest_match_details.first_innings,
      secondInnings: eachItem.latest_match_details.second_innings,
      matchStatus: eachItem.latest_match_details.match_status,
    }

    const recentMatches = eachItem.recent_matches.map(each => ({
      id: each.id,
      umpires: each.umpires,
      result: each.result,
      manOftheMatch: each.man_of_the_match,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    console.log(recentMatches)
    const updatedData = {
      teamBannerUrl: eachItem.team_banner_url,
      latestMatchDetails,
      recentMatches,
    }

    this.setState({obtaineddata: updatedData, isLoading: false, bgclr})
  }

  renderPage = () => {
    const {obtaineddata, bgclr, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = obtaineddata

    console.log(bgclr)

    return (
      <div className={`bg-container ${bgclr}`}>
        <img alt="team banner" src={teamBannerUrl} className="banner" />
        <div className="latest-match">
          <h1>Latest Match details</h1>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="arrange">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
          )}
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {recentMatches.map(each => (
              <li key={each.id}>
                <MatchCard recentMatchDetail={each} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="bg-container">
            <h1>LOADING</h1>
            <Loader type="Oval" color="#fff" height={50} width={50} />
          </div>
        ) : (
          this.renderPage()
        )}
      </div>
    )
  }
}
export default TeamMatches
