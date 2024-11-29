import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingoageComponent } from './lodingoage.component';

describe('LodingoageComponent', () => {
  let component: LodingoageComponent;
  let fixture: ComponentFixture<LodingoageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LodingoageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LodingoageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
