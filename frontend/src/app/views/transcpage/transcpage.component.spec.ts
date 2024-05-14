import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscpageComponent } from './transcpage.component';

describe('TranscpageComponent', () => {
  let component: TranscpageComponent;
  let fixture: ComponentFixture<TranscpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranscpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
