import { renderModuleFactory } from '@angular/platform-server';
import {writeFileSync} from 'fs';

const {AppServerModuleNgFactory} = require('../dist/server/main.js');



renderModuleFactory(AppServerModuleNgFactory,{
    document:'<app-root></app-root>',
    url: '/'
})

    .then(html =>{
        console.log("pre-rendering successful, saving prerender.html");
        writeFileSync('./prerender.html', html);
    })

    .catch(error =>{
        console.log('Error Occurred: ', error );
    });