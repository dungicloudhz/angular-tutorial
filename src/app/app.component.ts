import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
  public name = "Dung Danh"
  topics = ["Angular", "React", "Vue"]
  counter = 1;

  userModel = new User("", "09101","", "morning", true)

  handleChildEvent(value?: any) {
    console.log(value);
  }

  onSubmit() {
    // console.log(this.userModel);
  }
}
