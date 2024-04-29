import Head from "next/head";
import { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import BrandBox from "../components/BrandBox";
import CityBox from "../components/CityBox";
import Loader from "../components/Loader";
import { updateCitiesArray } from "../utils";

// const client = new w3cwebsocket("wss://city-ws.herokuapp.com");

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // set random aqi for testing
      setCities(updateCitiesArray(cities, [
        { city: "Mumbai", aqi: 300+20*Math.random(), date: new Date().getTime() },
        { city: "Delhi", aqi: 350+20*Math.random(), date: new Date().getTime() },
        { city: "Bangalore", aqi: 250+10*Math.random(), date: new Date().getTime() },
        { city: "Hyderabad", aqi: 260+10*Math.random(), date: new Date().getTime() },
        { city: "Chennai", aqi: 170+10*Math.random(), date: new Date().getTime() },
        { city: "Kolkata", aqi: 180+10*Math.random(), date: new Date().getTime() },
        { city: "Ahmedabad", aqi: 190+10*Math.random(), date: new Date().getTime() },
        { city: "Surat", aqi: 200+10*Math.random(), date: new Date().getTime() },
        { city: "Pune", aqi: 210+10*Math.random(), date: new Date().getTime() },
        { city: "Jaipur", aqi: 220+10*Math.random(), date: new Date().getTime() },
        { city: "Lucknow", aqi: 230+10*Math.random(), date: new Date().getTime() },
        { city: "Nagpur", aqi: 240+10*Math.random(), date: new Date().getTime() },
        { city: "Kanpur", aqi: 250+10*Math.random(), date: new Date().getTime() },
        { city: "Indore", aqi: 260+10*Math.random(), date: new Date().getTime() },
        { city: "Thane", aqi: 270+10*Math.random(), date: new Date().getTime() },
        { city: "Nashik", aqi: 280+10*Math.random(), date: new Date().getTime() },
        { city: "Vadodara", aqi: 190+10*Math.random(), date: new Date().getTime() },
        { city: "Visakhapatnam", aqi: 100+10*Math.random(), date: new Date().getTime() },
        { city: "Pimpri-Chinchwad", aqi: 110+10*Math.random(), date: new Date().getTime() },
        { city: "Rajkot", aqi: 130+10*Math.random(), date: new Date().getTime() },
      ]));
      // fetch("https://api.waqi.info/feed/india/?token=6982ce096ea894aae42f97da70ed6f08be617329")
      //   .then(res => res.json())
      //   .then(data => setCities(updateCitiesArray(cities, data)))
      //   .catch(err => console.error(err));
    }, 5000);

    return () => clearInterval(interval);
  })

  // useEffect(() => {
  //   setCities(updateCitiesArray(cities, [
  //     { city: "Mumbai", aqi: 30, date: new Date().getTime() },
  //     { city: "Delhi", aqi: 50, date: new Date().getTime() },
  //     { city: "Bangalore", aqi: 20, date: new Date().getTime() },
  //     { city: "Hyderabad", aqi: 40, date: new Date().getTime() },
  //   ]));
  //   // client.onmessage = ({ data }) =>
  //   // // Generate dummy data as server is not running
  //   //   setCities(updateCitiesArray(cities, [
  //   //     { city: "Mumbai", aqi: 30, date: new Date().getTime() },
  //   //     { city: "Delhi", aqi: 50, date: new Date().getTime() },
  //   //     { city: "Bangalore", aqi: 20, date: new Date().getTime() },
  //   //     { city: "Hyderabad", aqi: 40, date: new Date().getTime() },
  //   //   ]));

  //     // setCities(updateCitiesArray(cities, JSON.parse(data)));
  // });

  return (
    <div>
      <Head>
        <title>Air Quality Monitor</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/logo.png"
        />
      </Head>

      <main className="rounded-md">
        <div className="md:flex relative pl-10">
          <BrandBox cities={cities} />

          <div className="bg-gray-200 flex-1 p-5 min-h-screen">
            {cities.length <= 0 ? (
              <Loader className="mt-10" />
            ) : (
              <div className="lg:flex flex-wrap">
                {cities.map((city, index) => (
                  <CityBox key={index} {...city} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
