import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  constructor() {}
  @Input()
  prop1
  @Input()
  newprop

  @Output()
  courseSelected = new EventEmitter<string>();
  ngOnInit(): void {
  }
  courseViewer(){
    console.log('component based click');
    this.courseSelected.emit(this.prop1);
    this.courseSelected.emit(this.newprop);
  }

}
