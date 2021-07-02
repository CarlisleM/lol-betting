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

interface Props {
	team: any
}

const TeamSelect = (props: Props) => {
	const options = ['one', 'two', 'three']

	return (
		<TeamSelectContainer>
			{props.team !== null && (
				<TeamLogo>
					<img
						style={{ objectFit: 'contain', width: '85%', height: '85%' }}
						src={require(`../images/teams/${props.team}.png`).default}
						alt={`${props.team} Logo`}
					/>
				</TeamLogo>
			)}

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
