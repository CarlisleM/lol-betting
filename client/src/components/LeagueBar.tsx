import { useEffect, useState } from 'react'
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

interface Props {
	leagues: any
}

const LeagueBar = (props: Props) => {
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
						<div style={{ height: '90%', width: '90%' }}>
							<img src={league.league_image} height={'100%'} alt='Logo'></img>
						</div>
					</League>
				))}
		</>
	)
}

export default LeagueBar
