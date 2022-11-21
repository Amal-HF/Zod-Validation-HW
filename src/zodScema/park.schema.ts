import { z, TypeOf} from "zod";

export const parkSchema = z.object({
    body: z.object({
        id : z.string({required_error: 'ID is required'}).min(2, 'ID length more than 2'),
        name: z.string({required_error: 'Name is reqired'}).min(4, 'Name length more than 4'),
        type: z.enum(['rollercoaster', 'thriller', 'water'], {required_error: 'Type is required'}),
        ticket: z.number({required_error: 'Ticket is required'}),
        price: z.number({required_error: 'Price is required'})
    }),
});

export type parkSchemaType = TypeOf <typeof parkSchema> ['body'];