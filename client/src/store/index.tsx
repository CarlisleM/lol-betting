import { Instance, types } from 'mobx-state-tree'

const Store = types
	.model({
		currentLeague: types.maybeNull(types.number),
		selectedTeamOne: types.maybeNull(types.string),
		selectedTeamTwo: types.maybeNull(types.string),
	})

	.actions((self) => ({
		updateSelectedLeague: (leagueId: number) => {
			self.currentLeague = leagueId
		},
		updateSelectedTeamOne: (team: string | null) => {
			self.selectedTeamOne = team
		},
		updateSelectedTeamTwo: (team: string | null) => {
			self.selectedTeamTwo = team
		},
	}))

const RootStore = Store.create()

export default RootStore

export interface IStore extends Instance<typeof Store> {}
