import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-stock',
  templateUrl: './informacion-stock.component.html',
  styleUrls: ['./informacion-stock.component.css']
})
export class InformacionStockComponent {

stock = [
  { id: 1, nombre: 'Camiseta Marrón', descripcion: 'Camiseta de algodón', categoria: 'Ropa', stock: 10 },
  { id: 2, nombre: 'Camiseta Negra', descripcion: 'Camiseta de poliester', categoria: 'Ropa', stock: 15 },
  { id: 3, nombre: 'Camiseta Verde', descripcion: 'Camiseta de algodón', categoria: 'Ropa', stock: 7 },
  { id: 4, nombre: 'Camiseta Gris', descripcion: 'Camiseta de poliester', categoria: 'Ropa', stock: 20 },
  { id: 5, nombre: 'Jersey Azul Marino', descripcion: 'Con capucha', categoria: 'Ropa', stock: 20 },
  { id: 6, nombre: 'Jersey Gris', descripcion: 'Cuello en V', categoria: 'Ropa', stock: 20 },
  { id: 7, nombre: 'Jersey Marrón', descripcion: 'Algodón', categoria: 'Ropa', stock: 20 },
  { id: 8, nombre: 'Sudadera Gris', descripcion: 'Algodón, Capucha', categoria: 'Ropa', stock: 20 },
  { id: 9, nombre: 'Sudadera Marrón', descripcion: 'Resistente Agua', categoria: 'Ropa', stock: 20 },
  { id: 10, nombre: 'Sudadera Verde', descripcion: 'Capucha, Sin mangas', categoria: 'Ropa', stock: 20 },
  { id: 11, nombre: 'Sudadera Negra', descripcion: 'Sin capucha', categoria: 'Ropa', stock: 20 }
];

}
