import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeReverseComponent } from './pipe-reverse.component';

describe('PipeReverseComponent', () => {
  let component: PipeReverseComponent;
  let fixture: ComponentFixture<PipeReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeReverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
