import { Html, useProgress } from '@react-three/drei';

const htmlStyles = {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default function Loader() {
    const { progress, loaded } = useProgress();
    return (
        <Html center style={htmlStyles}>
            <p>{progress.toFixed(0)} % loaded</p>
        </Html>
    )
}
