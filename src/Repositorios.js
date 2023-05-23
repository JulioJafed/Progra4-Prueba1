import { useState, useEffect } from "react"

import "./css/secRepos.css";
import React from "react"
import Loading from './Loading';
import Profile from './Profile';
import "./css/secRepos.css"
/*function Repo() {
    const [items, setItems] = useState([])
    // Change this to any username whose repositories you want to get
    const [user] = useState("JulioJafed")
  
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
  
    return (
      <div className="CarruRepo">
        <div className="pt-10">
          <h1 className="mb-10 font-bold text-2xl">
            Repositorios creados por {user}
          </h1>
        </div>
  
        {!items ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {items.map((item) => (
              <Profile key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    )
  }
  export default Repo*/

  
function Repo() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("JulioJafed")

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

  return (
    <div className="CarruRepo">
      <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl">
          Repositorios creados por {user}
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Repo

  