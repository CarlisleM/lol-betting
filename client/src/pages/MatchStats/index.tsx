import styled from 'styled-components'
import MatchScheduleBar from '../../components/MatchScheduleBar'
import LeagueBar from '../../components/LeagueBar'
import TeamSelect from '../../components/TeamSelect'
import TeamMatchData from '../../components/TeamMatchData'
import StatisticalAnalysis from '../../components/StatisticalAnalysis'
import { useEffect, useState } from 'react'
import RootStore from '../../store'
import { observer, Observer } from 'mobx-react'

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
`

function MatchStats() {
	const excludeLeagues = ['LPL']
	const [leagues, setLeagues] = useState(null)
	const [teams, setTeams] = useState(null)
	const [upcomingGames, setUpcomingGames] = useState(null)
	const [games, setGames] = useState(null)

	useEffect(() => {
		fetch('/api/leagues')
			.then((res) => res.json())
			.then((leagues) =>
				setLeagues(
					leagues.filter((league: any) => !excludeLeagues.includes(league.name))
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
					<LeagueBar
						leagues={leagues}
						upcomingGames={upcomingGames}
						games={games}
					/>
				</LeagueBarContainer>
				{/* Center Information */}
				<CenterInformationContainer>
					<Teams>
						{/* Team One */}
						<IndividualTeamContainer>
							<TeamSelectContainer>
								<Observer>
									{() => (
										<TeamSelect
											teamNumber={1}
											teams={teams}
											selectedTeam={RootStore.selectedTeamOne}
											otherSelectedTeam={RootStore.selectedTeamTwo}
										/>
									)}
								</Observer>
							</TeamSelectContainer>
							<TeamDataContainer>
								<Observer>
									{() => (
										<TeamMatchData
											leagueId={RootStore.selectedLeague}
											teamNumber={1}
											selectedTeam={RootStore.selectedTeamOne}
											games={games}
											teams={teams}
										/>
									)}
								</Observer>
							</TeamDataContainer>
						</IndividualTeamContainer>
						{/* Team Two */}
						<IndividualTeamContainer>
							<TeamSelectContainer>
								<Observer>
									{() => (
										<TeamSelect
											teamNumber={2}
											teams={teams}
											selectedTeam={RootStore.selectedTeamTwo}
											otherSelectedTeam={RootStore.selectedTeamOne}
										/>
									)}
								</Observer>
							</TeamSelectContainer>
							<TeamDataContainer>
								<Observer>
									{() => (
										<TeamMatchData
											leagueId={RootStore.selectedLeague}
											teamNumber={2}
											selectedTeam={RootStore.selectedTeamTwo}
											games={games}
											teams={teams}
										/>
									)}
								</Observer>
							</TeamDataContainer>
						</IndividualTeamContainer>
					</Teams>
					{/* Bottom Bar */}
					<StatsAnalysis>
						<StatisticalAnalysis teams={teams} />
					</StatsAnalysis>
				</CenterInformationContainer>
				{/* Right Side Bar */}
				<Observer>
					{() => (
						<MatchScheduleBarContainer>
							<MatchScheduleBar
								selectedLeague={RootStore.selectedLeague}
								upcomingGames={upcomingGames}
								teams={teams}
							/>
						</MatchScheduleBarContainer>
					)}
				</Observer>
			</Container>
		</div>
	)
}

export default observer(MatchStats)
