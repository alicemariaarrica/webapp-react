
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateDefaultLayout() {
    return (
        <>
            <header className="bg-primary text-white p-3">
                <Header />
            </header>
            <main className="container mt-4">
                <Outlet />
            </main>
            <footer className="bg-dark text-white p-3 mt-4">
                <Footer />
            </footer>
        </>
    );
}
