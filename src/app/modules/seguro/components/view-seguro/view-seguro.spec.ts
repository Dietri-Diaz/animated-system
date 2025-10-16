import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeguro } from './view-seguro';

describe('ViewSeguro', () => {
  let component: ViewSeguro;
  let fixture: ComponentFixture<ViewSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSeguro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
