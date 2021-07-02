import styled from 'styled-components'
import MatchScheduleBar from './components/MatchScheduleBar'
import LeagueBar from './components/LeagueBar'
import TeamSelect from './components/TeamSelect'
import TeamMatchData from './components/TeamMatchData'
import StatisticalAnalysis from './components/StatisticalAnalysis'
import { useEffect, useState } from 'react'
import RootStore from './store'
// import { useEffect, useState } from 'react'
// import upcomingService from '../../services/requests'

const Container = styled.div`
	display: flex;
	flex-direction: row;
`

const LeagueBarContainer = styled.div`
	width: 60px;
	height: 100vh;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

const CenterInformationContainer = styled.div`
	width: calc(100% - 18% - 60px);
	height: 100vh;
	border-left: 1px solid black;
	border-right: 1px solid black;
`

const Teams = styled.div`
	display: flex;
	width: 100%;
	height: 85%;
`

const IndividualTeamContainer = styled.div`
	width: 100%;
	height: 100%;
`

const TeamSelectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20%;
	width: 100%;
`

const TeamDataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80%;
`

const StatsAnalysis = styled.div`
	width: 100%;
	height: calc(15% - 1px);
	border-top: 1px solid black;
`

const MatchScheduleBarContainer = styled.div`
	width: 18%;
	height: 100vh;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

function App() {
	const excludeLeagues = ['LCK', 'LFL', 'LPL', 'PCS', 'VCS']

	const [leagues, setLeagues] = useState(null)
	const [teams, setTeams] = useState(null)
	const [upcomingGames, setUpcomingGames] = useState(null)
	const [games, setGames] = useState(null)

	useEffect(() => {
		// All leagues excluding ones currently not being tracked
		fetch('/api/leagues')
			.then((res) => res.json())
			.then((leagues) =>
				setLeagues(
					leagues.filter(
						(league: any) =>
							league.name !== excludeLeagues[0] &&
							league.name !== excludeLeagues[1] &&
							league.name !== excludeLeagues[2] &&
							league.name !== excludeLeagues[3] &&
							league.name !== excludeLeagues[4]
					)
				)
			)

		// All teams excluding ones not currently in use
		fetch('/api/teams')
			.then((res) => res.json())
			.then((teams) =>
				setTeams(teams.filter((team: any) => team.name !== 'Test'))
			)

		// All upcoming games
		fetch('/api/upcoming')
			.then((res) => res.json())
			.then((upcomingGames) => setUpcomingGames(upcomingGames))

		// All games with match results
		fetch('/api/games')
			.then((res) => res.json())
			.then((games) => setGames(games))
	}, [])

	return (
		<div className='App'>
			<Container>
				{/* Left Side Bar */}
				<LeagueBarContainer>
					<LeagueBar leagues={leagues}></LeagueBar>
				</LeagueBarContainer>
				{/* Center Information */}
				<CenterInformationContainer>
					<Teams>
						{/* Team One */}
						<IndividualTeamContainer>
							<TeamSelectContainer>
								<TeamSelect></TeamSelect>
							</TeamSelectContainer>
							<TeamDataContainer>
								<TeamMatchData
									team={RootStore.selectedTeamOne}
									games={games}
								></TeamMatchData>
							</TeamDataContainer>
						</IndividualTeamContainer>
						{/* Team Two */}
						<IndividualTeamContainer>
							<TeamSelectContainer>
								<TeamSelect></TeamSelect>
							</TeamSelectContainer>
							<TeamDataContainer>
								<TeamMatchData
									team={RootStore.selectedTeamTwo}
									games={games}
								></TeamMatchData>
							</TeamDataContainer>
						</IndividualTeamContainer>
					</Teams>
					{/* Bottom Bar */}
					<StatsAnalysis>
						<StatisticalAnalysis></StatisticalAnalysis>
					</StatsAnalysis>
				</CenterInformationContainer>
				{/* Right Side Bar */}
				<MatchScheduleBarContainer>
					{/* {data2} */}
					<MatchScheduleBar
						upcomingGames={upcomingGames}
						teams={teams}
					></MatchScheduleBar>
				</MatchScheduleBarContainer>
			</Container>
		</div>
	)
}

export default App
