import React from 'react'
import styled from 'styled-components'

const breakWidth = '992px'

const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > * + * {
        margin-left: 4rem;
    }
`

const ContainerImgRight = styled(Container)`
    @media (max-width: ${breakWidth}) {
        flex-direction: column;

        > * + * {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
`

const ContainerImgLeft = styled(Container)`
    @media (max-width: ${breakWidth}) {
        flex-direction: column-reverse;

        > * + * {
            margin-left: 0;
            margin-bottom: 2rem;
        }
    }
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakWidth}) {
        width: 100%;
    }
`

const IntroBlock = styled.div`
    padding-bottom: 1rem;

    > h1, h2 {
        margin: 0;
        padding: 0;
    }

    > h3 {
        padding-top: 1rem;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: ${breakWidth}) {
        width: 100%;
    }
`

export default function Experience({ title, position, date, img, textOnRight, children }) {

    const text = (
        <TextContainer>
            <IntroBlock>
                <h1>{title}</h1>
                <h2>{position}</h2>
                <h3>{date}</h3>
            </IntroBlock>
            {children}
        </TextContainer>
    )

    const image = (
        <ImageContainer >
            {img}
        </ImageContainer>
    )

    // Image on left
    if (textOnRight) {
        return (
            <ContainerImgLeft>
                {image}
                {text}
            </ContainerImgLeft>
        )
    }
    // Image on right
    else {
        return (
            <ContainerImgRight>
                {text}
                {image}
            </ContainerImgRight>
        )
    }
}
