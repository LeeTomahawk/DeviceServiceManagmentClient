import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { Client } from 'src/app/client-list/clientInterface';
import { SearchClientByPhoneNumber } from 'src/Forms/SearchClientByPhoneNumberForm';
import { ClientService } from 'src/Services/client.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit, OnChanges {
  constructor(private clientApiCaller: ClientService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(' '),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) => {
        return this.filter(val || '');
      })
    );
  }
  selectedIdentiti: any = '';
  clientPhoneForm = new SearchClientByPhoneNumber();
  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;
  clientList: any;
  isClientLoad: boolean = false;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['isClientLoad'];
  }

  filter(val: string): Observable<any[]> {
    return this.clientApiCaller.getClientByPhoneNumber(val).pipe(
      map((response) =>
        response.filter((option: any) => {
          return option.identiti.phoneNumber.indexOf(val) === 0;
        })
      )
    );
  }
  onSelected(val: any) {
    this.selectedIdentiti = val;
    this.isClientLoad = true;
  }
  displayWith(value: any): string {
    return value
      ? value.identiti.lastName + ' ' + value?.identiti.phoneNumber
      : '...';
  }
}
