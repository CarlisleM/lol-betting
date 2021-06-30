import { Instance, SnapshotIn, types } from 'mobx-state-tree'
import MatchOdds from './matchOdds'
import MatchResults from './matchResults'
import Team from './team'

const Match = types.model('Match', {
	league: types.number,
	teamOne: Team,
	teamTwo: Team,
	date: types.maybeNull(types.string),
	results: types.maybeNull(MatchResults),
	odds: types.maybeNull(MatchOdds),
})

export default Match

export interface IMatch extends Instance<typeof Match> {}
export interface IMatchSnapshot extends SnapshotIn<typeof Match> {}
