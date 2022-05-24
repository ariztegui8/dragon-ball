
import React from 'react'
import characters from '../characters.json';
import styled from 'styled-components';

const OcultarInfo = styled.div`
  position: absolute;
  text-align: center;
  display: none;
`;

const Title = styled.p`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  margin: 10px 0;
`;

const ContainerBlogImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Imagen = styled.img`
  transition: 0.5s;
  width: 100%;

  &:hover{
    filter: brightness(0.3);
    cursor: pointer;
  }
`;

const Blog = () => {
  return (
    <>
         <div className='p-2 container-blog'>
          {characters.map(e =>(
            <ContainerBlogImg className='col-4 p-2'>
              <Imagen src={e.img} alt="img"/>
                <OcultarInfo>
                  <Title>{e.nombre}</Title>
                  <button className='btn btn-secondary'>Ver más</button>
                </OcultarInfo>
            </ContainerBlogImg>
          ))}
         </div>
    </>
  )
}

export default Blog