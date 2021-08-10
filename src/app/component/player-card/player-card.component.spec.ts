import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardComponent } from './player-card.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have player data', () => {
    component.player = {firstName: 'Lionel', lastName: 'Messi', teamName: 'Barcelona', playerNumber: 2, expectedValue: 1000};
    fixture.detectChanges();
    const playerName = fixture.nativeElement.querySelector('.card-header')
    expect(playerName.textContent).toEqual('Lionel Messi 2');
  });
});
