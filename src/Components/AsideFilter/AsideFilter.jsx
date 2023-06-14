import "./AsideFilter.css"

const AsideFilter = () => {
return (
    <>
        <h2>Filtro</h2>
            <label>
                <input type="checkbox" />
                Pizzas Clasicas
            </label>
            <label>
                <input type="checkbox" />
                Pizzas Rellenas
            </label>
            <label>
                <input type="checkbox" />
                Pizzas Gourmet
            </label>
            <label>
                <input type="checkbox" />
                Bebidas
            </label>
    </>
)
}

export default AsideFilter