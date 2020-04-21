import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'p'
})
export class TextContentDirective{

    @HostBinding('textContent')
    content = 'This is content being replaced'

    constructor(){
        console.log('Text-content directive initialized')
    }
}