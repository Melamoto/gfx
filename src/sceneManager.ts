
import * as Three from 'three';

export default class SceneManager {

    scene: Three.Scene;
    camera: Three.PerspectiveCamera;

    cube: Three.Mesh;

    constructor() {

        this.scene = new Three.Scene();
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 5, 15000);
        this.camera.position.z = 400;

        this.cube = this.initCube();
        this.scene.add(this.cube);

        console.log('Scene created!');
    }

    initCube(): Three.Mesh {
        let geometry = new Three.BoxBufferGeometry(100, 100, 100);
        let material = new Three.MeshBasicMaterial({color: 0x00ff00});
        let cube = new Three.Mesh(geometry, material);
        return cube;
    }

    onResize(newHeight: number, newWidth: number): void {
        this.camera.aspect = newWidth / newHeight;
        this.camera.updateProjectionMatrix();
    }

    update(): void {
        this.cube.rotation.x += 0.005;
        this.cube.rotation.y += 0.009;
    }

    render(renderer: Three.Renderer): void {
        renderer.render(this.scene, this.camera);
    }
}