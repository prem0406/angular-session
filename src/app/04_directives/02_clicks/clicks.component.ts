import { Component } from "@angular/core";

@Component({
    selector: 'app-clicks',
    templateUrl: './clicks.component.html',
    styleUrls: ['./clicks.component.css']
})
export class ClicksComponent{
    message: string


    onClicked(msg: string) {
        this.message = msg
    }
}