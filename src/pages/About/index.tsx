import { observer } from 'mobx-react'
import React from 'react'

interface Props {}

class About extends React.Component<Props> {
	public render() {
		return <div>About Page</div>
	}
}

export default observer(About)
