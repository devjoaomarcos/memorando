import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({opacity: 0, width: 0}),
    animate('400ms ease-out', keyframes([
      style({offset: 0, opacity:0, width:0}),
      style({offset: 0.8, opacity:0.5, width:'*'}),
      style({offset: 1, opacity:1, width:'*'})
    ])),
    transition(':leave', [
      animate('200ms cubic-bezier(.13,.9,.8,.1)', style({ opacity: 0, width: 0}))
    ])
  ])
])
