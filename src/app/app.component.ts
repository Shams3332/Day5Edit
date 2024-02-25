import { Component, Pipe } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { RoundedborderDirective } from './directives/roundedborder.directive';
import { ProductparenComponent } from './component/productparen/productparen.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent, FooterComponent ,ProductComponent 
    ,RoundedborderDirective , ProductparenComponent , RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskDay3';
}
