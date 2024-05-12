import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscitionsComponent } from './transcitions.component';

describe('TranscitionsComponent', () => {
  let component: TranscitionsComponent;
  let fixture: ComponentFixture<TranscitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
