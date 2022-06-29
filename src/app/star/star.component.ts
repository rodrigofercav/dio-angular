import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "star.component.html",
    styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() //transform the field below into a "tag" inside the component => <app-star [rating]="value"><app-star/>
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}
