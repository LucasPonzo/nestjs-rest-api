import { Controller, Get, Post, Body, Param } from '@nestjs/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Controller('api/products')
export class AppController {
  private products: Product[] = [];

  @Get()
  getAllProducts(): Product[] {
    return this.products;
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    this.products.push(product);
    return product;
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Product {
    return this.products[id];
  }
}