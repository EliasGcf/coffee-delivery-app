/* eslint-disable @typescript-eslint/no-namespace */

export declare namespace Api {
  export type Coffee = {
    id: string;
    name: string;
    simple_description: string;
    description: string;
    stars: number;
    price: string;
    image_url: string;
    categoryId: string;
    milk_options: string[];
  };

  export type Category = {
    id: string;
    name: string;
  };
}
