import styled from 'styled-components'

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const TableHeaderContainer = styled.div`
	display: flex;
`

const TableHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
`

const TableBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 80%;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

const TableBodyRow = styled.div`
	display: flex;
`

const TableBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 40px;
	border-right: 1px solid black;
`

const TableFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 40px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
`

const TableFooterContainer = styled.div`
	display: flex;
`

const TeamMatchData = () => {
	const results = [
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
		'1',
	]

	return (
		<TableContainer>
			<TableHeaderContainer>
				<TableHeader style={{ width: 100, borderLeft: '1px solid black' }}>
					Game Date
				</TableHeader>
				<TableHeader>VS</TableHeader>
				<TableHeader>FB</TableHeader>
				<TableHeader>FT</TableHeader>
				<TableHeader>FD</TableHeader>
				<TableHeader>FI</TableHeader>
				<TableHeader style={{ width: 60 }}>FBaron</TableHeader>
				<TableHeader>W/L</TableHeader>
			</TableHeaderContainer>

			<TableBodyContainer>
				{results.map((result, index) => (
					<TableBodyRow>
						<TableBody
							style={{
								width: 100,
								borderLeft: '1px solid black',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							2021-06-04
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'salmon',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							tsm
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'salmon',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							X
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'lightgreen',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							X
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'lightgreen',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							/
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'salmon',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							X
						</TableBody>
						<TableBody
							style={{
								width: 60,
								backgroundColor: 'lightgreen',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							/
						</TableBody>
						<TableBody
							style={{
								backgroundColor: 'salmon',
								borderBottom:
									index < results.length - 1 ? '1px solid black' : 'none',
							}}
						>
							/
						</TableBody>
					</TableBodyRow>
				))}
			</TableBodyContainer>

			<TableFooterContainer>
				<TableFooter style={{ width: 151, borderLeft: '1px solid black' }}>
					0%
				</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter>0%</TableFooter>
				<TableFooter style={{ width: 60 }}>0%</TableFooter>
				<TableFooter>0%</TableFooter>
			</TableFooterContainer>
		</TableContainer>
	)
}

export default TeamMatchData
