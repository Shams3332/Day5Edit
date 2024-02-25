import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { InsertProductComponent } from './component/admin/insert-product/insert-product.component';
import { AdminComponent } from './component/admin/admin.component';
import { OrderComponent } from './order/order.component';
import { FormProductComponent } from './component/admin/form-product/form-product.component';
import { AllproductComponent } from './component/admin/allproduct/allproduct.component';
import { UserComponent } from './component/user/user.component';
import { RegisterComponent } from './component/user/register/register.component';
import { LoginComponent } from './component/user/login/login.component';
import { userguardGuard } from './Guards/userguard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent ,canActivate:[userguardGuard]},
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'admin', component: AdminComponent ,
    children: [
        { path: '', component: InsertProductComponent}, 
        { path: 'addProduct', component: AllproductComponent},
        { path: 'order', component: OrderComponent},
        { path: 'formProduct', component: FormProductComponent},
        { path: 'formProduct/:id', component: FormProductComponent},

    ]},
    { path: 'user', component: UserComponent,
        children:[
            { path: '', component: RegisterComponent},
            { path: 'login', component: LoginComponent},
            
        ] },

    
    { path: '**', component: NotFoundComponent },
];

