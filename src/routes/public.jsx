
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from "../Home/pagprincipal";
import Ventas from "../Home/casasventa"
import Riendos from "../Home/casasarriendo"
import PropertyDetailsPage from "../Home/PropertyDetailsPage";
import TermsAndPrivacyPage from "../Home/teminosyprivacidad";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas privadas */}
                <Route path='/' element={<Home/>}/>
                <Route path='/term' element={<TermsAndPrivacyPage/>}/>
                <Route path='/Ventas' element={<Ventas/>}/>
                <Route path='/arrendamientos' element={<Riendos/>}/>
                <Route path='/contacto' element={<Riendos/>}/>
                <Route path="/:id" element={<PropertyDetailsPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter


