import { Instance, SnapshotIn, types } from 'mobx-state-tree'

const MatchResults = types.model('MatchResults', {
	gameId: types.number,
	firstBlood: types.maybeNull(types.string),
	firstTower: types.maybeNull(types.string),
	firstDragon: types.maybeNull(types.string),
	firstInhibitor: types.maybeNull(types.string),
	firstBaron: types.maybeNull(types.string),
	winner: types.maybeNull(types.string),
	loser: types.maybeNull(types.string),
})

export default MatchResults

export interface IMatchResults extends Instance<typeof MatchResults> {}
export interface IMatchResultsSnapshot
	extends SnapshotIn<typeof MatchResults> {}
