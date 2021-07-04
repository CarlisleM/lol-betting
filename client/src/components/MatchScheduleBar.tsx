import styled from 'styled-components'
import RootStore from '../store'
import { Observer } from 'mobx-react'
import { QuestionCircleOutlined } from '@ant-design/icons'

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
	cursor: pointer;

	&:hover {
		background-color: #e8e8e8;
	}
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
	const teamLogo = (team: any) => (
		<img
			style={{ objectFit: 'contain', width: '85%', height: '85%' }}
			src={require(`../images/teams/${team}.png`).default}
			alt={`${team} Logo`}
		/>
	)

	// console.log('Local time: ', new Date().toLocaleDateString())
	// let today = new Date().toLocaleDateString('en-US', {
	// 	timeZone: 'America/Los_Angeles',
	// })
	// console.log('PST time: ', today)

	const UpcomingMatches = () => {
		return (
			<>
				<Observer>
					{() => (
						<>
							{props.upcomingGames !== null &&
							props.upcomingGames.filter(
								(upcomingGame: any) =>
									upcomingGame.league_id === RootStore.selectedLeague
							).length > 0 ? (
								props.upcomingGames
									.filter(
										(upcomingGame: any) =>
											upcomingGame.league_id === RootStore.selectedLeague
									)
									.map((match: any, matchIndex: number) => (
										<>
											{matchIndex === 0 ? (
												<MatchWeek>Week {match.match_week}</MatchWeek>
											) : (
												props.upcomingGames.filter(
													(upcomingGame: any) =>
														upcomingGame.league_id === RootStore.selectedLeague
												)[matchIndex]!.match_week >
													props.upcomingGames.filter(
														(upcomingGame: any) =>
															upcomingGame.league_id ===
															RootStore.selectedLeague
													)[matchIndex - 1]!.match_week && (
													<MatchWeek>Week {match.match_week}</MatchWeek>
												)
											)}
											<MatchSchedule
												key={matchIndex}
												style={{
													borderBottom:
														matchIndex !==
														props.upcomingGames.filter(
															(upcomingGame: any) =>
																upcomingGame.league_id ===
																RootStore.selectedLeague
														).length -
															1
															? props.upcomingGames.filter(
																	(upcomingGame: any) =>
																		upcomingGame.league_id ===
																		RootStore.selectedLeague
															  )[matchIndex].match_week <
															  props.upcomingGames.filter(
																	(upcomingGame: any) =>
																		upcomingGame.league_id ===
																		RootStore.selectedLeague
															  )[matchIndex + 1].match_week
																? '1px solid black'
																: 'none'
															: 'none',
													// matchIndex <
													// props.upcomingGames.filter(
													// 	(upcomingGame: any) =>
													// 		upcomingGame.league_id ===
													// 		RootStore.selectedLeague
													// ).length -
													// 	1
													// 	? '1px solid black'
													// 	: 'none',
												}}
												onClick={() => {
													RootStore.updateSelectedTeamOne(match.blue_team)
													RootStore.updateSelectedTeamTwo(match.red_team)
												}}
											>
												<MatchScheduleTeamLogo>
													{teamLogo(match.blue_team)}
												</MatchScheduleTeamLogo>
												<MatchScheduleTime>
													<span>{match.match_day}</span>
													<span>{match.match_time}</span>
													<span>{match.game_date.split('T')[0]}</span>
												</MatchScheduleTime>
												<MatchScheduleTeamLogo>
													{teamLogo(match.red_team)}
												</MatchScheduleTeamLogo>
											</MatchSchedule>
										</>
									))
							) : (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										height: '50%',
										flexDirection: 'column',
										textAlign: 'center',
										color: 'rgba(0, 0, 0, 0.25)',
									}}
								>
									<QuestionCircleOutlined
										style={{ fontSize: 100, paddingBottom: 10 }}
									/>
									<span style={{ fontSize: 30 }}>
										Begin by selecting a league to display upcoming matches
									</span>
								</div>
							)}
						</>
					)}
				</Observer>
			</>
		)
	}

	return <UpcomingMatches />
}

export default MatchScheduleBar
