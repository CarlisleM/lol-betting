import { Instance, SnapshotIn, types } from 'mobx-state-tree'
import Match from './match'
import Team from './team'
import Upcoming from './upcoming'

const League = types.model('League', {
	id: types.number,
	upcomingGames: types.maybeNull(types.array(Upcoming)),
	leagueTeams: types.array(Team),
	currentMatch: types.maybeNull(Match),
})

export default League

export interface ILeague extends Instance<typeof League> {}
export interface ILeagueSnapshot extends SnapshotIn<typeof League> {}
