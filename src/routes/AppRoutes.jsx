import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollSection from "../pages/ScrollSection";


const AppRoutes = () => (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/summer-portfolio' : ''}>
        <Routes>
            <Route path="/" element={<ScrollSection />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
