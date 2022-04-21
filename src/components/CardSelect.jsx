import PropTypes from 'prop-types'
import Card from './Card'

function CardSelect({ deck, random }) {
	return (
		<div className='cardSelect'>
			<h2>{`Your card is ${deck[random].cardName}`}</h2>
			<Card cardImage={deck[random].cardImage} />
		</div>
	)
}

CardSelect.propTypes = {
	deck: PropTypes.array,
	random: PropTypes.number,
}

export default CardSelect
