import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  isChecked = true;
  colours = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Blue'},
    { id: 3, name: 'Black'},
  ];
  colour = 2;
  minDate = new Date(2016, 8, 1);
  maxDate = new Date(2025, 8, 1);
  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advance'}
  ];
  progress = 0;
  timer;
  isLoading = false;

  onChange($event) {
    console.log($event);
  }
  selectCategory(category) {
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  constructor(private dialog: MatDialog) {

  // this.timer = setInterval(() => {
  //   this.progress++;
  //   // tslint:disable-next-line: triple-equals
  //   // tslint:disable-next-line: no-unused-expression
  //   this.progress == 100 ? clearInterval(this.timer) : null;
  //   }, 20);
        // this.isLoading = true;
        // this.getCourses()
        // .subscribe(x => this.isLoading = false);


  }

//   getCourses() {
// return Observable.timer(2000);
//   }

  // tslint:disable-next-line: member-ordering
  // const numbers = timer(5000);
  // // tslint:disable-next-line: no-unused-expression
  // numbers.subscribe(x => console.log(x));

  openDialog() {
    this.dialog.open(EditCourseComponent,{
      data: { courseId : 1}
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }
}
