interface Props {
	teams: any
}

const StatisticalAnalysis = (props: Props) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					flexDirection: 'column',
					textAlign: 'center',
					color: 'rgba(0, 0, 0, 0.25)',
				}}
			>
				<span style={{ fontSize: 30 }}>Statistical Analysis</span>
			</div>
		</>
	)
}

export default StatisticalAnalysis
