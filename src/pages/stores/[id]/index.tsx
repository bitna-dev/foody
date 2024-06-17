import { useRouter } from 'next/router'
import React from 'react'

const StoreDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>Store Detail : {id}</div>
}

export default StoreDetail
