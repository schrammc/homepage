import { Link } from 'react-router-dom';

type NavItemProps = { route: string, label: string }

function NavItem({ route, label }: NavItemProps) {
    return (<Link to={route}>{label}</Link>);
}

const navItems = [
    { route: "/", label: "Home" },
    { route: "/projects", label: "Projects" },
    { route: "/archive", label: "Archive" },
    { route: "/legal", label: "Legal" }]

export function Nav() {
    return (
        <div className="nav-menu">
            <h1>
                Christof Schramm
            </h1>
            <ul>
                {navItems.map((x) => <li>{NavItem(x)}</li>)}
            </ul>
        </div>);
}
