import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  @Input() workerEdit: object;
  myWorkerType = MyWorkerType;
  id: number;
  name : string;
  surname : string;
  type : number;

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() closelEdit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.id = this.workerEdit["id"];
    this.name = this.workerEdit["name"];
    this.surname = this.workerEdit["surname"];
    this.type = this.workerEdit["type"];
  }

  onEditWorker() {
    if (this.name !== '' && this.surname !== '') {
      this.editWorker.emit({
        id: this.id,
        name: this.name,
        surname: this.surname,
        type: this.type,
      });
    } else {alert('Заполните все поля')};
  }

  closePopup(){
    this.closelEdit.emit();
  }
}
