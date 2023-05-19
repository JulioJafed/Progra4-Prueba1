import './App.css';
import head_Page from './components/PageHead';
import { useState, useEffect } from "react"
import React from 'react'


export const Repositorios = () => {
    
    //Para dirigir al usuario del github
    const [user] = useState("JulioJafed")
   
    /*Lo usamos para almasenar los datos*/ 
    const [items, setItems] = useState([])
  
    useEffect(() => {
      const fetchRepos = async () => {
        const res = await fetch(
          `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
        )
        const data = await res.json()
        setItems(data)
        console.log(data)
      }
  
      fetchRepos()
    }, [user])
  }
  