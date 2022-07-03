import { Component, OnInit } from "@angular/core";
import { SuccessFlag } from "../utils/app.types";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "course-list.component.html"
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = "";

    successFlag: SuccessFlag = { success: undefined, message: ""};

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.getAll();
    }

    getAll(): void {
        this.courseService.getAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => this.successFlag = { success: false, message: err.message }
        });
    }

    delete(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: course => {
                this.successFlag = { success: true, message: `Course "${course.name}" was deleted successfully!` },
                this.getAll();
            }, 
            error: err => this.successFlag = { success: false, message: err.message }
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => {
            return (course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
        });
    }

    get filter() {
        return this._filterBy;
    }

}
