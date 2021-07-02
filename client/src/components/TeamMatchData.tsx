import styled from 'styled-components'
import RootStore from '../store'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-svg'

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
	const countOccurrences = (key: string) => {
		let count = 0
		let games = props.games.filter(
			(game: any) =>
				game.blue_team === props.team || game.red_team === props.team
		)

		if (games.length > 10) {
			games = games.slice(-10)
		}

		games.forEach((element: any) => {
			if (element[key] === props.team) {
				count += 1
			}
		})

		console.log(`count of ${key}`, count)

		if (games.length > 10) {
			if (count === 0) {
				return '0%'
			} else {
				return count + '0%'
			}
		} else {
			if (count === 0) {
				return '0%'
			} else {
				return (100 * count) / games.length + '%'
			}
		}
	}

	return (
		<TableContainer>
			{props.games !== null && props.team !== null && (
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
					<TableBodyContainer>
						{props.games.filter(
							(game: any) =>
								game.blue_team === props.team || game.red_team === props.team
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
											{props.team === match.first_blood
												? CheckOutlined
												: CloseOutlined}
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
											{props.team === match.first_tower
												? CheckOutlined
												: CloseOutlined}
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
											{props.team === match.first_dragon
												? CheckOutlined
												: CloseOutlined}
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
											{props.team === match.first_inhibitor
												? CheckOutlined
												: CloseOutlined}
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
											{props.team === match.first_baron
												? CheckOutlined
												: CloseOutlined}
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
											{props.team === match.winner
												? CheckOutlined
												: CloseOutlined}
										</TableBody>
									</TableBodyRow>
								))}
					</TableBodyContainer>

					<TableFooterContainer>
						<TableFooter
							style={{ width: 151, borderLeft: '1px solid black' }}
						/>
						<TableFooter>
							{console.log(countOccurrences('first_blood'))}
							{countOccurrences('first_blood')}
						</TableFooter>
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
