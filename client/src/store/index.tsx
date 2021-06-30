import { Instance, types } from 'mobx-state-tree'
import League from './models/league'

const Store = types
	.model({
		leagues: types.array(League),
		currentLeague: types.maybeNull(types.reference(League)),
	})

	.actions((self) => ({
		updateSelectedLeague: (leagueId: number) => {
			console.log(self.leagues)
			self.currentLeague =
				self.leagues.find((league) => league.id === leagueId) || null
		},
	}))
	.actions((self) => ({}))

const RootStore = Store.create({})

export default RootStore

export interface IStore extends Instance<typeof Store> {}
