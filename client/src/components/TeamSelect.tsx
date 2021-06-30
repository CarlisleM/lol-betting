import styled from 'styled-components'
import Select from 'react-dropdown-select'

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

// Store.currentLeague.leagueTeams
// Store.currentLeague.currentMatch.teamOne.name
// Store.currentLeague.currentMatch.teamOne.logo

// Store.currentLeague.currentMatch.teamTwo.name
// Store.currentLeague.currentMatch.teamTwo.logo

const TeamSelect = () => {
	const testLogoImage = (
		<img
			src={require('../images/template.png').default}
			height={'75%'}
			alt='Logo'
		/>
	)

	const options = ['one', 'two', 'three']

	return (
		<TeamSelectContainer>
			<TeamLogo>{testLogoImage}</TeamLogo>
			<TeamSelectDropdown>
				<Select
					options={options}
					values={[]}
					onChange={(value: any) => console.log(value)}
				/>
			</TeamSelectDropdown>
		</TeamSelectContainer>
	)
}

export default TeamSelect
