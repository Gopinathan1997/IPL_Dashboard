// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <>
      <div className="oppenent">
        <p>{latestMatchDetails.competingTeam}</p>
        <p>{latestMatchDetails.date}</p>
        <p>{latestMatchDetails.venue}</p>
        <p>{latestMatchDetails.result}</p>
      </div>
      <img
        className="opponent-logo"
        alt={`latest match ${latestMatchDetails.competingTeam}`}
        src={latestMatchDetails.competingTeamLogo}
      />
      <div>
        <h1>First Innings</h1>
        <p>{latestMatchDetails.firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{latestMatchDetails.secondInnings}</p>
        <h1>Man of the Match</h1>
        <p>{latestMatchDetails.manOftheMatch}</p>
        <h1>Umpires</h1>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
