import React from 'react'
import Label, {Container} from './styles';

export default function Card(){
    return(
           <Container>
                   <header>
                       <Label color="#7159c1"/>
                   </header>
                   <p>Aprender React</p>
                <img src="https://api.adorable.io/avatars/285/danilo@adorable.io" alt=""></img>
               </Container>
        
    ) ;
}
