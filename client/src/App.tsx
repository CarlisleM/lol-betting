import {
	DollarCircleOutlined,
	HomeOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import BetHistory from './pages/BetHistory'
import MatchStats from './pages/MatchStats'

export default function App() {
	return (
		<Router>
			<div>
				<div
					style={{
						display: 'flex',
						left: '40%',
						width: '100%',
						height: 40,
						position: 'fixed',
						flexDirection: 'row',
					}}
				>
					<div>
						<Link style={{ padding: '0px 5px' }} to='/'>
							<HomeOutlined
								style={{ fontSize: '24px', color: 'black', paddingTop: 10 }}
							/>
						</Link>
					</div>
					<div>
						<Link style={{ padding: '0px 5px' }} to='/about'>
							<InfoCircleOutlined
								style={{ fontSize: '24px', color: 'black', paddingTop: 10 }}
							/>
						</Link>
					</div>
					<div>
						<Link style={{ padding: '0px 5px' }} to='/history'>
							<DollarCircleOutlined
								style={{ fontSize: '24px', color: 'black', paddingTop: 10 }}
							/>
						</Link>
					</div>
				</div>

				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/history'>
						<BetHistory />
					</Route>
					<Route path='/'>
						<MatchStats />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
