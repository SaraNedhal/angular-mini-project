import { Component, EventEmitter, Input, Output ,OnInit } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
 @Input() product!: Product;
 @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
 @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

 editProduct() {
  this.edit.emit(this.product);

 }

 deleteProduct(){
  this.delete.emit(this.product);
 }
 ngOnInit(){
 }
}
