import styled from 'styled-components'
import Select from 'react-dropdown-select'
import RootStore from '../store'
import { mapTeamName } from '../helpers/mapTeamNames'
import { useState } from 'react'

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
	// const [selectValues, setSelectValues] = useState<any>([])

	// const onChange = (values: any) => {
	// 	setSelectValues(values)
	// }

	// const currentTeam = [{ value: props.selectedTeam, label: props.selectedTeam }]

	// props.selectedTeam && setSelectValues({ value: props.selectedTeam, label: props.selectedTeam })

	// const onSet = (values: any) => {
	// 	const newValue = values.map((val: any) => ({ value: 'xxx', label: 'xxx' }))

	// 	setSelectValues(newValue)
	// }

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
					style={{ height: 200, width: 200, backgroundColor: 'red' }}
					onClick={() => {
						console.log('clicked')
						console.log('selectedValues: ', selectValues)
						onSet(['test'])
					}}
				/> */}
				<Select
					style={{ width: 280, maxHeight: 540 }}
					options={
						// [
						// 	{ value: 'test', label: 'test' },
						// 	{ value: 'test2', label: 'test2' },
						// 	{ value: 'tset3', label: 'tset3' },
						// 	{ value: 'test4', label: 'test4' },
						// ]
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
					values={
						[...[{ value: props.selectedTeam, label: props.selectedTeam }]]
						// [{ value: props.selectedTeam, label: props.selectedTeam }]
					}
					onChange={(value: any) => {
						// onChange(value)
						mapTeamName(value[0].value) && props.teamNumber === 1
							? RootStore.updateSelectedTeamOne(mapTeamName(value[0].value))
							: RootStore.updateSelectedTeamTwo(mapTeamName(value[0].value))
					}}
				/>
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
