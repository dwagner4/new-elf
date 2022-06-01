import * as THREE from 'three';
import Scenery from '../systems/Scenery.js';

export default class HeartScenery extends Scenery {
  constructor() {
    super();
    this.hemilight = new THREE.HemisphereLight(0xff8800, 0xffffff, 1);

    this.light = new THREE.DirectionalLight(0xffffff, 0.5);
    this.light.position.set(1, 1, 1).normalize();
    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 512;
    this.light.shadow.mapSize.height = 512;
    this.light.shadow.camera.near = 0.5;
    this.light.shadow.camera.far = 500;

    const geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffdd88,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(geometry, material);
    this.plane.rotateX(-Math.PI / 2);
    // this.plane.translateZ(-1);
    this.plane.receiveShadow = true;
  }
}
