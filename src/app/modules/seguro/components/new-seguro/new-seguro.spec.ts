import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeguro } from './new-seguro';

describe('NewSeguro', () => {
  let component: NewSeguro;
  let fixture: ComponentFixture<NewSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSeguro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
