'use client'
import RightMenue from "./components/RightMenue";
import Map from "./components/Map.jsx";
import TabsComponent from "./components/TabsComponent"
import { useState } from "react";

export default function Home() {
  const [searchOriginLatitude, setsearchOriginLatitude] = useState(29.932272);
  const [searchOriginLongitude, setsearchOriginLongitude] =useState(31.4288878);

  return (
    <div className="flex gap-6 pt-6 px-6 ">
      {/* <div className='hidden lg:block w-[20%]'> <LeftMenue type={'home'}/></div> */}
      <div className="w-full md:w-[70%] ">
        <div className="flex flex-col gap-6">
          <Map
            searchOriginLatitude={searchOriginLatitude}
            searchOriginLongitude={searchOriginLongitude}
            setsearchOriginLatitude={setsearchOriginLatitude}
            setsearchOriginLongitude={setsearchOriginLongitude}
          />
        <TabsComponent />
        </div>
      </div>
      <div className="hidden md:block w-[30%]">
        <RightMenue
          searchOriginLatitude={searchOriginLatitude}
          searchOriginLongitude={searchOriginLongitude}
          setsearchOriginLatitude={setsearchOriginLatitude}
          setsearchOriginLongitude={setsearchOriginLongitude}
        />
      </div>
    </div>
  );
}
