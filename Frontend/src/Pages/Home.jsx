import { Container } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    useEffect(()=>{

    },[])
  return (
    <Container>

    </Container>
  )
}
