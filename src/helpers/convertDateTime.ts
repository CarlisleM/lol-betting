export const convertDateToPST = (date: any) => {
	const newDate =
		date.split('-')[1] +
		'/' +
		date.split('T')[0].split('-')[2] +
		'/' +
		date.split('T')[0].split('-')[0]

	return newDate
}
