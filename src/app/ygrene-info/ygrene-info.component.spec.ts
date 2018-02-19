import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YgreneInfoComponent } from './ygrene-info.component';

describe('YgreneInfoComponent', () => {
  let component: YgreneInfoComponent;
  let fixture: ComponentFixture<YgreneInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YgreneInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YgreneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
