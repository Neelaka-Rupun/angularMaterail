import { Component, OnInit, InjectionToken,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { CourseService } from '../course.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Data' , data);
  }
}
