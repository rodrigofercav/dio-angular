import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuccessFlag } from "../shared/type/app.type";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "course-info.component.html"
})
export class CourseInfoComponent implements OnInit {

    course!: Course;

    successFlag: SuccessFlag = { success: undefined, message: ""};
    editFlag: boolean = false;

    constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        this.editFlag = false;
        this.getById();
    }

    getById(): void {
        let id = this.activedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.courseService.getById(+id).subscribe({
                next: (course) => {
                    this.course = course;
                },
                error: err => this.successFlag = { success: false, message: err.message }
            })
        }
    }

    edit(): void {
        this.editFlag = true;
    }

    save(): void {
        this.editFlag = false;
        this.courseService.save(this.course).subscribe({
            next: course => this.successFlag = { success: true, message: `Course "${course.name}" was saved successfully!` },
            error: err => this.successFlag = { success: false, message: err.message }
        });
    }
}
