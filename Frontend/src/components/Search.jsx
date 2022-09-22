import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { GoSearch } from 'react-icons/go'

export const Search = () => {
    const [search,setSearch]=useState("")
useEffect(()=>{
     
},[Search])

  return (
    <InputGroup>
    <InputLeftElement children={<GoSearch/>}/>
        <Input onChange={(e)=>{
            setSearch(e.target.value)
        }}  borderRadius="none" placeholder='Search by brand, category or title'/>
    </InputGroup>
  )
}
