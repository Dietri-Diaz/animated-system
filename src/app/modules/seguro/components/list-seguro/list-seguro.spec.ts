import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeguro } from './list-seguro';

describe('ListSeguro', () => {
  let component: ListSeguro;
  let fixture: ComponentFixture<ListSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSeguro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
