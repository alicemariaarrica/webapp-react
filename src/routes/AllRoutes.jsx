
import { Route, Routes } from 'react-router-dom';
import CreateHomePage from '../pages/HomePage';
import SpecificMoviePage from '../pages/SpecificMoviePage';
import CreateDefaultLayout from '../layout/DefaultLayout';

const CreateRoutes = () => (
    <Routes>
        <Route path="/" element={<CreateDefaultLayout />}>
            <Route index element={<CreateHomePage />} />
            <Route path="movie/:id" element={<SpecificMoviePage />} />
        </Route>
    </Routes>
);

export default CreateRoutes;
