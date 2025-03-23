
interface Props {
	title: string;
	total: number;
}

const Card = ({ title, total }: Props) => {
    const color = title === 'Ingresos' ? "text-teal-800" : title === 'Gastos' ? "text-red-500" : "text-[color:var(--color-primary-dark)]"
    return (
        <div className='bg-white w-[100%] h-[100px]'>
            <div className='flex flex-col items-center justify-center h-full gap-2'>
                <p className={`text-lg font-bold ${color}`}>{title}</p>
                <span className={`text-lg font-bold ${color}`}>$ {total}</span>
            </div>
        </div>
    )
}

export default Card