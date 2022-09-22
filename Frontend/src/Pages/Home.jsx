import { Container, Heading,Stack,HStack,Image,Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
 
const contentStyleSlider = {
  paddingTop:"2rem",
  height: '15rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'smokewhite',
};


export const Home = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    
    useEffect(()=>{
      axios.get("http://localhost:4000/products").then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
  return (
    <Container  maxW="container.2xl">

    <Container  maxW="container.2xl">
     <Carousel  autoplay>
        <Box>
          <Image width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" height="35rem"/>
        </Box>
        <Box>
         <Image width="100%" src="https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg" height="35rem"/>
        </Box>
        <Box>
        <Image width="100%" src="https://www.etcspl.com/wp-content/uploads/2017/11/e-commerce-banner.jpg" height="35rem"/>
        </Box>
        <Box>
        <Image width="100%" src="https://mindstacktechnologies.com/blog/wp-content/uploads/2018/01/ecommerce-banner.jpg" height="35rem"/>
        </Box>
      </Carousel>

    </Container>
      <Container pt="2rem" maxW="container.xl">
        <Heading pl="1rem" fontWeight={400}>Women</Heading>
        <Carousel   autoplay>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack   cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img height="100%"  src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" />

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem"  >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        
      </Carousel>
      </Container>
      <Container p="2rem" maxW="container.xl">
        <Heading pl="1rem" fontWeight={400}>Men</Heading>
        <Carousel   autoplay>
        <Box >
          <HStack pl="1rem"pr="1rem" >
            <Stack   cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img height="100%" width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem"  >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        
      </Carousel>
      </Container>


      <Container p="2rem" maxW="container.xl">
        <Heading  pl="1rem" fontWeight={400}>Kids</Heading>
         <Carousel   autoplay>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack   cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img height="100%" width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem"  >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        
      </Carousel>
      </Container>
      <Container p="2rem" maxW="container.xl">
        <Heading  pl="1rem" fontWeight={400}>Furniture</Heading>
        <Carousel   autoplay>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack   cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img height="100%" width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem"  >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        
      </Carousel>
      </Container>
      <Container p="2rem" maxW="container.xl">
        <Heading pl="1rem" fontWeight={400}>Electronics</Heading>
        <Carousel   autoplay>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack   cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img height="100%" width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem" >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        <Box>
          <HStack pl="1rem"pr="1rem"  >
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack>
            <Stack  cursor="pointer" _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img width="100%" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" style={contentStyleSlider}/>

            </Stack >
          </HStack>
          
        </Box>
        
      </Carousel>
      </Container>
    </Container>
  )
}
