import { MenuItem } from "./components/menu-item"
import { Home } from "./pages/home"

export function App() {
	return (
		<>
			<header className="w-full bg-zinc-900 px-4 py-6 flex justify-between text-zinc-100">
				<div className="flex gap-2 items-center">
					<span className="material-icons sm:hidden">menu</span>

					<span className="material-icons">watch</span>
					<h1 className="text-2xl font-bold">Clocky</h1>
				</div>

				<div className="flex items-center">
					<span className="material-icons">settings</span>
				</div>
			</header>

			<div className="flex">
				<aside className="bg-zinc-800 h-screen hidden sm:block">
					<MenuItem icon="schedule" text="Relógio" />
					<MenuItem icon="alarm" text="Alarme" />
					<MenuItem icon="hourglass_top" text="Temporizador" />
					<MenuItem icon="timer" text="Cronômetro" />
					<MenuItem icon="update" text="Pomodoro" />
				</aside>

				<main className="flex-1 p-4">
					<Home />
				</main>
			</div>
		</>
	)
}
