import { useRef } from 'react'
import styled from 'styled-components'
import RootStore from '../store'

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const TableHeaderContainer = styled.div`
	display: flex;
`

const TableHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
	font-weight: 700;
`

const TableBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 80%;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

const TableBodyRow = styled.div`
	display: flex;
`

const TableBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 40px;
	border-right: 1px solid black;
`

const TableFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
`

const TableFooterContainer = styled.div`
	display: flex;
`

interface Props {
	teamNumber: number
	selectedTeam: any
	games: any
}

const TeamMatchData = (props: Props) => {
	const countOccurrences = (key: string) => {
		let count = 0
		let games = props.games.filter(
			(game: any) =>
				game.blue_team === props.selectedTeam ||
				game.red_team === props.selectedTeam
		)

		if (games.length > 10) {
			games = games.slice(-10)
		}

		games.forEach((element: any) => {
			if (element[key] === props.selectedTeam) {
				count += 1
			}
		})

		if (games.length === 10) {
			if (count === 0) {
				return '0%'
			} else {
				return count + '0%'
			}
		} else {
			if (count === 0) {
				return '0%'
			} else {
				if (((100 * count) / games.length) % 1 === 0) {
					return (100 * count) / games.length + '%'
				} else {
					return ((100 * count) / games.length).toFixed(2) + '%'
				}
			}
		}
	}

	let currentGames =
		props.games &&
		props.games.filter(
			(game: any) =>
				game.blue_team === props.selectedTeam ||
				game.red_team === props.selectedTeam
		)

	// Scroll to the top of the table on load
	const matchContainerRef = useRef<HTMLDivElement>(null)
	matchContainerRef !== null && matchContainerRef.current?.scrollTo(0, 0)

	return (
		<TableContainer>
			{currentGames !== null && props.selectedTeam !== null && (
				<>
					<TableHeaderContainer>
						<TableHeader style={{ width: 100, borderLeft: '1px solid black' }}>
							Game Date
						</TableHeader>
						<TableHeader>VS</TableHeader>
						<TableHeader>FB</TableHeader>
						<TableHeader>FT</TableHeader>
						<TableHeader>FD</TableHeader>
						<TableHeader>FI</TableHeader>
						<TableHeader style={{ width: 60 }}>FBaron</TableHeader>
						<TableHeader>W/L</TableHeader>
					</TableHeaderContainer>
					<TableBodyContainer ref={matchContainerRef}>
						{console.log('matchContainerRef: ', matchContainerRef)}
						{console.log(
							'matchContainerRef scrollTop: ',
							matchContainerRef.current?.scrollTop
						)}
						{currentGames.length > 0 &&
							currentGames.map((match: any, index: number) => (
								<TableBodyRow>
									<TableBody
										style={{
											width: 100,
											borderLeft: '1px solid black',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
											backgroundColor:
												props.teamNumber === 1
													? match.red_team === RootStore.selectedTeamTwo ||
													  match.blue_team === RootStore.selectedTeamTwo
														? 'darkgrey'
														: 'transparent'
													: match.red_team === RootStore.selectedTeamOne ||
													  match.blue_team === RootStore.selectedTeamOne
													? 'darkgrey'
													: 'transparent',
										}}
									>
										{match.game_date.split('T')[0]}
									</TableBody>
									<TableBody
										style={{
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
											backgroundColor:
												props.teamNumber === 1
													? match.red_team === RootStore.selectedTeamTwo ||
													  match.blue_team === RootStore.selectedTeamTwo
														? 'darkgrey'
														: 'transparent'
													: match.red_team === RootStore.selectedTeamOne ||
													  match.blue_team === RootStore.selectedTeamOne
													? 'darkgrey'
													: 'transparent',
										}}
									>
										{props.selectedTeam === match.blue_team
											? match.red_team
											: match.blue_team}
									</TableBody>
									<TableBody
										style={{
											backgroundColor:
												props.selectedTeam === match.first_blood
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.first_blood ? '✓' : '✘'}
									</TableBody>
									<TableBody
										style={{
											backgroundColor:
												props.selectedTeam === match.first_tower
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.first_tower ? '✓' : '✘'}
									</TableBody>
									<TableBody
										style={{
											backgroundColor:
												props.selectedTeam === match.first_dragon
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.first_dragon ? '✓' : '✘'}
									</TableBody>
									<TableBody
										style={{
											backgroundColor:
												props.selectedTeam === match.first_inhibitor
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.first_inhibitor ? '✓' : '✘'}
									</TableBody>
									<TableBody
										style={{
											width: 60,
											backgroundColor:
												props.selectedTeam === match.first_baron
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.first_baron ? '✓' : '✘'}
									</TableBody>
									<TableBody
										style={{
											backgroundColor:
												props.selectedTeam === match.winner
													? 'lightgreen'
													: 'salmon',
											borderBottom:
												index < currentGames.length - 1
													? '1px solid black'
													: 'none',
										}}
									>
										{props.selectedTeam === match.winner ? '✓' : '✘'}
									</TableBody>
								</TableBodyRow>
							))}
					</TableBodyContainer>

					<TableFooterContainer>
						<TableFooter
							style={{ width: 156, borderLeft: '1px solid black' }}
						/>
						<TableFooter>{countOccurrences('first_blood')}</TableFooter>
						<TableFooter>{countOccurrences('first_tower')}</TableFooter>
						<TableFooter>{countOccurrences('first_dragon')}</TableFooter>
						<TableFooter>{countOccurrences('first_inhibitor')}</TableFooter>
						<TableFooter style={{ width: 60 }}>
							{countOccurrences('first_baron')}
						</TableFooter>
						<TableFooter>{countOccurrences('winner')}</TableFooter>
					</TableFooterContainer>
				</>
			)}
		</TableContainer>
	)
}

export default TeamMatchData
