import { Pipe, PipeTransform } from "@angular/core";

enum CaseStyle {
    lowercase = "lowercase"
}

@Pipe({
    name: "replace"
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, valueToFind: string, valueToReplace: string): string {
        return value && value.replace(valueToFind, valueToReplace);
    }

}
