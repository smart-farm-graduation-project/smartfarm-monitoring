import { PropsWithChildren } from "react";
import React from "react";
import { useRouter } from "next/router";

type Props = {
    onMenuButtonClick(): void;
};

const Sidebar = (props : PropsWithChildren) => {

    const router = useRouter();
    const menuContent = [
        {
            href: "/dashboard",
            title: "dashboard"
        },
        {
            href: "/farmVideo",
            title: "farmVideo"
        }
    ]

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-300">
            {/* <div>
                NavBar
            </div> */}
            <button className="bg-blue-200 w-64 text-3xl" type="button" onClick={() => {router.push('/')}}>SmartFarm</button>
            <div className="bg-blue-200 w-64 min-w-max min-h-screen">
            <button type="button" onClick={() => {router.push('/')}} />
                <div>
                    {menuContent.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Sidebar;