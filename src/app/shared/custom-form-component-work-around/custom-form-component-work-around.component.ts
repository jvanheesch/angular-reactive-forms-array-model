import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-custom-form-component-work-around',
    templateUrl: './custom-form-component-work-around.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomFormComponentWorkAroundComponent),
            multi: true
        }
    ]
})
export class CustomFormComponentWorkAroundComponent implements ControlValueAccessor {
    constructor() {
    }

    onChange: any = () => {
    };
    onTouch: any = () => {
    };
    val: any[];
    disabled: boolean;

    get value() {
        return this.val;
    }

    set value(val) {
        if (val !== undefined && this.val !== val) {
            this.val = val;
            this.onChange(val);
            this.onTouch(val);
        }
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    writeValue(value: any) {
        this.value = value;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    insert(index) {
        this.getRecords().splice(index + 1, 0, {text: null});
    }

    delete(index: number) {
        this.getRecords().splice(index, 1);
    }

    // only difference with other custom component
    getRecords() {
        return (this.val as any).awkward;
    }
}
