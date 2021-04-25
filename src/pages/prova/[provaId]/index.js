import { useRouter } from 'next/router'

export default function Prova() {
  const router = useRouter()
  const { provaId } = router.query

  return (
    <h1>Prova {provaId}</h1>
  )
}