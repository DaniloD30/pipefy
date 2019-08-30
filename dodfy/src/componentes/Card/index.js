import React, {useRef} from 'react'
import {Container, Label} from './styles';
import {useDrag, useDrop} from 'react-dnd';

export default function Card({ data, index }){
  const ref = useRef();
  const [{isDragging}, dragRef] = useDrag({
    item: {type:'CARD', index, id: data.id, content: data.content},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
     const draggedIndex = item.index;
     const targetIndex = index;

     if(draggedIndex === targetIndex){
        return;
     }

     //precisa calcular o tamanho do componenete, 
    //  para saber o meio dele e substituir o card
    const targetSize = ref.current.getBoundingClientRect();
    const targetCenter = (targetSize.bottom - targetSize.top) / 2;

    const draggedOffset = monitor.getClientOffset();
    // dragged saber o quanto o card foi arrastado
    const draggedTop = draggedOffset.y - draggedOffset.top;

    // Condições feitas para verificar se o usuario arrastou o card
    // para o centro do outro, se não n acontecera a troca

     if(draggedIndex < targetIndex && draggedTop
        < targetCenter){
          return;
        }
        if(draggedIndex > targetIndex && draggedTop
          > targetCenter){
            return;
          }


    }
  })

  dragRef(dropRef(ref));

//UseDrag é um elemento que pode ser arrastavel
// UseDrop é um elemento que podem arrastar outros por cima.
    return(
           <Container ref={ref} isDragging={isDragging}>
                   <header>
                      {data.labels.map(label => <Label key={label} color={label}/>)}
                   </header>
                   <p>{data.content}</p>
                 {data.user && <img src={data.user} alt=""></img>}
               </Container>
        
    ) ;
}
