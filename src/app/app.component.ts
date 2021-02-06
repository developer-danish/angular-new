import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  courseCard = {
    name:'angular',
    rank:2
  };
  users = [
    {
      name:'danish',
      id:1
    },
    {
      name:'sajad',
      id:2
    },
    {
      name:'amir',
      id:3
    }
  ];
  clickEvent() {
    alert(this.title);
  }
  onKeyUp(newTitle:string){
    this.title = newTitle;
  }
  newcourseViewer(course:string){
    console.log('app based click event',course)
  }
  newFunction(person:object){
    console.log('this is the user', person);
  }
  startDate = new Date()
  newString = "I AM danish, Full stack developer"
  price = 9.99343546434235
}
 


