import { Outlet } from "react-router-dom";


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