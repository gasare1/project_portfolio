import React from 'react';
import Cookies from 'js-cookie';



class Userprofile extends React.Component {

     state = {
        username: Cookies.get('username')
     }

//  more code....
} 
export default Userprofile
