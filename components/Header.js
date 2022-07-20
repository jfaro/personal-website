import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Logo from './icons/Logo';
import styles from "./Header.module.scss";
import { NavLink } from './NavLink';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerSide}>
                    <Logo />
                    <h2 style={{ padding: 0 }}>Julien Faro</h2>
                </div>
                <div className={styles.headerSide}>
                    <NavLink text="Home" path="/" />
                    <NavLink text="Projects" path="/#projects" />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}
