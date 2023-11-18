// código omitido…

import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

export const listStateTrigger = trigger('listState', [
    transition('* => *', [
        query(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
            }),
            stagger(200, [
                animate('500ms ease-out', keyframes([
                    style({
                        opacity: 1,
                        transform: 'translateX(15%)',
                        offset: 0.4
                    }),
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    })
                ]))
            ])
        ], {optional: true})
    ])
])
