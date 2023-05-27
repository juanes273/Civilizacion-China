import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {
    const PATH = "/static/Wall/Wood_Wall_002_SD/"
    
    const props = useTexture({
        map: PATH + 'Wood_Wall_002_.basecolorjpg',
        displacementMap: PATH + 'Wood_Wall_002_height.png',
        normalMap: PATH + 'Wood_Wall_002_normal.jpg',
        roughnessMap: PATH + 'Wood_Wall_002_roughness.jpg',
        aoMap: PATH + 'Wood_Wall_002_ambientOcclusion.jpg',
        metalnessMap: PATH + 'Wood_Wall_002_emissive.jpg'
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <sphereGeometry />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}