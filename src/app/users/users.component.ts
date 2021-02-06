import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  @Input() newUser

  @Input() cardIndex: number
  
  @Output()
  userToApp = new EventEmitter<string>();
  ngOnInit(): void {
  }

  userClick(){
    console.log('user Clicked')
    this.userToApp.emit(this.newUser);
  }
  isVisible(){
    return this.newUser && this.newUser.id;
  }

  changeColor(){
    if(this.newUser.id==1){
      return 'red';
    }
  }

}
