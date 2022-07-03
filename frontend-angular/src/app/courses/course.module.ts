import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";

import { AppPipeModule } from "../shared/pipe/app-pipe.module";

import { CourseAddComponent } from "./course-add.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        CourseAddComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            { path: "courses", component: CourseListComponent },
            { path: "courses/add", component: CourseAddComponent },
            { path: "courses/info/:id", component: CourseInfoComponent }
        ])
    ]
})
export class CourseModule { }
