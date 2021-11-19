import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroScreenComponent } from './hero-screen.component';

describe('HeroScreenComponent', () => {
  let component: HeroScreenComponent;
  let fixture: ComponentFixture<HeroScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
