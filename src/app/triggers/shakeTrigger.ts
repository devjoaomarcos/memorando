import {animate, keyframes, query, style, transition, trigger} from "@angular/animations";

// código omitido…

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query(':self, input.ng-invalid:focus, select.ng-invalid:focus', [
      animate('0.5s', keyframes([
        style({ border: '2px solid red'}),
        style({ transform: 'translateX(0)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(0)'}),
      ]))
    ], {optional: true})
  ])
])
