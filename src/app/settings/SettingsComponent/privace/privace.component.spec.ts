import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivaceComponent } from './privace.component';

describe('PrivaceComponent', () => {
  let component: PrivaceComponent;
  let fixture: ComponentFixture<PrivaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
