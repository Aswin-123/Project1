import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

 export let fade =  trigger('fade',[
     state ('void',style({ opacity: 0})),   
     transition(':enter, :leave',[     
       animate(2000),
     ])

   ])
export let slide =trigger('slide',[
    transition(':enter',[
        style({transform: 'translateX(100%)'}),
        animate('0.5s cubic-bezier(.60, .29, .07, 1.02)')
    ]),
    transition(':leave',[
       animate('0.5s ease-out', keyframes([
           style({
            offset: .2,
            opacity: 1,   
            transform: 'translateX(50px)'
        }),
            style({
             offset: 1,
             opacity: 1,   
             transform: 'translateX(-100%)'
         }),
        ]))
    ])
])
 