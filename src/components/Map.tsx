import Script from 'next/script'
import React from 'react'

import * as stores from '@data/store_data.json'
// global kakao
declare global {
  interface Window {
    kakao: any
  }
}

const DEFAULT_LAT = 37.497625203
const DEFAULT_LNG = 127.03088379
const Map = () => {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map')
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      }
      const map = new window.kakao.maps.Map(mapContainer, mapOption)

      //marker
      stores?.['DATA']?.map((store) => {
        // 마커가 표시될 위치입니다
        var imageSrc =
            store.bizcnd_code_nm != null
              ? `/images/markers/${store?.bizcnd_code_nm}.png`
              : `/images/markers/default.png`, // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        var markerPosition = new window.kakao.maps.LatLng(
            store?.y_dnts,
            store?.x_cnts,
          ),
          markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption,
          )
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        })

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      })
    })
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  )
}

export default Map
