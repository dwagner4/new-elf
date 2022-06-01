import * as THREE from 'three';
import World from '../systems/World.js';

import HeartScenery from '../scenery/HeartScenery.js';
import Elf from '../actors/Elf.js';

export default class InitialWorld extends World {
  constructor(stage) {
    super(stage);

    this.stage.camera.position.set(0, 2.5, 10);
    this.stage.scene.background = new THREE.Color(0x003049);

    const hrtBgrd = new HeartScenery();
    this.stage.scene.add(hrtBgrd.hemilight, hrtBgrd.light, hrtBgrd.plane);
  }

  async init() {
    await super.init();

    const elf = new Elf();
    await elf.init();
    this.objectsToUpdate.push(elf);

    this.stage.scene.add(elf.model);
  }

  update(time) {
    super.update(time);
  }

  dispose() {
    this.stage.disableVR();
  }
}
