"use client"

import { useState } from "react"
import SiderBar from "../sideBar"

export default function Header()
{
   const [openSideBar, setOpenSideBar] = useState(false)
   const webSiteName = 'math-reich' // make it global

   return (
      <>
         <div
            style={{backgroundColor: "purple", width:"100%", height:"25px", display:'flex'}}
         >

            <div
               style={{
                  backgroundColor:'greenyellow',
                  margin:'2px 0 2px 0' // let it be smaller then the header main div
               }}
            >
               <a>Header</a>

               <button
                  onClick={() => {setOpenSideBar(true)}} // thinking now, maybe this is not the best way to do this
               >

               </button>

            </div>

            <div
               style={{
                  backgroundColor:'whitesmoke',
                  margin:'2px 0 2px 0' // let it be smaller then the header main div
               }}
            >
               <a>{webSiteName}</a>
            </div>
         </div>
      </>
   )
}