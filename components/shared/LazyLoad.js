import { useState, useEffect } from 'react';

const Loading = () => {
    return <div></div>;
}

export const LazyLoad = ({ loader, children }) => {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return <Loading />;
    }

    return <>{children}</>;
};
