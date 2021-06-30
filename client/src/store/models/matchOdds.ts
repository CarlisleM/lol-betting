import { Instance, SnapshotIn, types } from 'mobx-state-tree'

const MatchOdds = types.model('MatchOdds', {
	gameId: types.number,
	teamOne: types.maybeNull(types.string),
	teamTwo: types.maybeNull(types.string),
	teamOneWin: types.maybeNull(types.number),
	teamTwoWin: types.maybeNull(types.number),
	teamOneFirstBlood: types.maybeNull(types.number),
	teamTwoFirstBlood: types.maybeNull(types.number),
	teamOneFt5Kills: types.maybeNull(types.number),
	teamTwoFt5Kills: types.maybeNull(types.number),
	teamOneFt10Kills: types.maybeNull(types.number),
	teamTwoFt10Kills: types.maybeNull(types.number),
	oddKills: types.maybeNull(types.number),
	evenKills: types.maybeNull(types.number),
})

export default MatchOdds

export interface IMatchOdds extends Instance<typeof MatchOdds> {}
export interface IMatchOddsSnapshot extends SnapshotIn<typeof MatchOdds> {}
