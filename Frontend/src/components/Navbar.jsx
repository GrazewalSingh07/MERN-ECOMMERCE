import { Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack,Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {HiShoppingCart} from "react-icons/hi"
import {GoSearch} from "react-icons/go"
import {VscThreeBars} from "react-icons/vsc"
import { Search } from './Search'
import { loadData } from '../utils/SessionStorage'
import { useSelector } from 'react-redux'
import "./Navbar.css"
 
 
export const Navbar = () => {
    const location= useLocation()
    
    const curr=loadData("user")
    const { isOpen, onOpen, onClose:onCloseDrawer } = useDisclosure()
    const navigate= useNavigate()
    const token= useSelector((state)=>state.LoginReducer.token)
 
  return (
    <Container position="sticky" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" margin="auto" maxW="container.2xl">
        
      <HStack   width="100%" spacing="auto">
            
                <Image p=".5rem" cursor="pointer"  onClick={()=>{
                    navigate("/")
                }} width="5rem" src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-Cart.png"/>

             
            <Container maxW="container.md">
              <Search/>
            </Container>
            <HStack alignItems="center"   display={["none","none","none","flex"]} justifyContent="space-around" width="30%" >
             {token?null:   <Button borderRadius="none" borderBottom={location.pathname=="/register"?"1px solid":"none"}  _hover={{background:"none"}} className='a'  variant="ghost"onClick={()=>{
                        navigate("/register")
                    }}>Register</Button >}
                 {token?null  : <Button borderRadius="none" borderBottom={location.pathname=="/login"?"1px solid":"none"} _hover={{background:"none"}} className='a' variant="ghost" onClick={()=>{
                        navigate("/login")
                    }}>Login</Button>}
                    <Button borderRadius="none" borderBottom={location.pathname=="/cart"?"1px solid":"none"} _hover={{background:"none"}} className='a' onClick={()=>{
                        navigate("/cart")
                    }}  variant="ghost"rightIcon={<HiShoppingCart fontSize="2rem"/>}>Cart</Button>
                    <Menu>
            <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost">
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
               {token?<MenuItem>My Account</MenuItem>:<MenuItem>Login</MenuItem>}
               {token? <MenuItem>My Orders </MenuItem>:null}
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
               {token? <MenuItem>Log out</MenuItem>:null}
                </MenuGroup>
            </MenuList>
            </Menu>
            </HStack>
            <Button  display={["block","block","block","none"]}  onClick={()=>{
                onOpen()
            }} variant="ghost"><VscThreeBars fontSize="2rem" /></Button>
            <Drawer onClose={onCloseDrawer} isOpen={isOpen} size="full" >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>   <Image p=".5rem" cursor="pointer"  onClick={()=>{
                            onCloseDrawer()
                        navigate("/")
                        }} width="5rem" src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-Cart.png"/> </DrawerHeader>
                        <DrawerBody>

                         <Stack spacing={6}>
                            <Text><b>User : </b>{curr?.fullname}</Text>
                            <Text><b>Email : </b>{curr?.email}</Text>
                        </Stack >
                        <Stack pt="2rem" spacing={6} width="100%" >
                            <Button _hover={{background:"none"}} className='a'  width="100%" variant="outline"onClick={()=>{
                                 onCloseDrawer()
                                    navigate("/register")
                                }}>Register</Button>
                               {token?null: <Button _hover={{background:"none"}} className='a' width="100%" variant="outline" onClick={()=>{
                                    onCloseDrawer()
                                    navigate("/login")
                                }}>Login</Button>}
                                <Button _hover={{background:"none"}} className='a'  onClick={()=>{
                                     onCloseDrawer()
                                    navigate("/cart")
                                }}  width="100%" variant="outline"rightIcon={<HiShoppingCart fontSize="2rem"/>}>Cart</Button>
                                <Button _hover={{background:"none"}} className='a'  width="100%" variant="outline">Log out</Button>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
            </Drawer>
            </HStack>
            <HStack p="1rem" spacing="auto">
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost" >
                    Women
                </MenuButton>
                <MenuList>
                    <MenuItem >
                    
                     <Image src='https://us.123rf.com/450wm/na2xa/na2xa1712/na2xa171201251/91416114-beautiful-young-girl-in-sunglasses-loves-shopping-bought-a-lot-of-things-in-a-black-penny.jpg?ver=6' />
                    
                    </MenuItem>
                  
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost"   >
                   Men
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                         width="100%"
                        src='https://images.meesho.com/images/widgets/EE4NS/pcbrj_300.webp'
                       
                    />
                 
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost"  >
                   Kids
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                       
                        src='https://www.babycouture.in/blog/wp-content/uploads/2022/01/Children-clothing.png'
                        
                    />
                    
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost" >
                 Electronics
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                        src='https://www.dqindia.com/wp-content/uploads/2016/10/electronics.jpg'
                        
                    />
                   
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost" >
                    Skin Care
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                        src='https://static3.depositphotos.com/1001951/174/i/600/depositphotos_1741295-stock-photo-beautiful-young-woman-washing-her.jpg'
                         
                    />
                   
                    </MenuItem>
                   
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost" >
                   Groceries
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px'>
                    <Image
                        src="https://momooz.com/uploads/department/156_5914.jpg"
                    />
                    
                    </MenuItem>
                    
                </MenuList>
            </Menu> <Menu>
                <MenuButton  _hover={{background:"none"}} className='a'  as={Button} variant="ghost" >
                  Furniture
                </MenuButton>
                <MenuList>
                    <MenuItem >
                        <Image
                        src='https://image.made-in-china.com/202f0j00bhGfKVZYncqn/Best-Quality-as-Shown-in-The-Picture-Color-New-Import-Indoor-Classic-Furniture-Sofa.jpg'
                        />
                    
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            </HStack>
    </Container>
  )
}
