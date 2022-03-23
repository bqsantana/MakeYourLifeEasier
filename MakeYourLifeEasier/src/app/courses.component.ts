import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: '<h2>{{title}}</h2>'
})
export class CoursesComponent {
    title = 'MAKE YOUR LIFE EASIER'
    aplications = ["line jumper", "encode and translate", "list numbers"]
}