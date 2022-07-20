import { Experience } from "./Experience";
import Image from 'next/image'
import ButtonBar from "./ButtonBar";
import Button from "./Button";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

import projectCrypto from '../public/images/projects/crypto.png'
import projectSuzuki from '../public/images/projects/suzuki.png'
import projectStoroc from '../public/images/projects/storoc.png'
import projectOffice from '../public/images/projects/office-hours.png'
import projectRelic from '../public/images/projects/relic.png'
import styles from "./Projects.module.scss";

const imageStyles = {
    borderRadius: "4px",
    width: "100%",
    boxShadow: "-8px 64px 80px 0 rgba(0,0,0,.15), -16px 32px 16px -8px rgba(0,0,0,.05)",
    overflow: 'hidden'
}

const StyledImage = ({ src, alt }) => {
    return (
        <div style={imageStyles}>
            <Image src={src} alt={alt} layout="responsive" />
        </div>
    )
}

export const Projects = () => {

    // Images
    const imgCrypto = <StyledImage src={projectCrypto} alt="crypto monitor" />
    const imgSuzuki = <StyledImage src={projectSuzuki} alt="ann arbor suzuki institute" />
    const imgStoroc = <StyledImage src={projectStoroc} alt="storoc" />
    const imgOffice = <StyledImage src={projectOffice} alt="office hours" />
    const imgRelic = <StyledImage src={projectRelic} alt="RELIC landing page" />

    const chronosPreview = <video autoPlay loop muted playsInline poster='/images/projects/494-chronos.png' style={imageStyles}>
        <source src="videos/chronos-preview.webm" type="video/webm" />
        <source src="videos/chronos-preview.mp4" type="video/mp4" />
    </video>

    const wakePreview = <video autoPlay loop muted playsInline poster='/images/projects/494-wake.png' style={imageStyles}>
        <source src='videos/wake-preview.webm' type='video/webm' />
        <source src='videos/wake-preview.mp4' type='video/mp4' />
    </video>

    return (
        <div className={styles.container}>
            {/* RELIC */}
            < Experience
                title="RELIC"
                position="UI/UX Designer"
                date="January 2022 - February 2022"
                img={imgRelic}
                textOnRight >
                <p>First place winner of the 2022 Ross Fintech Challenge, RELIC is a ticket-issuing platform for Universities to offer an on-chain solution for event ticketing.</p>
                <h3>Team members</h3>
                <ul>
                    <li>William Bonner (MBA, Data &#38; Business Analytics)</li>
                    <li>Julien Faro (MSE, Computer Science)</li>
                    <li>Mustafa Cagil Isik (MBA, Global Operations)</li>
                    <li>Bryce Rajabian (OMBA)</li>
                    <li>Andrew Yang (BBA &#38; CS)</li>
                </ul>
                <ButtonBar>
                    <Button url="https://businesstech.bus.umich.edu/blog/meet-the-winners-of-the-2022-fintech-challenge/" outlined >
                        Meet the winners of the 2022 Fintech Challenge
                    </Button>
                </ButtonBar>
            </Experience >

            {/* Chronos */}
            < Experience
                title="Chronos"
                position="Developer + Art Lead"
                date="November 2021 - December 2021"
                img={chronosPreview} >
                <p>Chronos is a fast-paced parkour plat-former video game. Race through the rooftops of a futuristic city to reach the goal. Time is limited, so move with speed and agility.</p>
                <p>Created for the University of Michigan&apos; EECS 494: Game Development course during the Fall 2021 term.</p>
                <ButtonBar>
                    <Button url="https://makersmelx.itch.io/chronos">
                        Download on itch.io
                    </Button>
                    <Button url="https://github.com/UM-Electra-Studio/eecs494-p3" icon={<AiFillGithub />} outlined>
                        <span>GitHub</span>
                    </Button>
                </ButtonBar>
            </Experience >

            {/* Wake */}
            < Experience
                title="Wake"
                position="EECS 494 Project 2"
                date="October 2021"
                img={wakePreview}
                textOnRight >
                <p>Enter the Wake test facility, where you will operate a hovercraft in its final stages of development. The hovercraft casts a beautiful wake behind itself everywhere it goes. Surf off of it to take flight!</p>
                <p>Created in two weeks for EECS 494 (Game Development) to gain experience with rapid prototyping of an original game mechanic.</p>
            </Experience >

            {/* Crypto Monitor */}
            < Experience
                title="Crypto Monitor"
                position="Personal Project"
                date="May 2021"
                img={imgCrypto} >
                <p>Crypto-currency price monitoring tool designed and architected from the ground up. Provides a breakdown of the assets you hold in a <a href="https://www.binance.com/en" target="_blank" rel="noreferrer">Binance</a> account and interactive price charts for all USD trading pairs. Built using <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> for the front-end and <a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer">Flask</a> for the back end. Securely fetches account information and live price data using Binance&apos;s API.</p>
                <ButtonBar>
                    <Button url="https://github.com/jfaro/binance-trading-client" icon={<AiFillGithub />}>
                        GitHub (UI)
                    </Button>
                    <Button url="https://github.com/jfaro/binance-trading-server" icon={<AiFillGithub />} outlined>
                        GitHub (API)
                    </Button>
                </ButtonBar>
            </Experience >

            {/* Ann Arbor Suzuki */}
            < Experience
                title="Ann Arbor Suzuki Institute"
                position="Design + Development Lead"
                date="September 2020 - December 2021"
                img={imgSuzuki}
                textOnRight >
                <p>During the Fall 2020 term, just as the COVID lock-downs began, I joined VOID Tech Consulting as the Design and Development Lead for the Ann Arbor Suzuki Institute project. VOID Tech Consulting is a club at the University of Michigan that was founded in 2019. It aims to teach web-development skills through designing and building websites for non-profit organizations and businesses.</p>
                <p>As the Design Lead, I worked in a team with two other students to generate high-fidelity wireframes to present to our client. We worked through multiple iterations of design until a satisfactory result was achieved.</p>
                <p>As the Development Lead, I guided and managed a team of four students through the process of collaboratively building a custom WordPress theme which implemented the design we had created.</p>
                <Button url="https://annarborsuzuki.org/">
                    View Website
                </Button>
            </Experience >

            {/* STOROC */}
            < Experience
                title="STOROC"
                position="Front-End Developer"
                date="May 2020 - August 2020"
                img={imgStoroc} >
                <p>Created a proof-of-concept web application to search for and display live occupancy data for businesses during and post COVID with the intention of decreasing overcrowding and wait times. A Raspberry Pi was hooked up to a webcam to monitor the number of people entering and exiting a location using OpenCV object-detection algorithms. This occupancy data was posted to a REST service and subsequently fetched when users visited the application&apos;s webpage.</p>
                <Button url="https://engaged.umich.edu/news-features/engineering-course-challenges-students-to-create-tech-solutions-for-covid-19/" target="_blank" rel="noreferrer">
                    Creating Tech Solutions for COVID-19
                </Button>
            </Experience >

            {/* Office Hours */}
            < Experience
                title="Office Hours Poetry Broadsides Exhibition"
                position="Freelance Developer"
                date="November 2020 - January 2021"
                img={imgOffice}
                textOnRight >
                <p>Designed and developed a site to host the Office Hours Poetry Workshop’s Broadsides Exhibition. Office Hours Poetry Workshop paired up with eight LGBTQ+ poets with eight visual artists to craft unique broadsides showcasing their remarkable poems.</p>
                <p style={{ fontStyle: "italic" }}>“[Office Hours Poetry Workshop is] a community-based writing workshop for poets who show a demonstrated commitment to writing [that provides] continued support for manuscript-development and everyday writing. The workshop culminates in a public reading each fall and spring to showcase sizzling new work.”</p>
                <Button url="https://www.officehourspoetry.com/">
                    View Website
                </Button>
            </Experience >
        </div>
    )
}