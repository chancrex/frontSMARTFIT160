import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymplanComponent } from './gymplan.component';

describe('GymplanComponent', () => {
  let component: GymplanComponent;
  let fixture: ComponentFixture<GymplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
