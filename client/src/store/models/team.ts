import { Instance, SnapshotIn, types } from 'mobx-state-tree'

const Team = types.model('Team', {
	id: types.maybeNull(types.number),
	name: types.maybeNull(types.string),
	league: types.maybeNull(types.number),
	logo: types.maybeNull(types.string),
})

export default Team

export interface ITeam extends Instance<typeof Team> {}
export interface ITeamSnapshot extends SnapshotIn<typeof Team> {}
