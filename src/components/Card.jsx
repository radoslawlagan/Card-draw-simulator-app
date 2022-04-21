import PropTypes from 'prop-types'

function Card({ cardNumber, cardImage }) {
	return (
		<div className='cardWrapper'>
			<div className='card'>
				<img src={cardImage} alt='' />
			</div>
			<p className='cardNumber'>{cardNumber}</p>
		</div>
	)
}

Card.propTypes = {
	cardNumber: PropTypes.number,
	cardImage: PropTypes.string,
}

export default Card
