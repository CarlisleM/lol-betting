const mappedDays = [
	['Mon', 'Monday'],
	['Tue', 'Tuesday'],
	['Wed', 'Wednesday'],
	['Thu', 'Thursday'],
	['Fri', 'Friday'],
	['Sat', 'Saturday'],
	['Sun', 'Sunday'],
]

export const mapAbvDayToFull = (day: string) => {
	const matchingDay = mappedDays.find((dayName) => dayName[0] === day)

	if (matchingDay) {
		return matchingDay[1]
	} else {
		return null
	}
}
