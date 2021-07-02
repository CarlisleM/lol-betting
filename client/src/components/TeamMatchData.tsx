import { Observer } from 'mobx-react'
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
	width: 50px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
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
	width: 50px;
	height: 40px;
	border-right: 1px solid black;
`

const TableFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
`

const TableFooterContainer = styled.div`
	display: flex;
`

interface Props {
	team: any
	games: any
}

const TeamMatchData = (props: Props) => {
	const results = [
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
	]

	return (
		<TableContainer>
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

			{RootStore.selectedTeamOne}

			<TableBodyContainer>
				<Observer>
					{() => (
						<>
							{props.games !== null &&
								props.team !== null &&
								props.games.filter(
									(game: any) =>
										game.blue_team === props.team ||
										game.red_team === props.team
								).length > 0 &&
								props.games
									.filter(
										(game: any) =>
											game.blue_team === props.team ||
											game.red_team === props.team
									)
									.map((match: any, index: number) => (
										<TableBodyRow>
											<TableBody
												style={{
													width: 100,
													borderLeft: '1px solid black',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.game_date.split('T')[0]}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'salmon',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{props.team === match.blue_team
													? match.red_team
													: match.blue_team}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'salmon',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.first_blood}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'lightgreen',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.first_tower}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'lightgreen',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.first_dragon}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'salmon',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.first_inhibitor}
											</TableBody>
											<TableBody
												style={{
													width: 60,
													backgroundColor: 'lightgreen',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.first_baron}
											</TableBody>
											<TableBody
												style={{
													backgroundColor: 'salmon',
													borderBottom:
														index < props.games.length - 1
															? '1px solid black'
															: 'none',
												}}
											>
												{match.winner}
											</TableBody>
										</TableBodyRow>
									))}
						</>
					)}
				</Observer>
			</TableBodyContainer>

			<TableFooterContainer>
				<TableFooter style={{ width: 151, borderLeft: '1px solid black' }}>
					0%
				</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter style={{ width: 60 }}>0%</TableFooter>
				<TableFooter>0%</TableFooter>
			</TableFooterContainer>
		</TableContainer>
	)
}

export default TeamMatchData
