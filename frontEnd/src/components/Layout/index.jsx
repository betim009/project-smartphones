import { Outlet } from "react-router-dom";
import MyNavBar from "../MyNavBar";

export default function Layout() {
    return (
        <>
            <MyNavBar />
            <Outlet />
        </>
    )
}