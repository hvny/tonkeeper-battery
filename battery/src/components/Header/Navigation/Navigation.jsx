import "./Navigation.css";
import "../../Link/Link.css";

import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <HashLink className="nav__link link">test</HashLink>
                </li>
                <li className="nav__list-item">
                    <HashLink className="nav__link link">test</HashLink>
                </li>
                <li className="nav__list-item">
                    <HashLink className="nav__link link">test</HashLink>
                </li>
            </ul>
        </nav>
    );
}