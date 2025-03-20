import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from 'src/schemas/cart.schema';
import { Model } from 'mongoose';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  // Create a new cart
  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const newCart = new this.cartModel(createCartDto);
    return newCart.save();
  }

  // Get all carts
  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  // Get a single cart by ID
  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartModel.findById(id).exec();
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }
    return cart;
  }

  // Update a cart
  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    const updatedCart = await this.cartModel
      .findByIdAndUpdate(id, updateCartDto, { new: true })
      .exec();
    if (!updatedCart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }
    return updatedCart;
  }

  // Delete a cart
  async remove(id: string): Promise<{ message: string }> {
    const deletedCart = await this.cartModel.findByIdAndDelete(id).exec();
    if (!deletedCart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }
    return { message: `Cart with ID ${id} has been deleted` };
  }
}
