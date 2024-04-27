// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetail} = props
  return (
    <li className="match-card">
      <img
        className="logo"
        alt={`competing team ${recentMatchDetail.competingTeam}`}
        src={recentMatchDetail.competingTeamLogo}
      />
      <p>{recentMatchDetail.competingTeam}</p>
      <p>{recentMatchDetail.date}</p>
      <p>{recentMatchDetail.result}</p>
      <p>{recentMatchDetail.matchStatus}</p>
    </li>
  )
}
export default MatchCard
