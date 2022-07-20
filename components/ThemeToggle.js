import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { LazyLoad } from './shared/LazyLoad';
import styles from './ThemeToggle.module.css'

const ThemeToggleComponent = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const inactiveTheme = theme === "light" ? "dark" : "light";

    // Keep in sync with system theme if it changes
    useEffect(() => {
        setTheme(systemTheme);
    }, [setTheme, systemTheme])

    return (
        <div style={{ display: "flex" }}>
            <input
                className={styles.reactSwitchCheckbox}
                id={'react-switch-new'}
                type="checkbox"
                onChange={() => setTheme(inactiveTheme)}
                checked={theme === 'dark'}
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

// Prevent toggle from showing until mounted on the client
export const ThemeToggle = () => {
    return (
        <LazyLoad>
            <ThemeToggleComponent />
        </LazyLoad>
    )
}
