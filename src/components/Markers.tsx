import React, { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { StoreType } from 'src/models/store'
interface MarkersProps {
  map: any
  stores: any[]
  setCurrentStore: Dispatch<SetStateAction<any>>
}

const Markers = ({ map, stores, setCurrentStore }: MarkersProps) => {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      //marker
      stores?.map((store) => {
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

        // 커서가 오버되었을때 마커 위 표시
        var content = `<div class ="infowindow">${store?.upso_nm}</div>`

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        })

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseover', function () {
          // 마커에 마우스오버 이벤트가 발생하면 커스텀오버레이를 마커위에 표시합니다
          customOverlay.setMap(map)
        })

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseout', function () {
          // 마커에 마우스아웃 이벤트가 발생하면 커스텀오버레이를 제거합니다
          customOverlay.setMap(null)
        })
        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, 'click', function () {
          setCurrentStore(store)
        })

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      })
    }
  }, [map, stores, setCurrentStore])

  useEffect(() => {
    loadKakaoMarkers()
  }, [loadKakaoMarkers, map])
  return <></>
}

export default Markers
