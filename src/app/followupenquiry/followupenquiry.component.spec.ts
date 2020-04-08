import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupenquiryComponent } from './followupenquiry.component';

describe('FollowupenquiryComponent', () => {
  let component: FollowupenquiryComponent;
  let fixture: ComponentFixture<FollowupenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
