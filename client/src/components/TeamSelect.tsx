import styled from 'styled-components'
import RootStore from '../store'
import Select from 'react-select'
import {
	mapAbvTeamNameToFull,
	mapFullTeamNameToAbv,
} from '../helpers/mapTeamNames'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
`

interface Props {
	teamNumber: number
	teams: any
	selectedTeam: any
	otherSelectedTeam: any
}

const TeamSelect = (props: Props) => {
	const handleChange = (value: any) => {
		mapFullTeamNameToAbv(value.value) !== null
			? mapFullTeamNameToAbv(value.value) && props.teamNumber === 1
				? RootStore.updateSelectedTeamOne(mapFullTeamNameToAbv(value.value))
				: RootStore.updateSelectedTeamTwo(mapFullTeamNameToAbv(value.value))
			: toast.error('Unable to find selected team data', {
					position: 'bottom-center',
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
			  })
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
						style={{
							objectFit: 'contain',
							width: '85%',
							height: '85%',
							opacity: '0.25',
							filter:
								'invert(0%) sepia(0%) saturate(4433%) hue-rotate(224deg) brightness(96%) contrast(106%)',
						}}
						src={require(`../images/teams/placeholder.png`).default}
						alt={`${props.selectedTeam} Logo`}
					/>
				</TeamLogo>
			)}

			<TeamSelectDropdown>
				<StyledSelect
					isSearchable={true}
					maxMenuHeight={540}
					options={
						props.teams !== null && RootStore.selectedLeague !== null
							? props.teams
									.filter(
										(team: any) =>
											team.league_id === RootStore.selectedLeague &&
											team.name !== mapAbvTeamNameToFull(props.selectedTeam) &&
											team.name !==
												mapAbvTeamNameToFull(props.otherSelectedTeam)
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
			<ToastContainer />
		</TeamSelectContainer>
	)
}

export default TeamSelect
