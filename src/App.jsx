import React from 'react'
import "./App.css"

import Cards from './Components/Cards/Cards'
import NavBar from './Components/NavBar/NavBar'
import AsideFilter from './Components/AsideFilter/AsideFilter'

const App = () => {
return (
<>
    <body>
        <NavBar/>
        <h2 className='title'>Pizzeria La Vecchia Signora</h2>
        <main>
            <aside className='filters'>
                <AsideFilter/>
            </aside>
            <div className='products'>
                <section>
                    <h2>Pizzas Clasicas</h2>
                    <div className="grid">
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </div>
                    <h2>Pizzas Rellenas</h2>
                    <div className="grid">
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
    <footer></footer>
    </>
    )
}

export default App