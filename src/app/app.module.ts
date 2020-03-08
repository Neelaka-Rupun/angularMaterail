import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from './mat-components/mat-components.module';


@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass: CourseService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
