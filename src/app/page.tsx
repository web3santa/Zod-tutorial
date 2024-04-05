"use client"
import React, { useEffect } from 'react'

import Product from "./Product";

export default function Home() {
  useEffect(() => {
    fetch("api/product").then(res => res.json()
    ).then((data) => {
      console.log(data.name.toUpperCase());
      
    })
    
},[])
  return (
    <div>
      Hello
    </div>
  )
}
