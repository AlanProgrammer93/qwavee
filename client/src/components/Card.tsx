
interface Props {
	title: string;
	total: number;
}

const Card = ({ title, total }: Props) => {
    const color = title === 'Ingresos' ? "text-green-600" : title === 'Gastos' ? "text-red-600" : "text-[color:var(--color-primary-dark)]"
    return (
        <div className='bg-white w-[100%] h-[150px]  rounded-[10px]'>
            <div className='flex flex-col items-center justify-center h-full gap-5'>
                <p className={`text-lg font-bold ${color}`}>{title}</p>
                <span className={`text-lg font-bold ${color}`}>$ {total}</span>
            </div>
        </div>
    )
}

export default Card