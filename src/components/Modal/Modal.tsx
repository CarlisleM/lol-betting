import { CloseOutlined } from '@ant-design/icons'
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
						<div />

						<CloseOutlined
							style={{ fontSize: '22px', opacity: 0.65 }}
							onClick={props.onClose}
						/>
					</div>
					<div className='modal-body'>{props.children}</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById('root') as HTMLElement
	)
}

export default Modal
