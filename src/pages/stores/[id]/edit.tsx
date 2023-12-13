import { useRouter } from "next/router";

export default function StoreEdit() {
  const router = useRouter();
  const { id } = router.query;
  return <div>StoreDetail : {id}</div>;
}
