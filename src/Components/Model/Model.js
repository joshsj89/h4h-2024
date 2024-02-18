import { SpotLight, useGLTF } from '@react-three/drei';

function Model(props) {
    const { scene } = useGLTF("/wheelchairv2.3-mats.glb");
    // <script src = "https://cdnjs.cloudflare.com/ajax/libs.three.js/r79/three.min.js"></script>
    // const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);
    scene.add(SpotLight);
    return <primitive object={scene} {...props} />
}

export default Model;