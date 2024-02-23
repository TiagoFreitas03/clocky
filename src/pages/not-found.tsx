import { Link } from "react-router-dom"

export function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen mt-[-112px]">
			<p className="text-4xl mb-4">Página não encontrada!</p>

			<Link to='/' className="text-blue-500 text-lg underline underline-offset-4">
				Voltar para a página inicial
			</Link>
		</div>
	)
}
