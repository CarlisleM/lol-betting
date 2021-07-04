import styled from 'styled-components'
import RootStore from '../store'
import Select from 'react-select'
import {
	mapAbvTeamNameToFull,
	mapFullTeamNameToAbv,
} from '../helpers/mapTeamNames'

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

const StyledSelect = styled(Select)`
	width: 280px;
	max-height: 540px; // Not currently working
`

interface Props {
	teamNumber: number
	teams: any
	selectedTeam: any
}

const TeamSelect = (props: Props) => {
	const handleChange = (value: any) => {
		// Whats happening is that if mapTeamName is null it always goes to the second option
		mapFullTeamNameToAbv(value.value) !== null &&
			(mapFullTeamNameToAbv(value.value) && props.teamNumber === 1
				? RootStore.updateSelectedTeamOne(mapFullTeamNameToAbv(value.value))
				: RootStore.updateSelectedTeamTwo(mapFullTeamNameToAbv(value.value)))
	}

	if (props.teams !== null) {
		console.log(
			'just match league: ',
			props.teams.filter(
				(team: any) => team.league_id === RootStore.selectedLeague
			)
		)
		console.log(
			'just match selected name: ',
			props.teams.filter(
				(team: any) => team.name === mapAbvTeamNameToFull(props.selectedTeam)
			)
		)
		console.log(
			'match both: ',
			props.teams.filter(
				(team: any) =>
					team.league_id === RootStore.selectedLeague &&
					team.name !== mapAbvTeamNameToFull(props.selectedTeam)
			)
		)

		console.log(
			'match both one after another: ',
			props.teams
				.filter((team: any) => team.league_id === RootStore.selectedLeague)
				.filter(
					(team: any) => team.name !== mapAbvTeamNameToFull(props.selectedTeam)
				)
		)
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
				<StyledSelect
					isSearchable={true}
					options={
						props.teams !== null && RootStore.selectedLeague !== null
							? props.teams
									.filter(
										(team: any) =>
											team.league_id === RootStore.selectedLeague &&
											team.name !== mapAbvTeamNameToFull(props.selectedTeam)
									)
									.map((team: any) => {
										return { value: team.name, label: team.name }
									})
							: []
					}
					value={{
						value: props.selectedTeam,
						label: mapAbvTeamNameToFull(props.selectedTeam),
					}}
					onChange={(value: any) => handleChange(value)}
				/>
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
