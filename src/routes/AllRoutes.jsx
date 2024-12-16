
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SpecificMoviePage from '../pages/SpecificMoviePage';

const CreateRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<SpecificMoviePage />} />
    </Routes>
);

export default CreateRoutes;
