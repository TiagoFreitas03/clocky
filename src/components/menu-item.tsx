interface MenuItemProps {
	icon: string
	text: string
}

export function MenuItem({ icon, text }: MenuItemProps) {
	return (
		<button className="flex flex-col items-center justify-center gap-2 w-24 h-20 border-b border-zinc-700 hover:bg-zinc-600">
			<span className="material-icons">{icon}</span>
			<p className="text-xs">{text}</p>
		</button>
	)
}
