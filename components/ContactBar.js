import React from 'react'
import styled from 'styled-components';
import IconMail from './icons/IconMail';
import IconLinkedIn from './icons/IconLinkedIn';
import IconGitHub from './icons/IconGitHub';

const ContactBarContainer = styled.div`
    display: flex;
    
    > * + * {
        margin-left: 1rem;
    }
`

const LinkedIcon = styled.a`
    transition: .4s;

    :hover {
        filter: invert(.2);
        transform: translateY(-4px);
    }
`

export default function ContactBar() {
    return (
        <ContactBarContainer>
            <LinkedIcon href="mailto:jfaro@umich.edu" target="_blank" rel="noopener" aria-label="Mail">
                <IconMail />
            </LinkedIcon>
            <LinkedIcon href="https://www.linkedin.com/in/julien-faro" target="_blank" rel="noopener" aria-label="LinkedIn">
                <IconLinkedIn />
            </LinkedIcon>
            <LinkedIcon href="https://github.com/jfaro" target="_blank" rel="noopener" aria-label="GitHub">
                <IconGitHub />
            </LinkedIcon>
        </ContactBarContainer>
    )
}
