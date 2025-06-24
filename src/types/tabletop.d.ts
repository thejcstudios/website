declare module 'tabletop' {
    interface TabletopOptions {
      key: string;
      callback?: (data: any, tabletop: any) => void;
      simpleSheet?: boolean;
      wanted?: string[];
      parseNumbers?: boolean;
    }
  
    export default class Tabletop {
      static init(options: TabletopOptions): Promise<any>;
    }
  }
  