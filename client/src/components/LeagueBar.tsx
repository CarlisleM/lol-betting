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
	display: flex;
	justify-content: center;
	align-items: center;
`

interface Props {
	leagues: any
	games: any
	upcomingGames: any
}

const LeagueBar = (props: Props) => {
	const leagueLogo = (leagueName: any) => (
		<Logo>
			<img
				style={{
					objectFit: 'contain',
					width: '90%',
					height: '90%',
				}}
				src={
					require(`../images/leagues/${leagueName.toLowerCase()}.png`).default
				}
				alt={`${leagueName}`}
			/>
		</Logo>
	)

	return (
		<>
			{props.leagues &&
				props.leagues.map((league: any, index: number) => (
					<League
						key={index}
						onClick={() => {
							// Set the two teams to the teams of the first upcoming game
							if (
								league.id !== RootStore.selectedLeague &&
								props.upcomingGames.filter(
									(game: any) => game.league_id === league.id
								).length > 0
							) {
								console.log('entered upcoming one')
								RootStore.updateSelectedTeamOne(
									props.upcomingGames.filter(
										(game: any) => game.league_id === league.id
									)[0].blue_team
								)
								RootStore.updateSelectedTeamTwo(
									props.upcomingGames.filter(
										(game: any) => game.league_id === league.id
									)[0].red_team
								)
							} else {
								console.log('entered no upcoming one')
								RootStore.updateSelectedTeamOne(
									props.games.filter(
										(game: any) => game.league_id === league.id
									)[0].blue_team
								)
								RootStore.updateSelectedTeamTwo(
									props.games.filter(
										(game: any) => game.league_id === league.id
									)[0].red_team
								)
							}
							// Update the current league
							RootStore.updateSelectedLeague(league.id)

							console.log('Set current league to: ', RootStore.selectedLeague)
						}}
					>
						{leagueLogo(league.name)}
					</League>
				))}
		</>
	)
}

export default LeagueBar
