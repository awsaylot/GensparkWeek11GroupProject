import {Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const Views = () => {
    return (
        <>
            <Routes>
                <Route index component={<Home />} />
                <Route path="/home" element={<Home />} component={<Home />} />
                <Route path="*" element={<NotFound />} component={<NotFound />} />
            </Routes>
        </>
    );
};

export default Views;