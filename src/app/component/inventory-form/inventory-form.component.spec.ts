import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { InventoryFormComponent } from './inventory-form.component';

describe('InventoryFormComponent', () => {
  let component: InventoryFormComponent;
  let fixture: ComponentFixture<InventoryFormComponent>;
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ InventoryFormComponent ],
      providers: [
        provideMockStore(),
      ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.inventoryForm.valid).toBeFalsy();

  });
  it('form valid when values entered', () => {
    component.firstName.setValue('Ronaldo');
    component.lastName.setValue('Cristiano');
    component.playerNumber.setValue('7');
    component.teamName.setValue('Portugal National football team');
    component.expectedValue.setValue('10000');
    expect(component.inventoryForm.valid).toBeTruthy();
  });
  it('should not reset form on calling onInventoryFormSubmit', () => {
    component.firstName.setValue('Ronaldo');
    component.onInventoryFormSubmit();
    expect(component.inventoryForm.valid).toBeFalsy();
    expect(component.firstName.value).toContain('Ronaldo');

  });
  it('should reset form onInventoryFormSubmit', () => {
    component.firstName.setValue('Ronaldo');
    component.lastName.setValue('Cristiano');
    component.playerNumber.setValue('7');
    component.teamName.setValue('Portugal National football team');
    component.expectedValue.setValue('10000');
    component.onInventoryFormSubmit();
    expect(component.inventoryForm.valid).toBeFalsy();
  });
});

