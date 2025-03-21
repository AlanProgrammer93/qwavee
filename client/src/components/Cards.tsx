import Card from './Card'

const Cards = () => {
    return (

        <div className="mt-18 w-[90%] grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 gap-2">
            <Card title='Balance' total={100} />
            <Card title='Gastos' total={100} />
            <Card title='Ingresos' total={100} />
        </div>
    )
}

export default Cards