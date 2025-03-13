import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ButtonComponent } from '../../widgets/button/button.component';
import { CardComponent } from '../../widgets/card/card.component';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { TableComponent } from '../../widgets/table/table.component';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [ButtonComponent, CardComponent, CommonModule, TableComponent],
  providers: [ProductService],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class DashComponent implements OnInit {
  add: string = 'add';
  update: string = 'update';
  delete: string = 'delete';
  btnClass: string = 'btn-success';
  productDetails: string = 'Product Detatils';
  products: Product[] = [];
  collumns: any[] = [
    { head: 'Id', feild: 'id' },
    { head: 'Name', feild: 'name' },
    { head: 'Price', feild: 'price' },
    { head: 'Quantity', feild: 'quantity' },
    { head: 'Action', feild: '' },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {
    this.products = this.route.snapshot.data?.['products'].data;
    console.log(this.products);
  }
  ngOnInit(): void {}
  getProduct(item: any) {
    console.log(item);
  }

  addProduct(item: string) {
    console.log(item);
    this.router.navigate(['../add']);
  }
  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe((res) => {
      if (res.success) {
        console.log(res);

        this.redirectToDash();
      }
    });
  }
  updateProduct(id: number) {
    this.router.navigate([`edit/${id}`]);
  }

  redirectToDash() {
    this.router.navigate(['../dash']);
  }
}
