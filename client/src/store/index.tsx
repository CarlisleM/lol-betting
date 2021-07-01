import { Instance, types } from 'mobx-state-tree'
import League from './models/league'

const Store = types
	.model({
		leagues: types.array(League),
		currentLeague: types.maybeNull(types.number),
	})

	.actions((self) => ({
		updateSelectedLeague: (leagueId: number) => {
			self.currentLeague = leagueId
		},
	}))
	.actions((self) => ({}))

const RootStore = Store.create()

export default RootStore

export interface IStore extends Instance<typeof Store> {}
