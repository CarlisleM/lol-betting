import { types, Instance, SnapshotIn } from 'mobx-state-tree'

export const MatchBet = types.model('MatchBet', {
	id: types.identifier,
	league: types.string,
	match: types.string,
	map: types.string,
	betOnTeam: types.string,
	matchObjective: types.string,
	matchOdds: types.number,
	matchDate: types.string,
	betAmount: types.number,
})

export interface IMatchBet extends Instance<typeof MatchBet> {}
export interface IMatchBetSnapshot extends SnapshotIn<typeof MatchBet> {}
