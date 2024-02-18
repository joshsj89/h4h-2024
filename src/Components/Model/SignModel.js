import { Decal, useGLTF, useTexture } from "@react-three/drei";



export function SignModel(props) {
  const { nodes, materials } = useGLTF("/wheelchairv4-sign.glb");
  const image = useTexture("/phoenix_logo.png");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        position={[0, 0.076, -0.037]}
        rotation={[1.443, -0.013, -3.131]}
        scale={[1.567, 0.476, 1.555]}
        >
         <Decal 
            debug
            position={[.2,.2,0]}
            rotation={[0,0,0]}
            scale={[.0,.05,.05]}
            polygonOffset
            polygonOffsetFactor={-1}
         >
            <meshBasicMaterial map={image}/>
         </Decal>
      </mesh>
      <group
        position={[0.016, 0.006, 0.034]}
        rotation={[1.575, 0.567, 0.004]}
        scale={[0.371, 1.914, 0.353]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["dark metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={nodes.Cylinder017_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_3.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_5.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_6.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_7.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/wheelchairv4-sign.glb");

