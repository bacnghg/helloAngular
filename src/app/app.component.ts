import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav navbar-nav'>
          <li><a>Home</a></li>
          <li><a>Product</a></li>
        </ul>
      </div>
    </nav>
  </div>
  `,
  providers:[ProductService]
})
export class AppComponent {
  pageTitle: string = 'Hello Angular';
} 