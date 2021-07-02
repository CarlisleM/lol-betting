import styled from 'styled-components'
import RootStore from '../store'
import { Observer } from 'mobx-react'

const MatchWeek = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 30px;
	border-top: thick double;
	border-bottom: thick double;
	font-weight: 700;
`

const MatchSchedule = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid black;
`

const MatchScheduleTeamLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;
`

const MatchScheduleTime = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 40%;
	height: 100%;
`

interface Props {
	upcomingGames: any
	teams: any
}

const MatchScheduleBar = (props: Props) => {
	const testLogoImage = (
		<img
			src={require('../images/template.png').default}
			height={'75%'}
			alt='Logo'
		/>
	)

	console.log('Local time: ', new Date().toLocaleDateString())
	let today = new Date().toLocaleDateString('en-US', {
		timeZone: 'America/Los_Angeles',
	})
	console.log('PST time: ', today)

	const UpcomingMatches = () => {
		return (
			<>
				<Observer>
					{() => (
						<>
							{props.upcomingGames !== null &&
								props.upcomingGames.filter(
									(upcomingGame: any) =>
										upcomingGame.league_id === RootStore.currentLeague
								).length > 0 &&
								props.upcomingGames
									.filter(
										(upcomingGame: any) =>
											upcomingGame.league_id === RootStore.currentLeague
									)
									.map((match: any, matchIndex: number) => (
										<>
											{matchIndex === 0 ? (
												<MatchWeek>Week {match.match_week}</MatchWeek>
											) : (
												props.upcomingGames.filter(
													(upcomingGame: any) =>
														upcomingGame.league_id === RootStore.currentLeague
												)[matchIndex]!.match_week >
													props.upcomingGames.filter(
														(upcomingGame: any) =>
															upcomingGame.league_id === RootStore.currentLeague
													)[matchIndex - 1]!.match_week && (
													<MatchWeek>Week {match.match_week}</MatchWeek>
												)
											)}
											<MatchSchedule
												key={matchIndex}
												style={{
													borderBottom:
														matchIndex <
														props.upcomingGames.filter(
															(upcomingGame: any) =>
																upcomingGame.league_id ===
																RootStore.currentLeague
														).length -
															1
															? '1px solid black'
															: 'none',
												}}
											>
												<MatchScheduleTeamLogo>
													<img
														src={
															require(`../images/teams/${match.blue_team}.png`)
																.default
														}
														height={'75%'}
														alt='Logo'
													/>
													{/* {testLogoImage}
													{match.blue_team} */}
												</MatchScheduleTeamLogo>
												<MatchScheduleTime>
													<span>{match.match_day}</span>
													<span>{match.match_time}</span>
													<span>{match.game_date.split('T')[0]}</span>
												</MatchScheduleTime>
												<MatchScheduleTeamLogo>
													{testLogoImage}
													{match.red_team}
												</MatchScheduleTeamLogo>
											</MatchSchedule>
										</>
									))}
						</>
					)}
				</Observer>
			</>
		)
	}

	return <UpcomingMatches />
}

export default MatchScheduleBar
