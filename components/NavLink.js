import Link from 'next/link';
import styles from "./NavLink.module.scss";

export const NavLink = ({ path, text }) => {
    return (
        <Link href={path} passHref>
            <a className={styles.link}>
                {text}
            </a>
        </Link>
    );
};
