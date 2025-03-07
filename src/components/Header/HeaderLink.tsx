import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
    to: string;
    icon: string;
    label: string;
}

const HeaderLink = ({ to, icon, label }: NavLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className="nav-item me-2">
            <Link
                to={to}
                className={`nav-link rounded-pill px-3 py-2 ${isActive ? "bg-primary text-white" : "text-secondary"}`}
            >
                <i className={`bi bi-${icon} me-2`}></i>
                <span>{label}</span>
            </Link>
        </li>
    );
};

export default HeaderLink;