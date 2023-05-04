import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCocibolcaAppComponent } from './header-cocibolca-app.component';

describe('HeaderCocibolcaAppComponent', () => {
  let component: HeaderCocibolcaAppComponent;
  let fixture: ComponentFixture<HeaderCocibolcaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCocibolcaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCocibolcaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
