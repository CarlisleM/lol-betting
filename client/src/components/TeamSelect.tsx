import styled from 'styled-components'
import Select from 'react-dropdown-select'
import RootStore from '../store'
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
	return (
		<TeamSelectContainer>
			{props.selectedTeam !== null ? (
				<TeamLogo>
					<img
						style={{ objectFit: 'contain', width: '85%', height: '85%' }}
						src={require(`../images/teams/${props.selectedTeam}.png`).default}
						// src={
						// 	require(`../images/teams/${
						// 		props.teamNumber === 1
						// 			? RootStore.selectedTeamOne
						// 			: RootStore.selectedTeamTwo
						// 	}.png`).default
						// }
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
				<Select
					style={{ width: 280 }}
					options={
						props.teams !== null && RootStore.currentLeague !== null
							? props.teams
									.filter(
										(team: any) => team.league_id === RootStore.currentLeague
									)
									.map((team: any) => {
										return { value: team.name, label: team.name }
									})
							: []
					}
					values={[]}
					onChange={(value: any) => {
						console.log('selected: ', value[0].value)
						console.log('teamNumber: ', props.teamNumber)
						console.log(mapTeamName(value[0].value))
						mapTeamName(value[0]) && props.teamNumber === 1
							? RootStore.updateSelectedTeamOne(mapTeamName(value[0].value))
							: RootStore.updateSelectedTeamTwo(mapTeamName(value[0].value))
					}}
				/>
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
