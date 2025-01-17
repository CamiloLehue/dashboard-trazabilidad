
interface CardLayoutProps {
    children: React.ReactNode;
    className?: string;
}


export function CardLayout({ children, className }: CardLayoutProps) {
    return (
        <div className={`w-full p-10 rounded-lg bg-white shadow ${className}`}>
            {children}
        </div>
    )
}