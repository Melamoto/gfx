
import * as Three from 'three';

export default class Display {

    renderer: Three.WebGLRenderer;

    constructor(containerElement: HTMLElement) {
        this.renderer = new Three.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        containerElement.appendChild(this.renderer.domElement);

        window.addEventListener('resize', () => this.onWindowResize(), false);

        console.log('Display created!');
    }

    onWindowResize(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
