
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from "../Home/pagprincipal";
import Ventas from "../Home/casasventa"
import PropertyDetailsPage from "../Home/PropertyDetailsPage";


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas privadas */}
                <Route path='/' element={<Home/>}/>
                <Route path='/Ventas' element={<Ventas/>}/>
                <Route path="/venta/:id" Component={PropertyDetailsPage} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter


