import { Instance, types } from 'mobx-state-tree'
import { MatchBet } from './models/matchBet'

const Store = types
	.model({
		selectedLeague: types.maybeNull(types.number),
		selectedTeamOne: types.maybeNull(types.string),
		selectedTeamTwo: types.maybeNull(types.string),
		matchBets: types.array(MatchBet),
	})

	.actions((self) => ({
		updateSelectedLeague: (leagueId: number) => {
			self.selectedLeague = leagueId
		},
		updateSelectedTeamOne: (team: string | null) => {
			self.selectedTeamOne = team
		},
		updateSelectedTeamTwo: (team: string | null) => {
			self.selectedTeamTwo = team
		},
		createMatchBet: (matchBet: any) => {
			self.matchBets.push(matchBet)
		},
		deleteMatchBet: (index: number) => {
			self.matchBets.splice(index, 1)
		},
	}))

const RootStore = Store.create()

export default RootStore

export interface IStore extends Instance<typeof Store> {}
