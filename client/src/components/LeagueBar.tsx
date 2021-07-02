import styled from 'styled-components'
import RootStore from '../store'

const League = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid black;
`

const Logo = styled.div`
	display: 'flex';
	justify-content: 'center';
	align-items: 'center';
`

interface Props {
	leagues: any
}

const LeagueBar = (props: Props) => {
	const leagueLogo = (leagueName: any) => (
		<img
			style={{ objectFit: 'contain', width: '90%', height: '90%' }}
			src={require(`../images/leagues/${leagueName.toLowerCase()}.png`).default}
			alt={`${leagueName}`}
		/>
	)

	return (
		<>
			{props.leagues &&
				props.leagues.map((league: any, index: number) => (
					<League
						key={index}
						onClick={() => {
							RootStore.updateSelectedLeague(league.id)
						}}
					>
						<Logo>{leagueLogo(league.name)}</Logo>
					</League>
				))}
		</>
	)
}

export default LeagueBar
