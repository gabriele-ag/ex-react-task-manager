import { NavLink } from "react-router-dom";

export const AppHeader = () => {
    const links = [{
        title: "Aggiungi una task",
        url: "/",
    },
    {
        title: "Lista delle task",
        url: "/task",
        
    }];

    return (
        <header>
            <div>
                <ul>
                    {links.map((curLink, index) => (
                        <NavLink key={index} to={curLink.url}>{curLink.title}</NavLink>
                    ))}
                </ul>
            </div>
        </header>
    )
};