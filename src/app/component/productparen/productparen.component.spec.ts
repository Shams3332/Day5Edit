import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductparenComponent } from './productparen.component';

describe('ProductparenComponent', () => {
  let component: ProductparenComponent;
  let fixture: ComponentFixture<ProductparenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductparenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductparenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
