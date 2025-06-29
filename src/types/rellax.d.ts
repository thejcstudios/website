declare module 'rellax' {
    export default class Rellax {
      constructor(selector: string | HTMLElement, options?: any);
      refresh(): void;
      destroy(): void;
    }
  }
  