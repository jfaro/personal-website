import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    > * + * {
        margin-left: 1rem;
    }

    @media(max-width: 768px) {
        flex-direction: column;

        > * + * {
            margin-left: 0;
            margin-top: 1rem;
        }
    }
`

export default function ButtonBar(props) {
    return <Container>{props.children}</Container>
}
