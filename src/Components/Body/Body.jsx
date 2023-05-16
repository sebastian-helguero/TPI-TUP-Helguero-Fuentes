import "./Body.css"

import Header from "../Header/Header"
import Filter from "../Filter/Filter"
import ProductCard from "../ProductCard/ProductCard"


const Body = () => {
return (
        <body>
            <nav><Header/></nav>
            <h2>Productos</h2>
            <main>
                <aside>
                    <Filter/>
                </aside>
                <ProductCard/>
            </main>
        </body>
    )
}

export default Body