
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from "../Home/pagprincipal";


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas privadas */}
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter


