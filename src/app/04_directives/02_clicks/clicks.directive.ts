import { Directive, HostListener, Input, Output, EventEmitter, HostBinding } from "@angular/core";

@Directive({
    selector:'[trackClick]'
})
export class ClicksDirective{
    @Input()
    trackClick: string

    isHover = false

    @HostBinding('class.hover')
    get hover() {
        return this.isHover;
    }

    @HostListener('mouseover')
    onMouseOver() {
    this.isHover = true;
    }

    @HostListener('mouseout')
    onMouseOut() {
    this.isHover = false;
    }

    @Output()
    clicked = new EventEmitter<string>()

    @HostListener('click')
    onClick(){
        this.clicked.emit(this.trackClick)
    }
}