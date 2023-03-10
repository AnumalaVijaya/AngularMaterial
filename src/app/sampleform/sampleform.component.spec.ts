import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleformComponent } from './sampleform.component';

describe('SampleformComponent', () => {
  let component: SampleformComponent;
  let fixture: ComponentFixture<SampleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
