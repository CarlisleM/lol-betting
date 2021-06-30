import { Instance, SnapshotIn, types } from 'mobx-state-tree'

const Upcoming = types.model('Upcoming', {
	match_week: types.number,
	league_id: types.number,
	match_day: types.string,
	game_date: types.string,
	match_time: types.string,
	blue_team: types.string,
	red_team: types.string,
})

export default Upcoming

export interface IUpcoming extends Instance<typeof Upcoming> {}
export interface IUpcomingSnapshot extends SnapshotIn<typeof Upcoming> {}
