import { Container, HStack, Input, Stack, Text,Image, useDisclosure, Heading, SlideFade, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Button, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import{MdEmail} from "react-icons/md"
 
import { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"
import {GiCheckMark} from "react-icons/gi"
 
import {ImCross} from "react-icons/im"
import { useDispatch, useSelector } from 'react-redux'
import {  resetRegister } from '../redux/Register/action'
import { Navigate } from 'react-router-dom'
import { login } from '../redux/Login/action'

const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
export const Login = () => {
   
 const token= useSelector((state)=>state.LoginReducer.token)
   const loginSuccess= useSelector((state)=>state.LoginReducer.loginSuccess)
   const loginRequest= useSelector ((state)=>state.LoginReducer.loginRequest)
    const LoginError= useSelector((state)=>state.LoginReducer.error)
   const dispatch= useDispatch()
   const [error,setError]=useState("")
   const [overlay, setOverlay] = React.useState(<OverlayOne />)
   const [data,setData]= useState({})
   const [showPassword,setShowPassword] = useState(false)
   const {isOpen,  onToggle } = useDisclosure()
   const { 
       isOpen: isOpenErrorModal, 
       onOpen: onOpenErrorModal, 
       onClose: onCloseErrorModal 
   } = useDisclosure()


   const { 
    isOpen: isOpenLoginErrorModal, 
    onOpen: onOpenLoginErrorModal, 
    onClose: onCloseLoginErrorModal 
} = useDisclosure()

useEffect(()=>{
    if(LoginError){
        setOverlay(<OverlayOne />);
        onOpenLoginErrorModal()
    }
},[LoginError])
   useEffect(()=>{
    dispatch(resetRegister())
   },[])

   useEffect(()=>{
       onToggle()
 },[])
 
 const handleChange=(e)=>{
   const {name, value} =e.target
    
   setData({...data,[name]:value})
 }
 const validateEmail = (email) => {
   return String(email)
     .toLowerCase()
     .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
 };
 
 const handleSubmit=()=>{
   if(!data?.email||!validateEmail(data?.email)){
       setError("Please enter email")
       setOverlay(<OverlayOne />)
       onOpenErrorModal()
   }else if(!data?.password){
       setError("Please enter password")
       setOverlay(<OverlayOne />)
       onOpenErrorModal()
   
   }
   else{
       dispatch(login(data))
   }
 }

if(token){
  
   return <Navigate to="/"/>
}
 return (
   <Container  pt="5rem" textAlign="center" margin="auto" maxW="container.md">
       <Stack p="2rem">
           <Container> <Image margin="auto" width="10rem" src="https://static.wixstatic.com/media/0fd671_bee87a7dbc7640129e5477f5f4b84499~mv2.gif"/>
           <SlideFade in={isOpen} offsetY='20px'>
               <Heading fontFamily="cursive" color="maroon">Login</Heading>
            </SlideFade>
           </Container>
           
           <InputGroup>
           <InputLeftElement children={<MdEmail/>}/>
                <Input onChange={handleChange}  name="email" variant="flushed"placeholder="Enter your Email"/>
                <InputRightElement children={data?.email?.length>3&&validateEmail(data?.email)?<GiCheckMark color="green"/>:data?.email?.length>0&&!validateEmail(data?.email)?<ImCross color="red"/>:null}/>
           </InputGroup>
           <InputGroup>
               <InputLeftElement children={data?.password?.length>6? <GiCheckMark color="green"/>:<RiLockPasswordFill/>}/>
               <Input onChange={handleChange}  name="password" type={showPassword?"text":"password"} variant="flushed" placeholder='Enter password'/>
               <InputRightElement onClick={()=>{
                   setShowPassword(!showPassword)
               }} children={showPassword? <AiFillEye/>:<AiFillEyeInvisible/>}/>
           </InputGroup>
           
          
            
          
       </Stack>
     {loginRequest?<Button borderRadius="none" _hover={{background:"maroon",color:"white"}} colorScheme="maroon" variant="outline" width="100%"><Spinner/></Button>:  <Button onClick={handleSubmit} borderRadius="none" _hover={{background:"maroon",color:"white"}} colorScheme="maroon" variant="outline" width="100%">Login</Button>}
       <Modal textAlign="center" isCentered isOpen={isOpenErrorModal} onClose={onCloseErrorModal}>
       {overlay}
       <ModalContent>
         <ModalHeader textAlign="center">Please enter valid credentials</ModalHeader>
        
         <ModalBody textAlign="center">
           <Text>{error}</Text>
         </ModalBody>
         <ModalFooter>
           <Button onClick={onCloseErrorModal}>Close</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>

     <Modal textAlign="center" isCentered isOpen={isOpenLoginErrorModal} onClose={onCloseLoginErrorModal}>
       {overlay}
       <ModalContent>
         <ModalHeader textAlign="center">Please enter valid credentials</ModalHeader>
        
         <ModalBody textAlign="center">
           <Text>{LoginError}</Text>
         </ModalBody>
         <ModalFooter>
           <Button onClick={onCloseLoginErrorModal}>Close</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>
   </Container>
   )
}
