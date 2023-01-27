import { IConfig } from '@class/ParticleJS';

interface IAdditionalConfig {
  fps: number;
}

const particleJSConfig: IConfig & IAdditionalConfig = {
  fps: 120,
  particle: {
    minSize: 3,
    size: 13,
    amount: 30,
    speed: 5
  },
  attract: {
    distance: 300,
    rotateX: 500,
    rotateY: 500
  }
};

export default particleJSConfig;
