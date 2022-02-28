import Head from 'next/head'
import * as React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bg);
    padding: 0 4rem 4rem 4rem;
    overflow: hidden;

    @media(max-width: 800px) {
        padding: 0 2rem 2rem 2rem;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * + * {
        margin-top: 4rem;
    }

    @media(max-width: 800px) {
        > * + * {
        margin-top: 4rem;
    }
    }
`

const Layout = ({ pageTitle, children }) => {
    return (
        <Container>
            <Head>
                <title>Julien Faro</title>
            </Head>
            <Content>
                <Header />
                {pageTitle ? <h1>{pageTitle}</h1> : null}
                {children}
            </Content>
        </Container>
    )
}
export default Layout