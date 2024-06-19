import { StoreType } from '@models/store'
import Image from 'next/image'
import React from 'react'

const StoreListPage = ({ stores }: { stores: StoreType[] }) => {
  console.log(stores)
  return (
    <div className="px-4 md:max-w-5x mx-auto py-8">
      <ul role="list" className="divide-y divide-gray-100">
        {stores?.map((store) => (
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <Image
                src={
                  store.bizcnd_code_nm != null
                    ? `/images/markers/${store?.bizcnd_code_nm}.png`
                    : `/images/markers/default.png`
                }
                alt={store?.upso_nm}
                width={40}
                height={40}
              />
              <div>
                <div className="text-sm font-semibold leading-9 text-gray-900">
                  {store?.upso_nm}
                </div>
                <div className=" mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                  {store?.upso_nm}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="text-sm font-semibold leading-6 text-gray-600">
                {store?.rdn_code_nm}
              </div>
              <div className=" mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                {store?.tel_no && `${store?.tel_no} | `}{' '}
                {store?.crtfc_gbn_nm && `${store?.crtfc_gbn_nm}`}
                {store?.bizcnd_code_nm != 'default' &&
                  ` | ${store?.bizcnd_code_nm}`}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreListPage

export async function getServerSideProps() {
  const stores = await fetch(`${process.env.API_URL}/api/stores`).then((res) =>
    res.json(),
  )
  return {
    props: { stores },
  }
}
