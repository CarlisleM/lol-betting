import styled from 'styled-components'
import { sampleDataStructure } from '../sampleData'
import RootStore from '../store'

const League = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid black;
`

const LeagueBar = () => {
	const leagues = [
		require('../images/leagues/lcs.png').default,
		require('../images/leagues/na_academy.png').default,
		require('../images/leagues/lec.png').default,
		require('../images/leagues/lck.png').default,
		require('../images/leagues/pcs.png').default,
		require('../images/leagues/lfl.png').default,
		require('../images/leagues/superliga.png').default,
		require('../images/leagues/ultraliga.png').default,
		require('../images/leagues/lla.png').default,
		require('../images/leagues/opl.png').default,
		require('../images/leagues/ljl.png').default,
		require('../images/leagues/tcl.png').default,
		require('../images/leagues/vcs.png').default,
		require('../images/leagues/cblol.png').default,
	]

	return (
		<>
			{console.log(sampleDataStructure)}
			{leagues.map((league, index) => (
				<League
					key={index}
					onClick={() => {
						console.log('clicked')
						RootStore.updateSelectedLeague(index)
						console.log(RootStore.currentLeague)
					}}
				>
					<img src={league} height={'85%'} alt='Logo'></img>
				</League>
			))}
		</>
	)
}

export default LeagueBar
