import Map from '@components/Map'
import Markers from '@components/Markers'
import StoreBox from '@components/StoreBox'
import * as stores from '@data/store_data.json'
import { StoreType } from '@models/store'
import { revalidatePath } from 'next/cache'
import { useState } from 'react'

export default function Home({ stores }: { stores: StoreType[] }) {
  const [map, setMap] = useState(null)
  const [currentStore, setCurrentStore] = useState(null)
  console.log(currentStore)
  return (
    <>
      <Map setMap={setMap} />
      <Markers stores={stores} map={map} setCurrentStore={setCurrentStore} />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  )
}

export async function getStaticProps() {
  const stores = await fetch(`${process.env.API_URL}/api/stores`).then((res) =>
    res.json(),
  )
  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
