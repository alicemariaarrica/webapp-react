import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer'


export default function CreateDefaultLayout() {

    return (
        <>
            <header className="bg-primary text-white p-3">

            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer></footer>
        </>
    )
}