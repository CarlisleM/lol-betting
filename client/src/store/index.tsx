import { cast, Instance, types } from 'mobx-state-tree'
import League from './models/league'
import Upcoming, { IUpcoming } from './models/upcoming'

const Store = types
	.model({
		leagues: types.array(League),
		currentLeague: types.maybeNull(types.number),
		upcomingGames: types.array(types.maybeNull(Upcoming)),
	})

	.actions((self) => ({
		updateSelectedLeague: (leagueId: number) => {
			self.currentLeague = leagueId
		},
		updateUpcomingGames: (upcomingGamesResult: IUpcoming[]) => {
			self.upcomingGames = cast(upcomingGamesResult)
		},
	}))

const RootStore = Store.create()

export default RootStore

export interface IStore extends Instance<typeof Store> {}
