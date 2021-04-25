import { useRouter } from 'next/router'
import Link from 'next/link'
import ExerciseSearch from '@/components/ExerciseSearch'

import data from '@/data/prove.json'

function HomePage({ prove }) {
  const router = useRouter();

  function findExerciseHandler(level, skill) {
    const fullPath = `/esercizi/${level}/${skill}`
    router.push(fullPath);
  }
  
  return (
    <>
      <ExerciseSearch onSearch={findExerciseHandler} />
      <h1>Pronti per il test B1</h1>
      <ul>
      {prove.map(prova => (
        <li key={prova.id}>
          <Link href={{
            pathname: "/prova/[id]",
            query: { id: prova.id }
          }}>
            <a>Prova {prova.id}: {prova.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const { prove } = data;

  return {
    props: {
      prove: prove
    }
  }
}

export default HomePage