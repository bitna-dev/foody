import Script from 'next/script'
import React, { Dispatch, SetStateAction } from 'react'

// global kakao
declare global {
  interface Window {
    kakao: any
  }
}

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>
}

const DEFAULT_LAT = 37.497625203
const DEFAULT_LNG = 127.03088379
const Map = ({ setMap }: MapProps) => {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map')
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      }
      const map = new window.kakao.maps.Map(mapContainer, mapOption)
      setMap(map)
    })
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  )
}

export default Map
