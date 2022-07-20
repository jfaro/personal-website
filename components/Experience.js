import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LazyLoad } from "./shared/LazyLoad";
import cx from "classnames";
import styles from "./Experience.module.scss";
import { useWindowSize } from '../hooks/useWindowSize';

const ExperienceComponent = ({ title, position, date, img, textOnRight, children }) => {
    const wrapperRef = useRef();
    const imgRef = useRef();
    const textRef = useRef();
    const { width } = useWindowSize();
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {
        setOnMobile(width && width < 992);
        console.log("width: ", width);
    }, [width]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top bottom",
                end: "center center",
                scrub: true,
            }
        });

        const animateImage = gsap.fromTo(imgRef.current, {
            y: 400,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "sin",
        });

        const animateText = gsap.fromTo(textRef.current, {
            y: 400,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
        });

        // Add animations in correct order depending on layout
        tl.add(onMobile ? animateText : animateImage);
        tl.add(onMobile ? animateImage : animateText);

        return () => tl.kill();
    }, [textOnRight, onMobile]);

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

export const Experience = ({ title, position, date, img, textOnRight, children }) => {
    return (
        <LazyLoad>
            <ExperienceComponent title={title} position={position} date={date} img={img} textOnRight={textOnRight}>
                {children}
            </ExperienceComponent>
        </LazyLoad>
    )
}
