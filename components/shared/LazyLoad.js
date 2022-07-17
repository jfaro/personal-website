import { useState, useEffect } from 'react';

export const LazyLoad = ({ children }) => {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return <>{children}</>;
};
