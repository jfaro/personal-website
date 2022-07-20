import Head from 'next/head'
import Header from './Header'
import styles from "./Layout.module.scss";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Julien Faro</title>
            </Head>
            <div className={styles.content}>
                <Header />
                {pageTitle ? <h1>{pageTitle}</h1> : null}
                {children}
            </div>
        </div>
    )
}
export default Layout