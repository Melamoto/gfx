
import * as Three from 'three';

import SceneManager from './sceneManager';

export default class Display {

    renderer: Three.WebGLRenderer;
    sceneManager: SceneManager;

    constructor(containerElement: HTMLElement) {
        this.renderer = new Three.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        containerElement.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager();

        window.addEventListener('resize', () => this.onWindowResize(), false);

        console.log('Display created!');
    }

    onWindowResize(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.sceneManager.onResize(window.innerHeight, window.innerWidth);
    }

    animate(): void {
        requestAnimationFrame(() => this.animate());
        this.sceneManager.update();
        this.sceneManager.render(this.renderer);
    }
}
