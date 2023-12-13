/* global kakao */
import Map from "./components/Map";
import Markers from "./components/Markers";
import * as stores from "@/data/store_data.json";
import { useState } from "react";
import StoreBox from "./components/StoreBox";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home() {
  const storeData = stores["DATA"];
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  return (
    <>
      <Map setMap={setMap} />
      <Markers
        map={map}
        storeData={storeData}
        setCurrentStore={setCurrentStore}
      />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}
