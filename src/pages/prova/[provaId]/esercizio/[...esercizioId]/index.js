import IsInfoInTheText from '@/components/IsInfoInTheText'

import data from '@/data/prove.json'

function Esercizio({ prova, esercizio }) {
  return (
    <>
      <IsInfoInTheText prova={prova} esercizio={esercizio} />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const { provaId, esercizioId } = query;
  // console.log(provaId, esercizioId[0])
  
  const prova = data.prove.filter(prova => prova.id === provaId)
  const esercizio = prova[0].esercizi.filter(esercizio => esercizio.id === esercizioId[0])

  return {
    props: {
      prova: prova[0],
      esercizio: esercizio[0]
    }
  }
}

export default Esercizio