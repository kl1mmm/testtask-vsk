import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePageComponent } from './name-page.component';

describe('NamePageComponent', () => {
  let component: NamePageComponent;
  let fixture: ComponentFixture<NamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamePageComponent]
    });
    fixture = TestBed.createComponent(NamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
