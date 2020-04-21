import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'todoStatus'
})
export class TodoStatusPipes implements PipeTransform{
    transformedStatus: string
    transform(value: boolean){
        if(value){
            this.transformedStatus = '<strong class="green">YES</strong>'
            // this.transformedStatus = 'YES'
        } else{
            this.transformedStatus = '<span class="red">NO</span>'
            // this.transformedStatus = 'NO'
        }
        return this.transformedStatus
    }
}