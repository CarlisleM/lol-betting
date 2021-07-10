import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Observer } from 'mobx-react'
import {
	CloseOutlined,
	PlusCircleOutlined,
	SaveOutlined,
} from '@ant-design/icons'
import Modal from '../../components/Modal/Modal'
import RootStore from '../../store'
import {
	HeaderRow,
	TeamDiv,
	ObjectiveDiv,
	FloatDiv,
	DateContainer,
	ResultDiv,
	BodyRow,
	FooterRow,
	CreateBet,
	CreateBetRowLabels,
	LeagueSelectLabel,
	MatchSelectLabel,
	MapSelectLabel,
	CreateBetRow,
	LeagueSelect,
	StyledSelect,
	MatchSelect,
	MapSelect,
	TeamSelectLabel,
	ObjectiveSelectLabel,
	TeamSelect,
	ObjectiveSelect,
	DateSelect,
	FloatLabel,
	StyledDateSelect,
	FloatEntry,
	StyledInput,
	DisplayBets,
	RowContainer,
	BetRowLeague,
	HeaderLabel,
	BetRowMatch,
	BetRowSelected,
	BetRowObjective,
	BetRowFloat,
	BetRowDate,
	BetRowButton,
	BetContainer,
	ValueDiv,
	Divider,
} from './styles'

