"use client"

export default function SiderBar()
{
   // MAKE THIS SIDE BAR LIKE YTB, IS FREEZES THE SCREEN AND LET USER ONLY MOVE THE SIDEBAR, unless clicked outside
   return (
      <>
         <div
            style={{
               display:'flex',
               backgroundColor:'grey',
               flexDirection:'column',
               //width adjustable
            }}
         >
            <div
               id="sidebar-header"
            >

            </div>

            <div
               id="map-items" // or all items not necessarily a map
            >
               
            </div>
         </div>
      </>
   )
}