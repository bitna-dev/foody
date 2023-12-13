import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineHeart,
} from "react-icons/ai";
import { HiOutlineMapPin, HiOutlineCheck } from "react-icons/hi2";

interface StoreBoxProps {
  store: any;
  setStore: Dispatch<SetStateAction<any>>;
}
export default function StoreBox({ store, setStore }: StoreBoxProps) {
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
      {store && (
        <>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    store?.bizcnd_code_nm
                      ? `/markers/${store?.bizcnd_code_nm}.png`
                      : `/markers/default.png`
                  }
                  width={40}
                  height={40}
                  alt="아이콘 이미지"
                />
                <div>
                  <div className="font-semibold">{store?.upso_nm}</div>
                  <div className="text-sm">{store?.cob_code_nm}</div>
                </div>
              </div>
              <button type="button" onClick={() => setStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-2 gap-2 flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <HiOutlineMapPin />
                {store?.rdn_code_nm}
              </div>
              <AiOutlineHeart className="cursor-pointer" />
            </div>
            <div className="mt-2 gap-2 flex items-center ">
              <AiOutlinePhone />
              {store?.tel_no}
            </div>
            <div className="mt-2 gap-2 flex items-center ">
              <AiOutlineInfoCircle />
              {store?.cob_code_nm}
            </div>
            <div className="mt-2 gap-2 flex items-center ">
              <HiOutlineCheck />
              {store?.bizcnd_code_nm}
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.alert("상세보기작업중")}
            className="w-full bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 py-3 text-white font-semibold rounded-b"
          >
            상세보기
          </button>
        </>
      )}
    </div>
  );
}
