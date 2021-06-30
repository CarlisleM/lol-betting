import styled from 'styled-components'

const MatchWeek = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 30px;
	border-top: thick double;
	border-bottom: thick double;
	font-weight: 700;
`

const MatchSchedule = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid black;
`

const MatchScheduleTeamLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;
`

const MatchScheduleTime = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 40%;
	height: 100%;
`

// interface Props {
// 	test: any
// }

// Store.currentLeague.upcomingMatches

// const MatchScheduleBar = (props: Props) => {
const MatchScheduleBar = () => {
	const testLogoImage = (
		<img
			src={require('../images/template.png').default}
			height={'75%'}
			alt='Logo'
		/>
	)

	console.log('Local time: ', new Date().toLocaleDateString())
	let today = new Date().toLocaleDateString('en-US', {
		timeZone: 'America/Los_Angeles',
	})
	console.log('PST time: ', today)

	const weeks = ['1', '2', '3', '4']
	const matches = ['1', '2', '3']

	const TestName = () => {
		return (
			<>
				{weeks.map((week, weekIndex) => (
					<div key={weekIndex}>
						<MatchWeek>Week {week}</MatchWeek>

						{matches.map((match, matchIndex) => (
							<MatchSchedule
								key={matchIndex}
								style={{
									borderBottom:
										matchIndex < matches.length - 1
											? '1px solid black'
											: 'none',
								}}
							>
								<MatchScheduleTeamLogo>{testLogoImage}</MatchScheduleTeamLogo>
								<MatchScheduleTime>
									<span>Sunday</span>
									<span>16:00 PST</span>
									<span>19/12/2021</span>
								</MatchScheduleTime>
								<MatchScheduleTeamLogo>{testLogoImage}</MatchScheduleTeamLogo>
							</MatchSchedule>
						))}
					</div>
				))}
			</>
		)
	}

	return <TestName></TestName>
}

export default MatchScheduleBar
