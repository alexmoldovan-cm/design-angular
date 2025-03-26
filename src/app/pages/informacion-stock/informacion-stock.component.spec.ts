import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionStockComponent } from './informacion-stock.component';

describe('InformacionStockComponent', () => {
  let component: InformacionStockComponent;
  let fixture: ComponentFixture<InformacionStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
