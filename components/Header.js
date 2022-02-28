import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
import Logo from './icons/Logo'


const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 0 0;
    position: relative;
    z-index: 100;
`

const HeaderContent = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > * + * {
        margin-left: 2rem;
    }

    @media(max-width: 800px) {
        flex-direction: column;

        > * + * {
            margin: 0;
            margin-top: 2rem;
        }
    }
`

const HeaderSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * + * {
        margin-left: 2rem;
    }

    @media(max-width: 800px) {
        flex-direction: column;

        > * + * {
            margin: 0;
            margin-top: 2rem;
        }
    }
`

const StyledLink = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
    line-height: 180%;
    letter-spacing: 0.32em;
    color: var(--textPrimary);
    text-decoration: none;
    transition: .4s;
    
    :hover {
        cursor: pointer;
        color: var(--colorPrimary);
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>

                {/* Header left */}
                <HeaderSide>
                    <Logo />
                    <h2 style={{ padding: 0 }}>Julien Faro</h2>
                </HeaderSide>

                {/* Header right */}
                <HeaderSide>
                    <Link href="/" passHref>
                        <StyledLink>
                            Home
                        </StyledLink>
                    </Link>
                    <Link href="/#projects" passHref>
                        <StyledLink>
                            Projects
                        </StyledLink>
                    </Link>
                    <ThemeToggle />
                </HeaderSide>

            </HeaderContent>
        </HeaderContainer>
    )
}
