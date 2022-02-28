import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .75rem 2rem;
    border: 1px solid var(--textPrimary);
    border-radius: 2px;

    transition: .4s;
    :hover {
        transform: translateY(-4px);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const FilledButton = styled(StyledButton)`
    background: var(--textPrimary);
    color: var(--bgRaised);
    > svg {
        fill: var(--bgRaised);
        stroke: var(--bgRaised);
    }
`

const OutlineButton = styled(StyledButton)`
    background: none;
    color: var(--textPrimary);
    
`

export default function Button({ url, outlined, icon, children }) {

    const paddedIcon = icon ? <React.Fragment>{icon} &nbsp;</React.Fragment> : null

    const ButtonType = outlined ?
        <OutlineButton>{paddedIcon} {children}</OutlineButton> :
        <FilledButton>{paddedIcon} {children}</FilledButton>

    return (
        <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            {ButtonType}
        </a>
    )
}
