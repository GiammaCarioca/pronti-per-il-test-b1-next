import { useRouter } from 'next/router'

import provas from '@/data/prove.json'

function CheckAnswersPage({ solutions }) {
  const { isReady, query } = useRouter();

  const checkAnswers = (answers, solutions) => {
    if (!answers || !solutions) return;

    let result = []

    for (const [key, value] of Object.entries(solutions)) {
      answers[key] === value ? result.push('giusto') : result.push('sbagliato')
    }
    
    return result
  };

  if (isReady) {
      
  const { answers } = JSON.parse(query.data);

  return (
    <>
      <h1>Le tue risposte:</h1>
      {checkAnswers(answers, solutions).map((item, index) => <p key={index}>{item}</p> )}
    </>
  )
  } else {
    return <p>Loading...</p>
  }

}

export async function getServerSideProps({ query }) {
  const { provaId, esercizioId } = JSON.parse(query.data);

  const prova = provas.prove.filter(prova => prova.id === provaId)

  const esercizio = prova[0].esercizi.filter(esercizio => esercizio.id === esercizioId)

  // console.log(esercizio[0].soluzioni)

  return {
    props: {
      solutions: esercizio[0].soluzioni
    }
  }
}

export default CheckAnswersPage