function BetHistory() {
	const [show, setShow] = useState(false)
	const [league, setLeague] = useState()
	const [match, setMatch] = useState<any>()
	const [map, setMap] = useState()
	const [betOnTeam, setBetOnTeam] = useState()
	const [objective, setObjective] = useState()
	const [odds, setOdds] = useState<number>()
	const [matchDate, setMatchDate] = useState(new Date())
	const [betAmount, setBetAmount] = useState<number>()

	const betHistory = [
		{
			teamOne: 'Team SoloMid',
			teamTwo: 'Counter Logic Gaming',
			betOnTeam: 'Team SoloMid',
			matchObjective: 'First Dragon',
			matchOdds: '1.75',
			matchDate: '16/09/2021',
			betAmount: 25,
			result: '',
		},
		{
			teamOne: 'TSM',
			teamTwo: 'CLG',
			betOnTeam: 'TSM',
			matchObjective: 'First Inhibitor',
			matchOdds: '1.75',
			matchDate: '16/09/2021',
			betAmount: 25,
			result: 'win',
		},
		{
			teamOne: 'TSM',
			teamTwo: 'CLG',
			betOnTeam: 'TSM',
			matchObjective: 'First Baron',
			matchOdds: '1.75',
			matchDate: '16/09/2021',
			betAmount: 25,
			result: 'lose',
		},
		{
			teamOne: 'TSM',
			teamTwo: 'CLG',
			betOnTeam: 'TSM',
			matchObjective: 'Winner',
			matchOdds: '1.75',
			matchDate: '16/09/2021',
			betAmount: 25,
			result: 'win',
		},
	]

	const calcluateStats = (bets: any) => {
		let initialDeposit = 50
		let totalWinnings = 0
		let totalLosings = 0
		let totalPending = 0
		let totalAmountBet = 0
		let winCount = 0
		let loseCount = 0

		bets.forEach((bet: any) => {
			if (bet.result === 'win') {
				totalAmountBet += bet.betAmount
				totalWinnings += bet.betAmount
				winCount += 1
			} else if (bet.result === 'lose') {
				totalAmountBet += bet.betAmount
				totalLosings -= bet.betAmount
			} else {
				totalPending = totalPending += bet.betAmount
				loseCount += 1
			}
		})

		let lossProfit = totalWinnings + totalLosings
		let currentBalance = initialDeposit + lossProfit
		let winRate = ((100 * winCount) / (winCount + loseCount)).toFixed(2)

		return {
			initialDeposit,
			currentBalance,
			totalWinnings,
			totalLosings,
			totalPending,
			lossProfit,
			totalAmountBet,
			winRate,
		}
	}

	let betHistoryStats = calcluateStats(betHistory)
	const betContainerRef = useRef<HTMLDivElement>(null)

	const validBet = () => {
		return (
			league !== undefined &&
			match !== undefined &&
			map !== undefined &&
			betOnTeam !== undefined &&
			objective !== undefined &&
			odds !== undefined &&
			matchDate !== undefined &&
			betAmount !== undefined
		)
	}

	const excludeLeagues = ['LCK', 'LFL', 'LPL', 'PCS', 'VCS']
	const [leagues, setLeagues] = useState<any>(null)
	const [teams, setTeams] = useState<any>(null)
	const [upcomingGames, setUpcomingGames] = useState<any>(null)
	const [games, setGames] = useState<any>(null)

	useEffect(() => {
		// All leagues excluding ones currently not being tracked
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
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'mintcream',
			}}
		>
			<div style={{ height: 150, width: '100%' }} />
			<div
				style={{
					width: '100%',
					height: 30,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						width: 150,
						height: 30,
						backgroundColor: 'green',
						display: 'flex',
						justifyContent: 'center',
						cursor: 'pointer',
					}}
					onClick={() => {
						setShow(true)
					}}
				>
					Create New Bets
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<HeaderRow>
					<TeamDiv>TeamDiv One</TeamDiv>
					<TeamDiv>TeamDiv Two</TeamDiv>
					<TeamDiv>Selected TeamDiv</TeamDiv>
					<ObjectiveDiv>Objective</ObjectiveDiv>
					<FloatDiv>Odds</FloatDiv>
					<DateContainer>Date</DateContainer>
					<FloatDiv>Bet Amount</FloatDiv>
					<ResultDiv>Outcome</ResultDiv>
				</HeaderRow>
				{betHistory.map((bet: any) => (
					<BodyRow>
						<TeamDiv>{bet.teamOne}</TeamDiv>
						<TeamDiv>{bet.teamTwo}</TeamDiv>
						<TeamDiv>{bet.betOnTeam}</TeamDiv>
						<ObjectiveDiv>{bet.matchObjective}</ObjectiveDiv>
						<FloatDiv>{bet.matchOdds}</FloatDiv>
						<DateContainer>{bet.matchDate}</DateContainer>
						<FloatDiv>{bet.betAmount}</FloatDiv>
						<ResultDiv
							style={{
								backgroundColor:
									bet.result === 'win'
										? 'lightgreen'
										: bet.result === 'lose'
										? 'red'
										: 'grey',
							}}
						>
							{bet.result}
						</ResultDiv>
					</BodyRow>
				))}

				<FooterRow>
					<div>Initial Deposit:&nbsp; {betHistoryStats.initialDeposit}</div>
					<div>
						Current Balance:&nbsp;
						{betHistoryStats.currentBalance}
					</div>
					<div>
						Total Winnings:&nbsp;
						{betHistoryStats.totalWinnings}
					</div>
					<div>
						Total Losings:&nbsp;
						{betHistoryStats.totalLosings}
					</div>
					<div>
						Total Pending:&nbsp;
						{betHistoryStats.totalPending}
					</div>
					<div>
						Profit/Loss:&nbsp;
						{betHistoryStats.lossProfit}
					</div>
					<div>
						Total Amount Bet:&nbsp;
						{betHistoryStats.totalAmountBet}
					</div>
					<div>Win Rate:&nbsp; {betHistoryStats.winRate}%</div>
				</FooterRow>
			</div>

			<Modal onClose={() => setShow(false)} show={show}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<CreateBet>
						<CreateBetRowLabels style={{ paddingTop: 0 }}>
							<LeagueSelectLabel>League</LeagueSelectLabel>
							<MatchSelectLabel>Match</MatchSelectLabel>
							<MapSelectLabel>Map</MapSelectLabel>
						</CreateBetRowLabels>

						<CreateBetRow>
							<LeagueSelect>
								<StyledSelect
									placeholder={'League'}
									isSearchable={true}
									maxMenuHeight={540}
									maxMenuWidth={500}
									isDisabled={false}
									options={
										// [
										// 	{ value: 'LCS', label: 'LCS' },
										// 	{ value: 'LEC', label: 'LEC' },
										// ]
										leagues !== null
											? leagues.map((league: any) => {
													return { value: league.id, label: league.name }
											  })
											: []
									}
									value={{
										value: league,
										label: league,
									}}
									onChange={(e: any) => setLeague(e.value)}
								/>
							</LeagueSelect>

							<MatchSelect>
								<StyledSelect
									placeholder={'Match'}
									isSearchable={true}
									isDisabled={league === undefined ? true : false}
									maxMenuHeight={540}
									options={
										// [
										// 	{ value: 'TSM vs CLG', label: 'TSM vs CLG' },
										// 	{ value: 'C9 vs FLY', label: 'C9 vs FLY' },
										// ]
										upcomingGames !== null
											? upcomingGames
													.filter((game: any) => game.league_id === league)
													.map((game: any) => {
														return {
															value: game.blue_team + ' vs ' + game.red_team,
															label: game.blue_team + ' vs ' + game.red_team,
														}
													})
											: []
									}
									value={{
										value: match,
										label: match,
									}}
									onChange={(e: any) => {
										console.log('split: ', e.value.split(' '))
										setMatch(e.value)
									}}
								/>
							</MatchSelect>

							<MapSelect>
								<StyledSelect
									placeholder={'Map'}
									isSearchable={true}
									isDisabled={match === undefined ? true : false}
									maxMenuHeight={540}
									options={
										// Can add some checks in here to default to 1
										[
											{ value: '1', label: '1' },
											{ value: '2', label: '2' },
											{ value: '3', label: '3' },
											{ value: '4', label: '4' },
											{ value: '5', label: '5' },
										]
									}
									value={{
										value: map,
										label: map,
									}}
									onChange={(e: any) => setMap(e.value)}
								/>
							</MapSelect>
						</CreateBetRow>

						<CreateBetRowLabels>
							<TeamSelectLabel>Bet On</TeamSelectLabel>
							<ObjectiveSelectLabel>Objective</ObjectiveSelectLabel>
						</CreateBetRowLabels>

						{/* {match && match !== null && console.log('split: ', match.split(' '))} */}

						<CreateBetRow>
							<TeamSelect>
								<StyledSelect
									placeholder={'Selected Team'}
									isDisabled={match === undefined ? true : false}
									maxMenuHeight={540}
									options={
										// [
										// 	{ value: 'test1', label: 'test1' },
										// 	{ value: 'test2', label: 'test2' },
										// ]
										match !== null
											? [
													{
														value: match.split(' ')[0],
														label: match.split(' ')[0],
													},
													{
														value: match.split(' ')[4],
														label: match.split(' ')[4],
													},
											  ]
											: []
									}
									value={{
										value: betOnTeam,
										label: betOnTeam,
									}}
									onChange={(e: any) => setBetOnTeam(e.value)}
								/>
							</TeamSelect>

							<ObjectiveSelect>
								<StyledSelect
									placeholder={'Objective'}
									isSearchable={true}
									isDisabled={match === undefined ? true : false}
									maxMenuHeight={540}
									options={[
										{ value: 'First Blood', label: 'First Blood' },
										{ value: 'First Turret', label: 'First Turret' },
										{ value: 'First Dragon', label: 'First Dragon' },
										{ value: 'First Inhibitor', label: 'First Inhibitor' },
										{ value: 'First Baron', label: 'First Baron' },
										{ value: 'Winner', label: 'Winner' },
										{ value: 'Loser', label: 'Loser' },
									]}
									value={{
										value: objective,
										label: objective,
									}}
									onChange={(e: any) => setObjective(e.value)}
								/>
							</ObjectiveSelect>
						</CreateBetRow>

						<CreateBetRowLabels>
							<DateSelect>Game Date</DateSelect>
							<div style={{ width: '5%' }} />

							<div
								style={{
									width: '47.5%',
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<FloatLabel>Odds</FloatLabel>
								<FloatLabel>Bet ($)</FloatLabel>
							</div>
						</CreateBetRowLabels>

						<CreateBetRow>
							<DateSelect>
								<StyledDateSelect>
									{/* Replace this by looking up the match in the db and getting the game date */}
									{/* {map !== null && betOnTeam !== null && objective !== null
										? games !== null &&
										  games
												.find((game: any) => game.id === match)
												.game_date.split('T')[0]
										: ''} */}
								</StyledDateSelect>
							</DateSelect>

							<div style={{ width: '5%' }} />

							<div
								style={{
									width: '47.5%',
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<FloatEntry>
									<StyledInput
										style={{
											width: '100%',
											height: 32,
											borderRadius: 4,
											textAlign: 'center',
										}}
										disabled={
											map === undefined ||
											betOnTeam === undefined ||
											objective === undefined
												? true
												: false
										}
										type='number'
										step='0.01'
										min='0'
										value={odds}
										onChange={(e: any) => setOdds(e.target.value)}
									/>
								</FloatEntry>

								<FloatEntry>
									<StyledInput
										style={{
											width: '100%',
											height: 32,
											borderRadius: 4,
											textAlign: 'center',
										}}
										disabled={
											map === undefined ||
											betOnTeam === undefined ||
											objective === undefined
												? true
												: false
										}
										type='number'
										step='0.01'
										min='0'
										value={betAmount}
										onChange={(e: any) => setBetAmount(e.target.value)}
									/>
								</FloatEntry>
							</div>
						</CreateBetRow>
						<CreateBetRow style={{ paddingTop: 10 }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									height: 32,
									width: '47.5%',
									border: '1px solid darkgreen',
									color: 'white',
									backgroundColor: validBet() ? 'green' : 'darkseagreen',
									borderRadius: 4,
									cursor: validBet() ? 'pointer' : 'default',
								}}
								onClick={() => {
									if (validBet()) {
										RootStore.createMatchBet({
											id: uuidv4(), // Replace this with the match id
											league: league,
											match: match,
											map: map,
											betOnTeam: betOnTeam,
											matchObjective: objective,
											matchOdds: Number(odds),
											matchDate: matchDate.toLocaleDateString(), // Replace this with the match date
											betAmount: Number(betAmount),
										})
										betContainerRef.current?.scrollTo(
											betContainerRef.current.scrollHeight,
											betContainerRef.current.scrollHeight
										)
									}
								}}
							>
								<span>Add Bet</span>
								<PlusCircleOutlined style={{ fontSize: '22px' }} />
							</div>

							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									height: 32,
									width: '47.5%',
									border: '1px solid darkgreen',
									color: 'white',
									backgroundColor:
										RootStore.matchBets && RootStore.matchBets.length > 0
											? 'green'
											: 'darkseagreen',
									borderRadius: 4,
									cursor:
										RootStore.matchBets && RootStore.matchBets.length > 0
											? 'pointer'
											: 'default',
								}}
								onClick={() => {
									RootStore.matchBets &&
										RootStore.matchBets.length > 0 &&
										console.log('save')
								}}
							>
								<span>Create Bets</span>
								<SaveOutlined style={{ fontSize: '22px' }} />
							</div>
						</CreateBetRow>
					</CreateBet>

					<div
						style={{
							width: '2.5%',
							height: '238px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								height: '100%',
								borderLeft: '1px solid black',
								opacity: '0.35',
							}}
						></div>{' '}
					</div>

					<DisplayBets>
						<Observer>
							{() => (
								<>
									<RowContainer>
										<BetRowLeague>
											<HeaderLabel>League</HeaderLabel>
										</BetRowLeague>
										<BetRowMatch>
											<HeaderLabel>VS</HeaderLabel>
										</BetRowMatch>
										<BetRowSelected>
											<HeaderLabel>Selected</HeaderLabel>
										</BetRowSelected>
										<BetRowObjective>
											<HeaderLabel>Objective</HeaderLabel>
										</BetRowObjective>
										<BetRowFloat>
											<HeaderLabel>Odds</HeaderLabel>
										</BetRowFloat>
										<BetRowDate>
											<HeaderLabel>Date</HeaderLabel>
										</BetRowDate>
										<BetRowFloat>
											<HeaderLabel>Bet ($)</HeaderLabel>
										</BetRowFloat>
										<BetRowButton />
									</RowContainer>
									<BetContainer ref={betContainerRef}>
										{RootStore.matchBets &&
											RootStore.matchBets.length > 0 &&
											RootStore.matchBets.map(
												(matchBet: any, index: number) => (
													<div key={index}>
														<RowContainer
															style={{
																marginTop: index === 0 ? 5 : 0,
																backgroundColor:
																	index % 2 === 0 ? 'whitesmoke' : 'beige',
															}}
														>
															<BetRowLeague>
																<ValueDiv>{matchBet.league}</ValueDiv>
															</BetRowLeague>
															<BetRowMatch>
																<ValueDiv>{matchBet.match}</ValueDiv>
															</BetRowMatch>
															<BetRowSelected>
																<ValueDiv>{matchBet.betOnTeam}</ValueDiv>
															</BetRowSelected>
															<BetRowObjective>
																<ValueDiv>{matchBet.matchObjective}</ValueDiv>
															</BetRowObjective>
															<BetRowFloat>
																<ValueDiv>{matchBet.matchOdds}</ValueDiv>
															</BetRowFloat>
															<BetRowDate>
																<ValueDiv>{matchBet.matchDate}</ValueDiv>
															</BetRowDate>
															<BetRowFloat>
																<ValueDiv>{matchBet.betAmount}</ValueDiv>
															</BetRowFloat>
															<BetRowButton>
																<CloseOutlined
																	style={{ color: 'red' }}
																	onClick={() =>
																		RootStore.deleteMatchBet(index)
																	}
																/>
															</BetRowButton>
														</RowContainer>
														{index !== RootStore.matchBets.length - 1 && (
															<Divider />
														)}
													</div>
												)
											)}
									</BetContainer>
								</>
							)}
						</Observer>
					</DisplayBets>
				</div>
			</Modal>
		</div>
	)
}

export default observer(BetHistory)
