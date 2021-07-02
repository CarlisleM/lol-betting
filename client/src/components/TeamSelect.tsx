import styled from 'styled-components'
import Select from 'react-dropdown-select'
import RootStore from '../store'

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
`

interface Props {
	teams: any
	selectedTeam: any
}

const TeamSelect = (props: Props) => {
	const options = ['one', 'two', 'three']

	return (
		<TeamSelectContainer>
			{props.selectedTeam !== null ? (
				<TeamLogo>
					<img
						style={{ objectFit: 'contain', width: '85%', height: '85%' }}
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
				<Select
					options={
						props.teams !== null && RootStore.currentLeague !== null
							? props.teams.filter(
									(team: any) => team.league_id === RootStore.currentLeague
							  )
							: []
					}
					values={[]}
					onChange={(value: any) => console.log(value)}
				/>
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
