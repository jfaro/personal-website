import cx from "classnames";
import styles from "./Button.module.scss";

export default function Button({ url, outlined, icon, children }) {

    const classes = cx(styles.button, {
        [styles.filled]: !outlined,
        [styles.outlined]: outlined
    })

    return (
        <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div className={classes}>{icon && <>{icon} &nbsp;</>}{children}</div>
        </a>
    )
}
