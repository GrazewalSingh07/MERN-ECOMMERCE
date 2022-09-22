import { Button, Container,Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack,Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {HiShoppingCart} from "react-icons/hi"


import {VscThreeBars} from "react-icons/vsc"
import { Search } from './Search'
import { loadData } from '../utils/SessionStorage'
import { useDispatch, useSelector } from 'react-redux'
import "./Navbar.css"
import { LOGOUT } from '../redux/Login/action'
 

export const Navbar = () => {
    const location= useLocation()
    
    const dispatch=useDispatch()
    const curr=loadData("user")
    const { isOpen, onOpen, onClose:onCloseDrawer } = useDisclosure()
    const navigate= useNavigate()
    const token= useSelector((state)=>state.LoginReducer.token)
 
  return (
    <Box background="white" zIndex={999} top={0} position="sticky" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" margin="auto"width="100%">
        
     <Box width="100%">
     <HStack   width="100%" spacing="auto">
            
            <Image p=".5rem" cursor="pointer"  onClick={()=>{
                navigate("/")
            }} width="5rem" src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-Cart.png"/>

         
        <Container maxW="container.md">
          <Search/>
        </Container>
        <HStack alignItems="center"   display={["none","none","none","flex"]} justifyContent="space-around" width="30%" >
         {token?null:   <Button borderRadius="none" borderBottom={location.pathname=="/register"?"1px solid":"none"}  _hover={{background:"none"}} className='a-black'  variant="ghost"onClick={()=>{
                    navigate("/register")
                }}>Register</Button >}
             {token?null  : <Button borderRadius="none" borderBottom={location.pathname=="/login"?"1px solid":"none"} _hover={{background:"none"}} className='a-black' variant="ghost" onClick={()=>{
                    navigate("/login")
                }}>Login</Button>}
                <Button borderRadius="none" borderBottom={location.pathname=="/cart"?"1px solid":"none"} _hover={{background:"none"}} className='a-black' onClick={()=>{
                    navigate("/cart")
                }}  variant="ghost"rightIcon={<HiShoppingCart fontSize="2rem"/>}>Cart</Button>
                <Menu>
        <MenuButton  _hover={{background:"none"}} className='a-black'  as={Button} variant="ghost">
            Profile
        </MenuButton>
        <MenuList>
            <MenuGroup title='Profile'>
           {token?<MenuItem>My Account</MenuItem>:<MenuItem onClick={()=>{
            navigate("/login")
           }}>Login</MenuItem>}
           {token? <MenuItem>My Orders </MenuItem>:null}
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
           {token? <MenuItem onClick={()=>{
                sessionStorage.clear()
                dispatch(LOGOUT())
           }} >Log out</MenuItem>:null}
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
     </Box>
           <Box width="100%">
           <HStack background="maroon" p="1rem" justifyContent="space-around">
            <Menu  >
                <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                    Women
                </MenuButton>
                <MenuList>
                    <MenuItem >
                    
                     <Image src='https://us.123rf.com/450wm/na2xa/na2xa1712/na2xa171201251/91416114-beautiful-young-girl-in-sunglasses-loves-shopping-bought-a-lot-of-things-in-a-black-penny.jpg?ver=6' />
                           
                    </MenuItem>
                    <MenuItem>
                        <HStack>
                            <Button  _hover={{background:"none"}} className='a-black' variant="ghost">Clothing</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">FootWear</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Watches</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Bags</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Accessories</Button>
                        </HStack>
                    </MenuItem>
                  
                </MenuList>
            </Menu>
            <Menu  zIndex={999} >
            <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                   Men
                </MenuButton>
                <MenuList  width="70%">
                    <MenuItem  >
                    <Image 
                        
                       src="https://emojika.com/wp-content/uploads/2021/05/men-category.jpg"
                       
                    />
                 
                    </MenuItem>
                    <MenuItem>
                        <HStack>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Clothing</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">FootWear</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Watches</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Bags</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Accessories</Button>
                        </HStack>
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            <Menu>
            <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                   Kids
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                       
                        src='https://www.babycouture.in/blog/wp-content/uploads/2022/01/Children-clothing.png'
                        
                    />
                    
                    </MenuItem>
                    <MenuItem>
                        <HStack>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Clothing</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">FootWear</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Watches</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Bags</Button>
                            <Button _hover={{background:"none"}} className='a-black' variant="ghost">Accessories</Button>
                        </HStack>
                    </MenuItem>
                    
                </MenuList>
            </Menu>
            <Menu>
            <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                 Electronics
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                        src='https://www.dqindia.com/wp-content/uploads/2016/10/electronics.jpg'
                        
                    />
                   
                    </MenuItem>
                    <MenuItem>
                        <Button _hover={{background:"none"}} className='a-black' variant="ghost">Smartphones</Button>
                        <Button _hover={{background:"none"}} className='a-black' variant="ghost">Laptops</Button>
                        <Button _hover={{background:"none"}} className='a-black' variant="ghost">Lighting</Button>
                        <Button _hover={{background:"none"}} className='a-black' variant="ghost">Automotive</Button>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Menu>
            <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                    Skin Care
                </MenuButton>
                <MenuList>
                    <MenuItem  >
                    <Image
                        
                        src='https://static3.depositphotos.com/1001951/174/i/600/depositphotos_1741295-stock-photo-beautiful-young-woman-washing-her.jpg'
                         
                    />
                  
                    </MenuItem>
                    <MenuItem margin="auto">
                     <Button _hover={{background:"none"}} className='a-black' variant="ghost">Skin care</Button>
                   </MenuItem>
                </MenuList>
            </Menu>
            <Menu>
            <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                   Groceries
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px'>
                    <Image
                        src="https://momooz.com/uploads/department/156_5914.jpg"
                    />
                    
                    </MenuItem>
                    <MenuItem margin="auto">
                         <Button _hover={{background:"none"}} className='a-black' variant="ghost">Groceries</Button>
                   </MenuItem>
                </MenuList>
            </Menu>
             <Menu>
             <MenuButton  color ="white" _hover={{background:"none",color:"white" }} className='a'  as={Button} variant="unstyled" >
                  Furniture
                </MenuButton>
                <MenuList>
                    <MenuItem >
                        <Image
                        src='https://image.made-in-china.com/202f0j00bhGfKVZYncqn/Best-Quality-as-Shown-in-The-Picture-Color-New-Import-Indoor-Classic-Furniture-Sofa.jpg'
                        />
                    
                    </MenuItem>
                    <MenuItem margin="auto">
                   <Button _hover={{background:"none"}} className='a-black' variant="ghost">Home Furniture</Button>
                   <Button _hover={{background:"none"}} className='a-black' variant="ghost">Home Decoration</Button>
                   
                   </MenuItem>
                    
                </MenuList>
            </Menu>
            </HStack>
           </Box>
    </Box>
  )
}
