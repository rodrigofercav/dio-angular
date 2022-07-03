import { Component, OnInit } from "@angular/core";
import { SuccessFlag } from "../shared/type/app.type";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "course-add.component.html"
})
export class CourseAddComponent {

    course: Course = new Course();

    successFlag: SuccessFlag = { success: undefined, message: ""};
    saveFlag: boolean = true;

    constructor(private courseService: CourseService) { }

    save():void {
        this.saveFlag = false;
        
        this.courseService.save(this.course).subscribe({
            next: course => this.successFlag = { success: true, message: `Course "${course.name}" was saved successfully!` },
            error: err => this.successFlag = { success: false, message: err.message }
        });
    }

}
