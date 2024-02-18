import { useGLTF } from '@react-three/drei';

function Model(props) {
    const { scene } = useGLTF("/wheelchairv0.glb");
    return <primitive object={scene} {...props} />
}

export default Model;