import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRedesComponent } from './link-redes.component';

describe('LinkRedesComponent', () => {
  let component: LinkRedesComponent;
  let fixture: ComponentFixture<LinkRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
