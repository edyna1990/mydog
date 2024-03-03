import React from "react";
import { useState } from "react";
import { HairCateg } from "../components/HairCateg";
import { Posts } from "../components/Posts";
import { EnergyCateg } from "../components/EnergyCateg";
import { SocialCateg } from "../components/SocialCateg";
import { IntellCateg } from "../components/IntellCateg";
import { SizeCateg } from "../components/SizeCateg";

export const Home = () => {

  const defaultProperties = {
    szorzetek: null,
    energiak: null,
    meretek: null,
    intelligenciak: null,
    szocialisigenyek: null,
  }

  const [selectedProperties, setSelectedProperties] = useState(defaultProperties);

  const clearProperties = () => {
    setSelectedProperties(defaultProperties)
  }

  return (
    <div className="home">
      <div className="categ" style={{marginTop: '20px'}}>
        <HairCateg 
          selectedProperties={selectedProperties}
          setSelectedProperties={setSelectedProperties}
        />
        <EnergyCateg
          selectedProperties={selectedProperties}
          setSelectedProperties={setSelectedProperties}
        />
        <SocialCateg
          selectedProperties={selectedProperties}
          setSelectedProperties={setSelectedProperties}
        />
        <IntellCateg
          selectedProperties={selectedProperties}
          setSelectedProperties={setSelectedProperties}
        />
        <SizeCateg
          selectedProperties={selectedProperties}
          setSelectedProperties={setSelectedProperties}
        />
      </div>
      <div style={{textAlign:'center', margin:'10px 0'}}>
        <button onClick={()=>clearProperties()} className='btn btn-primary '>Szűrés törlése</button>
      </div>
      <div className="posts">
        <Posts selectedProperties={selectedProperties} />
      </div>
    </div>
  );
};
