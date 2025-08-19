export type ActionResult = {
	error: string;
};

export type Tedit = {
  params: Promise<{
    id: string;
  }>;
};

export type Tparams = Promise<{
	id: string;
}>;

export type TProduct = {
    id: number
    image_url: string
    name: string
    category_name: string
    price: number
}

export type TCart = TProduct & {quantity: number}
