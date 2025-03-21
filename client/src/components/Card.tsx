import React from 'react'

interface Props {
	title: string;
	total: number;
}

const Card = ({ title, total }: Props) => {
    return (
        <div className='bg-white w-[100%] h-[150px]  rounded-[10px]'>
            <div className='flex flex-col items-center justify-center h-full gap-5'>
                <p className='text-red'>{title}</p>
                <span>$ {total}</span>
            </div>
        </div>
    )
}

export default Card