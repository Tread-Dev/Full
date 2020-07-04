import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

 import App from './components/App';


// import UsefulComponent from './usefulcomponent'

// render(
//     <App />,
//     document.querySelector('#root')
// );

render(
    <div>
        <App/>
   
    </div>
    
    
    ,
    document.querySelector('#root')
);
