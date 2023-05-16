import React from 'react'
import "./App.css"

import Cards from './Components/Cards/Cards'

const App = () => {
return (
<>
    <body>
        <nav>
            <span> Main </span>
            <div>
                <span> Buscador </span>
                <span> Configuracion </span>
                <span> Cuenta </span>
            </div>
        </nav>
        <h2 className='first-h2'>Pizzeria La Vecchia Signora</h2>
        <main>
            <aside className='filters'>
                <h2>Filtro</h2>
                <label>
                    <input type="checkbox" />
                    Pizzas
                </label>
                <label>
                    <input type="checkbox" />
                    Empanadas
                </label>
                <label>
                    <input type="checkbox" />
                    Hamburguesas
                </label>
                <label>
                    <input type="checkbox" />
                    Torpedos
                </label>
                <label>
                    <input type="checkbox" />
                    Gaseosas
                </label>
            </aside>
            <div className='products'>
                <section>
                    <h2>Pizzas</h2>
                    <div className="grid">
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </div>
                </section>
            </div>
        </main>
    </body>
    </>
    )
}

export default App