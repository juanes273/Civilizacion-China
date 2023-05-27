import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {
    const PATH = "/static/Floor/Tatami_001_SD"
    
    const props = useTexture({
        map: PATH + 'Tatami_001_.basecolorjpg',
        displacementMap: PATH + 'Tatami_001_height.png',
        normalMap: PATH + 'Tatami_001_normal.jpg',
        roughnessMap: PATH + 'Tatami_001_roughness.jpg',
        aoMap: PATH + 'Tatami_001_ambientOcclusion.jpg',
        metalnessMap: PATH + 'Tatami_001_emissive.jpg'
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <sphereGeometry />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}