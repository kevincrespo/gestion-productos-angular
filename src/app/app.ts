import { Component, signal } from '@angular/core';
import { ProductService,Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductForm } from './components/product-form/product-form';
import { ProductFilter } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [
    ProductsList,
    ProductForm,
    ProductFilter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gestion-producto');

  constructor (private productService: ProductService){
    // this.productService.cargarProductos().subscribe(
    //   (datos: Product[]) => {
    //     console.log('Productos cargados desde la API:', datos);
    //   }
    // );
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }


}
