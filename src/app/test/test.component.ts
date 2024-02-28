import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-test",
  // templateUrl: './test.component.html',
  template: `
    <!-- <h2>Welcome {{ name }}</h2>
    <h3>{{ getGreetUser() }}</h3>
    <input type="text" [value]="myId" />
    <br />
    <input type="text" #myInput value="{{ myId }} 1" />
    <br />
    <button (click)="onClick(myInput.value)">Greet</button>
    <button (click)="greetTitle = 'dung danh title'">Greet</button>
    {{ greetTitle }}
    <br />
    <h2>Two way binding</h2>
    <input [(ngModel)]="name" type="text" />
    <h3>{{ name }}</h3>
    <br />
    <h2>ngIF Directives</h2>
    <button (click)="disPlayName = !disPlayName">Greet</button>
    <div *ngIf="disPlayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h3>NGUYEN DANH DUNG</h3>
    </ng-template>
    <ng-template #elseBlock>
      <h3>Hidden</h3>
    </ng-template>
    <br />
    <h2>ngSwitch Directives</h2>
    <span [ngSwitch]="color">
      <p *ngSwitchCase="'red'">Red</p>
      <p *ngSwitchCase="'blue'">Blue</p>
      <p *ngSwitchDefault>White</p>
    </span>
    <br>
    <h2>ngFor Directives</h2>
    <div *ngFor="let item of colors; last as f">
      <span>{{f}} {{item}}</span>
    </div> -->
    <!-- {{parentData}} -->
    {{ parentData | uppercase }}
    <br>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  public name = "Dung";
  public myId = "DUNGDANH";
  public greetTitle = "";
  public disPlayName = true;
  public color;
  public colors = ["red", "yellow", "green", "blue"]
  @Input() parentData;
  @Output() childEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  getGreetUser() {
    return "Hello user: " + this.name;
  }

  onClick(event) {
    return (this.greetTitle = event);
  }

  fireEvent() {
    this.childEvent.emit("Hey Codevolution")
  }
}
