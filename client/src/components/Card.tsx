
interface Props {
	title: string;
	total: number;
	color: string;
}

const Card = ({ title, total, color }: Props) => {
    return (
        <div className='bg-white w-[100%] h-[150px]  rounded-[10px]'>
            <div className='flex flex-col items-center justify-center h-full gap-5'>
                <p className={`text-lg font-bold text-[${color}]`}>{title}</p>
                <span className={`text-lg font-bold text-[${color}]`}>$ {total}</span>
            </div>
        </div>
    )
}

export default Card