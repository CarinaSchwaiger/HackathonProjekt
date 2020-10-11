// import Anna_A from './Anna_A.png';
// import Anna_bin from './Anna_bin.png';
// import Anna_Ich from './Anna_Ich.png';
// import Anna_N from './Anna_N.png';

// import Pham_bin from './Pham_bin.png';
// import Pham_Dank from './Pham_Dank.png';
// import Pham_Ich from './Pham_Ich.png';
// import Pham_in from './Pham_in.png';
// import Pham_Name from './Pham_Name.png';
// import Pham_Pforzheim from './Pham_Pforzheim.png';
// import Pham_vielen from './Pham_vielen.png';
// import Pham_willkommen from './Pham_willkommen.png';
// import Pham_wohne from './Pham_wohne.png';

import React from 'react';

// Ich bin A N N A.
// Ich bin <Namensschild>. Ich wohne in Pforzheim.
// Vielen Dank!
// Willkommen!

const pictures = [{name:'Ich bin A-N-N-A.', 
                    url : [process.env.PUBLIC_URL + '/Anna_Ich.png', process.env.PUBLIC_URL + '/Anna_bin.png', process.env.PUBLIC_URL + '/Anna_A.png',
                        process.env.PUBLIC_URL + '/Anna_N.png', process.env.PUBLIC_URL + '/Anna_N.png', process.env.PUBLIC_URL + '/Anna_A.png']},
                  {name: 'Ich bin <Namensschild>. Ich wohne in Pforzheim.', 
                    url : [process.env.PUBLIC_URL + '/Pham_Ich.png', process.env.PUBLIC_URL + '/Pham_bin.png', process.env.PUBLIC_URL + '/Pham_Name.png',
                        process.env.PUBLIC_URL + '/Pham_Ich.png', process.env.PUBLIC_URL + '/Pham_wohne.png', process.env.PUBLIC_URL + '/Pham_in.png', process.env.PUBLIC_URL + '/Pham_Pforzheim.png']},
                  {name: 'Vielen Dank!', 
                    url : [process.env.PUBLIC_URL + '/Pham_vielen.png', process.env.PUBLIC_URL + '/Pham_Dank.png']},                
                  {name: 'Willkommen!', 
                    url : [process.env.PUBLIC_URL + '/Pham_willkommen.png']}
]

export default function Pictures(props) { 
    const currentCombo = pictures[props.counter_pic].url;
    return(<div> 
            <ul> 
                {currentCombo.map(function (picture_url){
                    return <img src={picture_url}/>
                })}
            </ul>
            <p> {pictures[props.counter_pic].name}</p>
        </div>)
}                 