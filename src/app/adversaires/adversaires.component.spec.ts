import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversairesComponent } from './adversaires.component';

describe('AdversairesComponent', () => {
  let component: AdversairesComponent;
  let fixture: ComponentFixture<AdversairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdversairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdversairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
