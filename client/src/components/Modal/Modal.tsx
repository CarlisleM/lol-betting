import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './Modal.css'

const Modal = (props: any) => {
	const closeOnEscapeKeyDown = (e: any) => {
		if ((e.charCode || e.keyCode) === 27) {
			props.onClose()
		}
	}

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [])

	return ReactDOM.createPortal(
		<CSSTransition
			in={props.show}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}
		>
			<div className='modal' onClick={props.onClose}>
				<div className='modal-content' onClick={(e) => e.stopPropagation()}>
					<div
						className='modal-header'
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: 'mintcream',
						}}
					>
						<span>Create Bet</span>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection: 'row',
								alignItems: 'center',
								width: 170,
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									height: 30,
									width: 130,
									border: '1px solid darkgreen',
									color: 'white',
									backgroundColor: 'green',
									borderRadius: 4,
									cursor: 'pointer',
								}}
								onClick={() => console.log('save')}
							>
								<span>Create Bets</span>
								<SaveOutlined style={{ fontSize: '22px' }} />
							</div>
							<CloseOutlined
								style={{ fontSize: '22px', opacity: 0.65 }}
								onClick={props.onClose}
							/>
						</div>
					</div>
					<div className='modal-body'>{props.children}</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById('root') as HTMLElement
	)
}

export default Modal
