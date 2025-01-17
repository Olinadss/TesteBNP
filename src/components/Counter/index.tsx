import { useState, useEffect } from 'react'

type CounterProps = {
	initialCount: number
	onUnmount: () => void
}

export const Counter: React.FC<CounterProps> = ({
	initialCount,
	onUnmount,
}) => {
	const [count, setCount] = useState(initialCount)

	useEffect(() => {
		console.log('Componente montado!')

		return () => {
			console.log('Componente desmontado!')
		}
	}, [])

	useEffect(() => {
		if (count === 10) {
			onUnmount()
		}
	}, [count])

	useEffect(() => {
		console.log('Componente atualizado!')
	})

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1)
	}

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	)
}
