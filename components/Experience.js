import { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LazyLoad } from "./shared/LazyLoad";
import cx from "classnames";
import styles from "./Experience.module.scss";

const ExperienceComponent = ({ title, position, date, img, textOnRight, children }) => {
    const wrapperRef = useRef();
    const imgRef = useRef();
    const textRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Fade in image
        gsap.fromTo(imgRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.2,
            delay: 0.2,
            ease: "pwoer3",
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top center",
            }
        });

        // Fade in description
        gsap.fromTo(textRef.current, {
            x: textOnRight ? 100 : -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3",
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top center",
            }
        });
    }, [textOnRight]);

    const text = (
        <div ref={textRef} className={styles.textContainer}>
            <div className={styles.introBlock}>
                <h1>{title}</h1>
                <h2>{position}</h2>
                <h3>{date}</h3>
            </div>
            {children}
        </div>
    )

    const image = <div ref={imgRef} className={styles.imageContainer}>{img}</div>;

    return (
        <div ref={wrapperRef} className={cx(styles.container, textOnRight ? styles.imgLeft : styles.imgRight)}>
            {textOnRight ? image : text}
            {textOnRight ? text : image}
        </div>
    )
}

const Experience = ({ title, position, date, img, textOnRight, children }) => {
    return (
        <LazyLoad>
            <ExperienceComponent title={title} position={position} date={date} img={img} textOnRight={textOnRight}>
                {children}
            </ExperienceComponent>
        </LazyLoad>
    )
}

export default Experience;