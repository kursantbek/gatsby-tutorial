import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
  return (
    <Wrapper>
        <article>
            <h4>fixed</h4>
            <StaticImage src='../assets/images/main.jpeg' 
            alt="food" 
            placeholder='blurred'
            layout='constrained'
            width={200}
            className='example-img'
            as='div'
            />
        </article>
    </Wrapper>
  )
}

const Wrapper=styled.section`
   width: 70vw;
   margin: 0 auto;
   display: grid;
   text-align: center;
   gap: 2rem;
    article{
        border: 2px solid red;
    }.example-img{
        border-radius: 1rem;
    }
    @media (min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`
export default Images