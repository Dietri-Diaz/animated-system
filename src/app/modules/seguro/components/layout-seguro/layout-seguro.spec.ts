import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSeguro } from './layout-seguro';

describe('LayoutSeguro', () => {
  let component: LayoutSeguro;
  let fixture: ComponentFixture<LayoutSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSeguro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
