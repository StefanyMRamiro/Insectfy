import { Outlet } from "react-router"

function TopBar() {
    return (
        <>
            <div className="bg-amber-700 flex justify-center items-center h-1/6 p-2 w-screen">
                <img
                    className="p-1 rounded-full"
                    alt="app"
                    width="32px"
                    height="32px"
                    src="/logo.svg"
                />

                <p className="font-semibold text-white ml-2">Insectfy</p>

                <div className="flex-1"></div>
            </div>

            <div className="h-5/6">
                <Outlet />
            </div>
        </>
    )
}

export default TopBar