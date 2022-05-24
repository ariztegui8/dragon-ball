
import React from 'react'
import characters from '../characters.json';
import styled from 'styled-components';

const ContainerBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const OcultarInfo = styled.div`
  position: absolute;
  text-align: center;
  /* display: none; */
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
        <ContainerBlog className='p-2'>
          {characters.map(e =>(
            <ContainerBlogImg className='col-4 p-2'>
              <Imagen src={e.img} alt="img"/>
                <OcultarInfo className='ocultar-info'>
                  <Title>{e.nombre}</Title>
                  <button className='btn-card btn btn-secondary'>Ver más</button>
                </OcultarInfo>
            </ContainerBlogImg>
          ))}
        </ContainerBlog>
    </>
  )
}

export default Blog