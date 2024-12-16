
import { Route, Routes } from 'react-router-dom';
import CreateHomePage from '../pages/HomePage';
import SpecificMoviePage from '../pages/SpecificMoviePage';


const CreateRoutes = () => (
    <Routes>
        <Route path="/" element={<CreateHomePage />} />
        <Route path="/movie/:id" element={<SpecificMoviePage />} />
    </Routes>
);

export default CreateRoutes;
