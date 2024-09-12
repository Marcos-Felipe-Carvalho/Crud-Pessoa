import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirUfComponent } from './inserir-uf.component';

describe('InserirUfComponent', () => {
  let component: InserirUfComponent;
  let fixture: ComponentFixture<InserirUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirUfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
