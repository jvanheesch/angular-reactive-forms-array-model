import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CustomFormComponentComponent} from './shared/custom-form-component/custom-form-component.component';
import { CustomFormComponentWorkAroundComponent } from './shared/custom-form-component-work-around/custom-form-component-work-around.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, CustomFormComponentComponent, CustomFormComponentWorkAroundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
