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
            <h2 className="text-xl text-[color:var(--color-primary)]">{title}</h2>
            <select
                name={name}
                value={value}
                onChange={handleChange}
                className="border-[color:var(--color-primary)] h-11 text-[color:var(--color-primary)] text-base font-[bold] pl-[15px] rounded-[10px] border-2 border-solid"
            >
                <option value="">-- Selecciona --</option>
                {
                    items.map((item: string) => (
                        <option className="text-[color:var(--color-primary-dark)]" key={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectCustom