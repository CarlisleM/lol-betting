import styled from 'styled-components'
import MatchScheduleBar from './components/MatchScheduleBar'
import LeagueBar from './components/LeagueBar'
import TeamSelect from './components/TeamSelect'
import TeamMatchData from './components/TeamMatchData'
import StatisticalAnalysis from './components/StatisticalAnalysis'
import { useEffect, useState } from 'react'
// import upcomingService from '../../services/requests'

const Container = styled.div`
	display: flex;
	flex-direction: row;
`

const LeagueBarContainer = styled.div`
	width: 60px;
	height: 100vh;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

const CenterInformationContainer = styled.div`
	width: calc(100% - 18% - 60px);
	height: 100vh;
	border-left: 1px solid black;
	border-right: 1px solid black;
`

const Teams = styled.div`
	display: flex;
	width: 100%;
	height: 85%;
`

const IndividualTeamContainer = styled.div`
	width: 100%;
	height: 100%;
`

const TeamSelectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20%;
	width: 100%;
`

const TeamDataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80%;
`

const StatsAnalysis = styled.div`
	width: 100%;
	height: calc(15% - 1px);
	border-top: 1px solid black;
`

const MatchScheduleBarContainer = styled.div`
	width: 18%;
	height: 100vh;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

function App() {
	// const [data, setData] = useState(null)
	const [data2, setData2] = useState(null)

	useEffect(() => {
		fetch('/api/upcoming')
			.then((res) => res.json())
			.then((data2) => setData2(data2))
		// fetch('/games')
		// 	.then((res) => res.json())
		// 	.then((data) => setData(data))
	}, [])

	// const [upcoming, setUpcoming] = useState([])

	// useEffect(() => {
	// 	upcomingService.getAllUpcomingGames().then((data: any) => {
	// 		setUpcoming(data.upcoming)
	// 	})
	// }, [])

	return (
		<div className='App'>
			<Container>
				{/* Left Side Bar */}
				<LeagueBarContainer>
					<LeagueBar></LeagueBar>
				</LeagueBarContainer>
				{/* Center Information */}
				<CenterInformationContainer>
					<Teams>
						{/* Team One */}
						<IndividualTeamContainer>
							{/* {console.log(data2)}
							{console.log(data)}
							<p>{!data ? 'Loading...' : data}</p> */}
							<TeamSelectContainer>
								<TeamSelect></TeamSelect>
							</TeamSelectContainer>
							<TeamDataContainer>
								<TeamMatchData></TeamMatchData>
							</TeamDataContainer>
						</IndividualTeamContainer>
						{/* Team Two */}
						<IndividualTeamContainer>
							<TeamSelectContainer>
								<TeamSelect></TeamSelect>
							</TeamSelectContainer>
							<TeamDataContainer>
								<TeamMatchData></TeamMatchData>
							</TeamDataContainer>
						</IndividualTeamContainer>
					</Teams>
					{/* Bottom Bar */}
					<StatsAnalysis>
						<StatisticalAnalysis></StatisticalAnalysis>
					</StatsAnalysis>
				</CenterInformationContainer>
				{/* Right Side Bar */}
				<MatchScheduleBarContainer>
					{data2}
					<MatchScheduleBar></MatchScheduleBar>
				</MatchScheduleBarContainer>
			</Container>
		</div>
	)
}

export default App
