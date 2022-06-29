import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

type ReturnObj = {
    success: boolean | undefined,
    message: string
}


@Component({
    templateUrl: "couse-info.component.html"
})
export class CourseInfoComponent implements OnInit {

    course!: Course;

    saveFlag: ReturnObj = {success: undefined, message: ""};
    
    constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
        let id = this.activedRoute.snapshot.paramMap.get("id");

        if (id) this.courseService.getById(+id).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error:", err)
        })
    }

    save(): void {
        if (this.courseService.save(this.course)) {
            this.saveFlag = {success: true, message: "Course saved successfully!"}
        } else {
            this.saveFlag = {success: false, message: "Error on saving course!"}
        }
    }
}
