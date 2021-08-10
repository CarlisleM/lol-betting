import styled from 'styled-components'
import RootStore from '../store'
import { Observer } from 'mobx-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { mapAbvDayToFull } from '../helpers/mapDay'
import { convertDateToPST } from '../helpers/convertDateTime'
import { useRef } from 'react'

const ScheduleBarContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

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
	position: relative;
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

const TodayMatch = styled.div`
	width: 0;
	height: 0;
	border-top: 8px solid transparent;
	border-bottom: 8px solid transparent;
	border-left: 8px solid red;
	position: absolute;
	left: 0;
	z-index: 1;
`

const Placeholder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50%;
	flex-direction: column;
	text-align: center;
	color: rgba(0, 0, 0, 0.25);
`

interface Props {
	selectedLeague: any
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

	// let today = new Date().toLocaleDateString('en-US', {
	// 	timeZone: 'America/Los_Angeles',
	// 	month: '2-digit',
	// 	day: '2-digit',
	// 	year: 'numeric',
	// })

	let today = new Date().toLocaleDateString('en-AU', {
		timeZone: 'Australia/Brisbane',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})

	const UpcomingMatches = () => {
		// Scroll to the top of the table on load
		const scheduleBarRef = useRef<HTMLDivElement>(null)
		scheduleBarRef !== null && scheduleBarRef.current?.scrollTo(0, 0)

		return (
			<Observer>
				{() => (
					<>
						{console.log('props.upcomingGames: ', props.upcomingGames)}
						{console.log(
							`props.upcomingGames.filter(
								(upcomingGame: any) =>
									upcomingGame.league_id === RootStore.selectedLeague
							).length: `,
							props.upcomingGames !== null &&
								props.upcomingGames.filter(
									(upcomingGame: any) =>
										upcomingGame.league_id === RootStore.selectedLeague
								).length
						)}
						{console.log(
							'LCS upcoming: ',
							props.upcomingGames !== null &&
								props.upcomingGames.filter(
									(upcomingGame: any) => upcomingGame.league_id === 1
								).length
						)}
						<ScheduleBarContainer ref={scheduleBarRef}>
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
																? 'none'
																: '1px solid black'
															: 'none',
												}}
												onClick={() => {
													RootStore.updateSelectedTeamOne(match.blue_team)
													RootStore.updateSelectedTeamTwo(match.red_team)
												}}
											>
												<MatchScheduleTeamLogo>
													{convertDateToPST(match.game_date.split('T')[0]) ===
														today && <TodayMatch />}
													{teamLogo(match.blue_team)}
												</MatchScheduleTeamLogo>
												<MatchScheduleTime>
													<span>{mapAbvDayToFull(match.match_day)}</span>
													<span>{match.match_time} PST</span>
													<span>
														{convertDateToPST(match.game_date.split('T')[0])}
													</span>
												</MatchScheduleTime>
												<MatchScheduleTeamLogo>
													{teamLogo(match.red_team)}
												</MatchScheduleTeamLogo>
											</MatchSchedule>
										</>
									))
							) : (
								<Placeholder>
									<QuestionCircleOutlined
										style={{ fontSize: 100, paddingBottom: 10 }}
									/>
									<span style={{ fontSize: 30, width: '90%' }}>
										Begin by selecting a league to display upcoming matches
									</span>
								</Placeholder>
							)}
						</ScheduleBarContainer>
					</>
				)}
			</Observer>
		)
	}

	return <UpcomingMatches />
}

export default MatchScheduleBar
