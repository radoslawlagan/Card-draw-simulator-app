import PropTypes from 'prop-types'

function Button({ buttonText, handleClick }) {
	return <button onClick={handleClick}>{buttonText}</button>
}

Button.propTypes = {
	buttonText: PropTypes.string,
	handleClick: PropTypes.func,
}

export default Button
