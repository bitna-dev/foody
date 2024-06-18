import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import {
  PiMapPinBold,
  PiPhoneBold,
  PiInfoBold,
  PiCheckBold,
} from 'react-icons/pi'

interface StoreProps {
  store: any
  setStore: Dispatch<SetStateAction<any>>
}
const StoreBox = ({ store, setStore }: StoreProps) => {
  return (
    <div className="fixed bg-white transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full">
      {store && (
        <div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    store?.bizcnd_code_nm != null
                      ? `/images/markers/${store?.bizcnd_code_nm}.png`
                      : `/images/markers/default.png`
                  }
                  alt={store?.bizcnd_code_nm}
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">{store?.upso_nm}</div>
                  <div className="text-sm">{store?.cob_code_nm}</div>
                </div>
              </div>
              <button type="button" onClick={() => setStore(null)}>
                <IoClose />
              </button>
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <PiMapPinBold />
              {store?.rdn_code_nm}
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <PiPhoneBold />
              {store?.tel_no}
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <PiInfoBold />
              {store?.cob_code_nm}
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <PiCheckBold />
              {store?.bizcnd_code_nm}
            </div>
          </div>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-500 text-white w-full p-2 rounded-b-md font-semibold"
            onClick={() => window.alert('상세보기 작업중')}
          >
            상세보기
          </button>
        </div>
      )}
    </div>
  )
}

export default StoreBox
