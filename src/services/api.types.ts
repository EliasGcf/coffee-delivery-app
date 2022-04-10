/* eslint-disable @typescript-eslint/no-namespace */

export declare namespace Api {
  export type Coffee = {
    id: string;
    name: string;
    description: string;
    stars: number;
    price: string;
    image_url: string;
  };

  export type Category = {
    id: string;
    name: string;
  };
}
