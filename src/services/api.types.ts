/* eslint-disable @typescript-eslint/no-namespace */

export declare namespace Api {
  export type RawCoffee = {
    id: string;
    name: string;
    simple_description: string;
    description: string;
    stars: number;
    price: number;
    image_url: string;
    categoryId: string;
    milk_options: string[];
  };

  export type Coffee = RawCoffee & {
    formatted_price: string;
  };

  export type Category = {
    id: string;
    name: string;
  };
}
