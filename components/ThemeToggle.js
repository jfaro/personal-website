import React, { useState, useEffect } from 'react'
import * as styles from './ThemeToggle.module.css'


const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState('light');
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <div style={{ display: "flex" }}>
            <input
                className={styles.reactSwitchCheckbox}
                id={'react-switch-new'}
                type="checkbox"
                onChange={e => setActiveTheme(e.target.checked ? 'dark' : 'light')}
                checked={activeTheme === 'dark'}
            />
            <label
                className={styles.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span className={styles.reactSwitchButton} />
            </label>
        </div>
    );
};

export default ThemeToggle;