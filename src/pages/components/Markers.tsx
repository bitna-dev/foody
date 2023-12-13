import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkerProps {
  map: any;
  storeData: any[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({
  map,
  storeData,
  setCurrentStore,
}: MarkerProps) {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      //식당데이터 마커구현
      storeData?.forEach(async (store) => {
        // 마커이미지
        const fallbackImage = "/markers/default.png";
        let imageSrc = store?.bizcnd_code_nm
          ? `/markers/${store?.bizcnd_code_nm}.png`
          : fallbackImage; // 마커이미지의 주소입니다

        // Option 2:
        // let imageResponse = await fetch(imageSrc);

        // if (!imageResponse.ok) {
        //   console.log(
        //     `failed to fetch  ${imageSrc} falling back to ${fallbackImage}`
        //   );
        //   // fetch the
        //   imageResponse = await fetch(fallbackImage);
        //   if (!imageResponse.ok) {
        //     console.error(
        //       `danger! fallback image ${fallbackImage} doesn't exist`
        //     );
        //   }
        // }
        // const imageBlob = await imageResponse.blob();
        // imageSrc = URL.createObjectURL(imageBlob);

        const imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 데이터이름과 맞는 이미지가 없을 경우?

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          store?.y_dnts,
          store?.x_cnts
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // Option 1:
        // listen to onerror event and if function get called by the browser
        // then set the img.src to fallbackImage
        // marker.ca.onerror = () => {
        //   // remove the onerror function to prevent loops.
        //   marker.ca.onerror = null;
        //   marker.ca.src = fallbackImage;
        //   console.log("failed to load");
        // };

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        //마커 커서오버레이, 인포윈도우
        //표시될 내용
        const content = `<div class="infowindow">${store?.upso_nm}</div>`;
        const customOverlay = new window.kakao.maps.CustomOverlay({
          content: content,
          position: markerPosition,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });
        // 마우스오버 이벤트
        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          // 마커에 마우스오버 이벤트가 발생하면 커스텀 오버레이를 마커위에 표시합니다.
          customOverlay.setMap(map, marker);
        });
        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          // 마커에 마우스오버 이벤트가 발생하면 커스텀 오버레이를 마커위에 표시합니다.
          customOverlay.setMap(null);
        });

        //선택한 가게 저장
        window.kakao.maps.event.addListener(marker, "click", function () {
          setCurrentStore(store);
        });
      });
    }
  }, [map, setCurrentStore, storeData]);

  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers, map]);
  return <></>;
}
