import Select from 'react-select'
import styled from 'styled-components'

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const StyledSelect = styled(Select)`
	width: 100%;
`

export const TeamSelect = styled.div`
	display: flex;
	justify-content: center;
	width: 47.5%;
`

export const TeamSelectLabel = styled.div`
	width: 47.5%;
	font-weight: 700;
`

export const LeagueSelect = styled.div`
	width: 25%;
	display: flex;
	justify-content: center;
`

export const LeagueSelectLabel = styled.div`
	width: 25%;
	font-weight: 700;
`

export const MatchSelect = styled.div`
	width: 52.5%;
	display: flex;
	justify-content: center;
`

export const MapSelectLabel = styled.div`
	width: 17.5%;
	font-weight: 700;
`

export const MapSelect = styled.div`
	width: 17.5%;
`

export const MatchSelectLabel = styled.div`
	width: 52.5%;
	font-weight: 700;
`

export const ObjectiveSelect = styled.div`
	display: flex;
	justify-content: center;
	width: 47.5%;
`

export const ObjectiveSelectLabel = styled.div`
	width: 47.5%;
	font-weight: 700;
`

export const FloatLabel = styled.div`
	display: flex;
	width: 47.5%;
	font-weight: 700;
`

export const FloatEntry = styled.div`
	display: flex;
	justify-content: center;
	width: 47.5%;
`

export const DateSelect = styled.div`
	width: 47.5%;
	font-weight: 700;
`

export const StyledDateSelect = styled.div`
	width: 100%;
	height: 34px;
	border: 1px solid hsl(0, 0%, 90%);
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: hsl(0, 0%, 95%);
	font-weight: 400;
`

export const HeaderLabel = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	font-weight: 700;
`

export const ValueDiv = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
`

export const Divider = styled.div`
	border-bottom: 1px solid hsl(0, 0%, 80%);
	margin: 5px 0px;
`

export const HeaderRow = styled.div`
	display: flex;
	align-items: center;
	width: 65%;
	height: 50px;
	background-color: pink;
`

export const BodyRow = styled.div`
	display: flex;
	align-items: center;
	width: 65%;
	height: 50px;
	background-color: lightcoral;
	border-bottom: 1px solid black;
`

export const FooterRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 65%;
	height: 50px;
	background-color: aquamarine;
`

export const TeamDiv = styled.div`
	display: flex;
	align-items: center;
	width: 17%;
	height: 100%;
`

export const ObjectiveDiv = styled.div`
	display: flex;
	align-items: center;
	width: 13%;
	height: 100%;
`

export const FloatDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9%;
	height: 100%;
`

export const DateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10%;
	height: 100%;
`

export const ResultDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8%;
	height: 100%;
`

export const CreateBet = styled.div`
	width: 33.75%;
	height: 100px;
`

export const DisplayBets = styled.div`
	width: 63.75%;
	height: 100px;
`

export const CreateBetRow = styled.div`
	display: flex;
	justify-content: space-between;
`

export const CreateBetRowLabels = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 7px;
	padding-bottom: 3px;
`

export const BetRowLeague = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 11%;
`

export const BetRowMatch = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
`

export const BetRowSelected = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18%;
`

export const BetRowObjective = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18%;
`

export const BetRowDate = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 17%;
`

export const BetRowFloat = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 13%;
`

export const BetRowButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5%;
`

export const BetContainer = styled.div`
	height: 216px;
	overflow: scroll;
	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
`

export const StyledInput = styled.input`
	&:disabled {
		border: 1px solid hsl(0, 0%, 90%);
		background-color: hsl(0, 0%, 95%);
	}

	&:enabled {
		border: 1px solid hsl(0, 0%, 80%);
	}

	&:focus {
		outline: 0 !important;
		border: 1px solid #2684ff;
		box-shadow: 0 0 0 1px #2684ff;
	}
`
