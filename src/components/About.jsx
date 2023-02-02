import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState({});

  async function getData() {
    const res = await fetch("/superHeros.json");
    const data = await res.json();
    console.log(data);
    setHeroData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  //Derived State
  const hero = heroData[params.heroId];
  console.log(hero);
  if (Object.keys(heroData).length > 0 && !hero) {
    //Let's redirect the user to a hero that DOES exist
    setTimeout(() => {
      // navigate("/about/Ironman");
      navigate(-1);
    }, 2000);
  }

  return (
    <>
      <h1>About This Hero</h1>
      <h2>{params.heroId}</h2>
      <div className="heroCard">
        {hero ? (
          <>
            <p>{`PowerLevel: ${hero.powerLevel}`}</p>
            <p>{`Intelligence: ${hero.intelligence}`}</p>
          </>
        ) : (
          <>
            <p>No hero found by that name</p>
            <p>Redirecting...</p>
          </>
        )}
      </div>
    </>
  );
}
