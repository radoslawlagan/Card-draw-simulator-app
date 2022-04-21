import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

function ButtonMenu({ drawCard }) {
	return (
		<div className='buttonMenu'>
			<Button buttonText='Draw Card' handleClick={drawCard} />
			<Link to='/carddeck'>
				<Button buttonText='Show Deck' />
			</Link>
		</div>
	)
}

ButtonMenu.propTypes = {
	drawCard: PropTypes.func,
}

export default ButtonMenu
