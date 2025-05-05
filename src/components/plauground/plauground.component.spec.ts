import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaugroundComponent } from './plauground.component';

describe('PlaugroundComponent', () => {
  let component: PlaugroundComponent;
  let fixture: ComponentFixture<PlaugroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaugroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaugroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
