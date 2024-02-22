import { useEffect, useState } from "react"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Home() {
	const [now, setNow] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date())
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className="flex flex-col text-center text-blue-500 pt-48">
			<span className="text-3xl">Hora exata</span>

			<span className="text-9xl font-mono my-8">
				{format(now, 'hh:mm:ss')}
			</span>

			<span className="text-3xl">
				{format(now, "EEEE, dd 'de' LLLL 'de' yyyy", { locale: ptBR })}
			</span>
		</div>
	)
}
