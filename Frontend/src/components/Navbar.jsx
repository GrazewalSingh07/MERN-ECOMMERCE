import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate= useNavigate()
  return (
    <Container margin="auto" maxW="container.2xl">
      <HStack spacing="auto">
      <Button onClick={()=>{
            navigate("/register")
        }}>Register</Button>
        <Button onClick={()=>{
            navigate("/login")
        }}>Login</Button>
        <Button onClick={()=>{
            navigate("/")
        }}>Home</Button>
      </HStack>
    </Container>
  )
}
