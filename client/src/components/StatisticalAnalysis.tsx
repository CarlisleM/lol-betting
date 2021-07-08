import { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import Modal from './Modal/Modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import RootStore from '../store'
import { v4 as uuidv4 } from 'uuid'
import { Observer } from 'mobx-react'
import {
	CloseOutlined,
	DollarCircleOutlined,
	PlusCircleOutlined,
} from '@ant-design/icons'

const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const StyledSelect = styled(Select)`
	width: 90%;
`

const TeamSelect = styled.div`
	display: flex;
	justify-content: center;
	width: 17%;
`

const ObjectiveSelect = styled.div`
	display: flex;
	justify-content: center;
	width: 17%;
`

const FloatEntry = styled.div`
	display: flex;
	justify-content: center;
	width: 9%;
`

const DateSelect = styled.div`
	text-align: center;
	width: 10%;
`

const ButtonContainer = styled.div`
	width: 4%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledDatePicker = styled(DatePicker)`
	width: 80%;
	height: 32px;
`

const ValueDiv = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
`

const DateDiv = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
`

const Divider = styled.div`
	border-bottom: 1px solid black;
	opacity: 0.25;
	margin: 5px 0px;
`

interface Props {
	teams: any
}

const StatisticalAnalysis = (props: Props) => {
	const [show, setShow] = useState(false)
	const [teamOne, setTeamOne] = useState()
	const [teamTwo, setTeamTwo] = useState()
	const [betOnTeam, setBetOnTeam] = useState()
	const [objective, setObjective] = useState()
	const [odds, setOdds] = useState<number>(1.75)
	const [matchDate, setMatchDate] = useState(new Date())
	const [betAmount, setBetAmount] = useState<number>(25)

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					flexDirection: 'column',
					textAlign: 'center',
					color: 'rgba(0, 0, 0, 0.25)',
				}}
			>
				<span style={{ fontSize: 30 }}>
					Statistical Analysis
					<DollarCircleOutlined
						style={{ paddingLeft: 15, opacity: 1, color: 'green' }}
						onClick={() => {
							setShow(true)
						}}
					/>
					<Modal onClose={() => setShow(false)} show={show}>
						<RowContainer>
							<TeamSelect>
								<ValueDiv>Team One</ValueDiv>
							</TeamSelect>
							<TeamSelect>
								<ValueDiv>Team Two</ValueDiv>
							</TeamSelect>
							<TeamSelect>
								<ValueDiv>Selected Team</ValueDiv>
							</TeamSelect>
							<ObjectiveSelect>
								<ValueDiv>Objective</ValueDiv>
							</ObjectiveSelect>
							<FloatEntry>
								<ValueDiv>Odds</ValueDiv>
							</FloatEntry>
							<DateSelect>
								<ValueDiv>Game Date</ValueDiv>
							</DateSelect>
							<FloatEntry>
								<ValueDiv>Bet Amount</ValueDiv>
							</FloatEntry>
							<ButtonContainer style={{ height: 30 }} />
						</RowContainer>

						<RowContainer
							style={{
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<TeamSelect>
								<StyledSelect
									placeholder={'Team 1'}
									isSearchable={true}
									maxMenuHeight={540}
									options={
										// [
										// 	{ value: 'test1', label: 'test1' },
										// 	{ value: 'test2', label: 'test2' },
										// ]
										props.teams !== null
											? props.teams
													.filter((team: any) => team !== teamTwo)
													.map((team: any) => {
														return { value: team.name, label: team.name }
													})
											: []
									}
									value={{
										value: teamOne,
										label: teamOne,
									}}
									onChange={(e: any) => setTeamOne(e.value)}
								/>
							</TeamSelect>

							<TeamSelect>
								<StyledSelect
									placeholder={'Team 2'}
									isSearchable={true}
									maxMenuHeight={540}
									options={
										// [
										// 	{ value: 'test1', label: 'test1' },
										// 	{ value: 'test2', label: 'test2' },
										// ]
										props.teams !== null
											? props.teams
													.filter((team: any) => team !== teamOne)
													.map((team: any) => {
														return { value: team.name, label: team.name }
													})
											: []
									}
									value={{
										value: teamTwo,
										label: teamTwo,
									}}
									onChange={(e: any) => setTeamTwo(e.value)}
								/>
							</TeamSelect>

							<TeamSelect>
								<StyledSelect
									placeholder={'Selected Team'}
									isSearchable={true}
									maxMenuHeight={540}
									options={
										// [
										// 	{ value: 'test1', label: 'test1' },
										// 	{ value: 'test2', label: 'test2' },
										// ]
										props.teams !== null
											? props.teams
													.filter(
														(team: any) => team === teamOne || team === teamTwo
													)
													.map((team: any) => {
														return { value: team.name, label: team.name }
													})
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

							<FloatEntry>
								<input
									style={{ width: '80%', height: 32 }}
									type='number'
									step='0.01'
									min='0'
									value={odds}
									onChange={(e: any) => setOdds(e.target.value)}
								/>
							</FloatEntry>

							<DateSelect>
								<StyledDatePicker
									selected={matchDate}
									onChange={(date: Date) => setMatchDate(date)}
								/>
							</DateSelect>

							<FloatEntry>
								<input
									style={{ width: '80%', height: 32 }}
									type='number'
									step='0.01'
									min='0'
									value={betAmount}
									onChange={(e: any) => setBetAmount(e.target.value)}
								/>
							</FloatEntry>
							<ButtonContainer
								style={{
									height: 30,
									cursor: 'pointer',
								}}
								onClick={() => {
									if (
										teamOne !== undefined &&
										teamTwo !== undefined &&
										betOnTeam !== undefined &&
										objective !== undefined &&
										odds !== undefined &&
										matchDate !== undefined &&
										betAmount !== undefined
									) {
										RootStore.createMatchBet({
											id: uuidv4(),
											teamOne: teamOne,
											teamTwo: teamTwo,
											betOnTeam: betOnTeam,
											matchObjective: objective,
											matchOdds: Number(odds),
											matchDate: matchDate.toLocaleDateString(), // Make this LA time (PST)
											betAmount: Number(betAmount),
										})
									}
								}}
							>
								<PlusCircleOutlined
									style={{ fontSize: '22px', color: 'green' }}
								/>
							</ButtonContainer>
						</RowContainer>

						<Observer>
							{() => (
								<>
									{RootStore.matchBets &&
										RootStore.matchBets.length > 0 &&
										RootStore.matchBets.map((matchBet: any, index: number) => (
											<div key={index}>
												<RowContainer
													style={{
														marginTop: index === 0 ? 5 : 0,
														backgroundColor:
															index % 2 === 0 ? 'whitesmoke' : 'beige',
													}}
												>
													<TeamSelect>
														<ValueDiv>{matchBet.teamOne}</ValueDiv>
													</TeamSelect>
													<TeamSelect>
														<ValueDiv>{matchBet.teamTwo}</ValueDiv>
													</TeamSelect>
													<TeamSelect>
														<ValueDiv>{matchBet.betOnTeam}</ValueDiv>
													</TeamSelect>
													<ObjectiveSelect>
														<ValueDiv>{matchBet.matchObjective}</ValueDiv>
													</ObjectiveSelect>
													<FloatEntry>
														<ValueDiv>{matchBet.matchOdds}</ValueDiv>
													</FloatEntry>
													<DateSelect>
														<DateDiv>{matchBet.matchDate}</DateDiv>
													</DateSelect>
													<FloatEntry>
														<ValueDiv>{matchBet.betAmount}</ValueDiv>
													</FloatEntry>
													<ButtonContainer>
														<CloseOutlined
															style={{ color: 'red' }}
															onClick={() => RootStore.deleteMatchBet(index)}
														/>
													</ButtonContainer>
												</RowContainer>
												{index !== RootStore.matchBets.length - 1 && (
													<Divider />
												)}
											</div>
										))}
								</>
							)}
						</Observer>
					</Modal>
				</span>
			</div>
		</>
	)
}

export default StatisticalAnalysis
