import { useRouter } from "next/router";

export default function StoreDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <div>StoreDetail: {id}</div>;
}
