import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function CardDeck({ deck }) {
	return (
		<div className='deckWrapper'>
			<h2>Card Deck</h2>
			<div className='cardDeck'>
				{deck.map((item) => (
					<Card
						key={item.id}
						cardNumber={item.cardNumber}
						cardText={item.cardText}
						cardImage={item.cardImage}
					/>
				))}
			</div>
			<Link to='/'>
				<Button buttonText='Go Back' />
			</Link>
		</div>
	)
}

CardDeck.propTypes = {
	deck: PropTypes.array,
}

export default CardDeck
