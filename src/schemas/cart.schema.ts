import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Product } from './products.schema';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [{ type: Object, ref: 'Product' }] })
  items: Product[];

  @Prop({ default: 0 })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
