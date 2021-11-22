import { Component, EventEmitter, Input, Output } from '@angular/core';

// store.
import { Store } from '@ngrx/store';
import { addHeroTeam } from '../../store/heroes.actions';
import { Heroe } from '../../models/hero';

@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.css']
})
export class ModalPollComponent {
  public show_modal: boolean = false;
  @Input() public title_modal: string;
  @Input() public team_selected: string;
  @Input() public hero: Heroe;
  @Output() setTeam:EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _heroesStore: Store<{ heroes: Array<Heroe> }>
  ) { }

  send_team(team: string): void {
    this.setTeam.emit(team);
    this.toggle_modal();
    this._heroesStore.dispatch(
      addHeroTeam({ 
        payload: {
          heroId: this.hero.id,
          color: team
        } 
      })
    );
  }
  
  toggle_modal(): void {
    this.show_modal = !this.show_modal;
  }
}
