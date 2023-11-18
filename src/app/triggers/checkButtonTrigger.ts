import {animate, style, transition, trigger} from "@angular/animations";

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])
