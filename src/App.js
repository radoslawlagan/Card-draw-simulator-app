import { React, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CardSelect from './components/CardSelect'
import ButtonMenu from './components/ButtonMenu'
import DeckData from './data/DeckData'
import CardDeck from './pages/CardDeck'

function App() {
	const [deck, setDeck] = useState(DeckData)
	const [random, setRandom] = useState(5)

	const drawCard = () => {
		const randomNum = Math.floor(Math.random() * deck.length)
		setRandom(randomNum)
		// console.log(random, deck[random])
	}

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<CardSelect deck={deck} random={random} />
								<ButtonMenu drawCard={drawCard} />
							</>
						}
					/>
					<Route path='/carddeck' element={<CardDeck deck={deck} />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
