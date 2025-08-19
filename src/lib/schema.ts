import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export const schemaSignIn = z.object({
  email: z.string("Email is required").email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const schemaSignUp = schemaSignIn.extend({
    name: z
    .string("Name is required")
    .min(4, "Name should be at least 4 characters long"),
})

export const schemaCategory = z.object({
  name: z
    .string("Name is required")
    .min(4, "Name should be at least 4 characters long"),
});

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "File is not valid",
    })
    .refine((file: File) => file?.name, { message: "Image is required" }),
});

export const schemaProduct = z.object({
  name: z
    .string("Name is required")
    .min(4, "Name should be at least 4 characters long"),
  description: z
    .string("Description is required")
    .min(4, { message: "Description should have min 4 characters" }),
  price: z.string("Price is required"),
  stock: z.string("Stock is required"),
  brand_id: z.string("Brand is required"),
  category_id: z.string("Category is required"),
  location_id: z.string("Location is required"),
  images: z
    .any()
    .refine((files: File[]) => files.length === 3, {
      message: "Please upload 3 image product",
    })
    .refine(
      (files: File[]) => {
        let validate = false;

        Array.from(files).find((file) => {
          validate = ALLOW_MIME_TYPES.includes(file.type);
        });

        return validate;
      },
      {
        message: "Upload file should image",
      }
    ),
});

export const schemaProductEdit = schemaProduct
  .extend({
    id: z.number("Product ID is required"),
  })
  .omit({ images: true });

  export const schemaShippingAddress = z.object({
	name: z.string('Name is required').min(5, {message: 'Name should have 5 minimal characters'}),
	address: z.string('Address is required').min(5, {message: 'Address should have 5 minimal characters'}),
	city: z.string('City is required').min(5, {message: 'City should have 5 minimal characters'}),
	postal_code: z.string('Postal Code is required').min(5, {message: 'Postal Code should have 5 minimal characters'}),
	notes: z.string().nullable(),
	phone: z.string('Phone is required').min(5, {message: 'Phone should have 5 minimal characters'}),
})