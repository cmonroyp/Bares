export class ModelBar {
    name: string;
    rate:number;
    calification:number
    img:any;
    address:string;
    comments:Array<any>;
    like:string;
    nolike:string;
}

export const BARES:ModelBar[] =[ 
    {name:'Melenium Bar',rate:1.1,img:'assets/imgs/1.jpg',like:'12',nolike:'3',address:'cra 4 # 5-98 EL Pedregal',calification:60,
    comments:[{comment:'Me gusto mucho, la atencion es excelente lo voy a recomendar a mis amigos.'}]
    },
    {name:'La esquina',rate:2.4,img:'assets/imgs/2.jpg',like:'112',nolike:'8',address:'Avda 90 los Rosales',calification:15,
    comments:[{comment:'Le falta mejorar la atencion no es tan buena.'},
              {comment:'Excelenta para compartir con los amigos.'}
             ]
    },
    {name:'Brisas Bar',rate:3.5,img:'assets/imgs/3.jpg',like:'90',nolike:'7',address:'avda circunvalar 33-08 Castilla',calification:10,
    comments:[{comment:'Excelente la atencion, lo recomiendo.'}]
    },
    {name:'Fonda Azul',rate:4.0,img:'assets/imgs/4.jpg',like:'810',nolike:'15',address:'calle 28 #53-25 Centro',calification:200,
    comments:[{comment:'Excelente la atencion, lo recomiendo.'},
              {comment:'Le falta mejorar.'},
              {comment:'Excelente la Musica.'}
             ]
    },
    {name:'Los molinos',rate:4.6,img:'assets/imgs/5.jpg',like:'510',nolike:'45',address:'cra 92 A #102-32 Bosa',calification:120,
    comments:[{comment:'Reserve y no me guardaron la mesa.'},
              {comment:'El sitio es espéctacular.'},
              {comment:'Excelente la atencion, volvere.'}
             ]
    },
    {name:'Los corrales',rate:5.0,img:'assets/imgs/6.jpg',like:'950',nolike:'1',address:'calle 102 con 35 la Calleja',calification:315,
    comments:[{comment:'Excelente sitio, muy facil y agradable la forma de reservar.'},
              {comment:'Lo recomendare a mis amigos.'},
             ]
    }
]