interface Props {
    name: string;
    title: string;
    items: string[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCustom = ({ name, title, items, value, handleChange }: Props) => {
    return (
        <div className='flex flex-col gap-[5px] mt-5 mb-2.5'>
            <h2 className="text-xl text-teal-800">{title}</h2>
            <select
                name={name}
                value={value}
                onChange={handleChange}
                className="border-teal-800 h-11 text-teal-800 text-base font-[bold] pl-[15px] rounded-[10px] border-2 border-solid"
            >
                <option value="">-- Selecciona --</option>
                {
                    items.map((item: string) => (
                        <option className="text-teal-700" key={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectCustom