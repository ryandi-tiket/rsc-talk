export const Card = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => <div className={`border border-gray-200 rounded-lg shadow-lg bg-white p-4 ${className}`}>{children}</div>
