import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public records: any[] = [{text: 'abc'}, {text: 'def'}];
    public formGroup: FormGroup;
    public componentType: number = null;

    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            records: [{text: 'ghi'}, {text: 'jkl'}],
            recordsWorkaround: {
                awkward: [{text: 'mno'}, {text: 'pqr'}]
            }
        })
    }
}
