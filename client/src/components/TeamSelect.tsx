import styled from 'styled-components'
import RootStore from '../store'
import { useState } from 'react'
import Select from 'react-select'
import { mapTeamName } from '../helpers/mapTeamNames'

const TeamSelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const TeamLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75%;
`

const TeamSelectDropdown = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25%;
	padding-top: 5px;
`

interface Props {
	teamNumber: number
	teams: any
	selectedTeam: any
}

const TeamSelect = (props: Props) => {
	// const options = [
	// 	{ value: 'chocolate', label: 'Chocolate' },
	// 	{ value: 'strawberry', label: 'Strawberry' },
	// 	{ value: 'vanilla', label: 'Vanilla' },
	// ]

	// const [value, setValue] = useState<any>('one')

	const handleChange = (value: any) => {
		console.log('called')
		console.log('value: ', value)
		mapTeamName(value[0].value) && props.teamNumber === 1
			? RootStore.updateSelectedTeamOne(mapTeamName(value[0].value))
			: RootStore.updateSelectedTeamTwo(mapTeamName(value[0].value))

		// mapTeamName(value[0].value) && props.teamNumber === 1 ?	setValue(RootStore.selectedTeamOne) : setValue(RootStore.selectedTeamTwo)
	}

	return (
		<TeamSelectContainer>
			{props.selectedTeam !== null ? (
				<TeamLogo>
					<img
						style={{
							objectFit: 'contain',
							maxWidth: 280,
							width: '85%',
							height: '85%',
						}}
						src={require(`../images/teams/${props.selectedTeam}.png`).default}
						alt={`${props.selectedTeam} Logo`}
					/>
				</TeamLogo>
			) : (
				<TeamLogo>
					<img
						style={{ objectFit: 'contain', width: '85%', height: '85%' }}
						src={require(`../images/teams/placeholder.png`).default}
						alt={`${props.selectedTeam} Logo`}
					/>
				</TeamLogo>
			)}

			<TeamSelectDropdown>
				{/* <div
					style={{ width: 200, height: 200, backgroundColor: 'red' }}
					onClick={() => {
						console.log('clicked')
						RootStore.updateSelectedTeamOne('test')
						setValue({ value: 'xxxx', label: 'xxxx' })
						// props.setValue(RootStore.selectedTeamOne)
					}}
				/> */}
				<Select
					width={'200px'}
					// onInputChange={() => ['test', ...options]}
					// defaultInputValue={'xxx'}
					value={{ value: props.selectedTeam, label: props.selectedTeam }}
					onChange={(value: any) => handleChange(value)}
					options={
						props.teams !== null && RootStore.selectedLeague !== null
							? props.teams
									.filter(
										(team: any) => team.league_id === RootStore.selectedLeague
									)
									.map((team: any) => {
										return { value: team.name, label: team.name }
									})
							: []
					}
				/>

				{/* <Select
					style={{ width: 280, maxHeight: 540 }}
					options={
						props.teams !== null && RootStore.selectedLeague !== null
							? props.teams
									.filter(
										(team: any) => team.league_id === RootStore.selectedLeague
									)
									.map((team: any) => {
										return { value: team.name, label: team.name }
									})
							: []
					}
					searchable={true}
					keepSelectedInList={false} // Test
					values={[]}
					onChange={(value: any) => {
						mapTeamName(value[0].value) && props.teamNumber === 1
							? RootStore.updateSelectedTeamOne(mapTeamName(value[0].value))
							: RootStore.updateSelectedTeamTwo(mapTeamName(value[0].value))
					}}
				/> */}
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
