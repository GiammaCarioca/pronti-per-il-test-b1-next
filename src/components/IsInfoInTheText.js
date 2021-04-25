import { useState } from 'react'
import { useRouter } from 'next/router'

function IsInfoInTheText({ prova, esercizio }) {
  // console.log(esercizio)

  const [answers, setAnswers] = useState({})
  let myRefs = [];

  const router = useRouter()
  const { provaId, esercizioId } = router.query;
  // console.log(provaId, esercizioId[0])

  const saveThisRef = (element) => {
    myRefs.push(element);
  }

  function handleChange(event) {
    let currentRef = myRefs.indexOf(event.target)
    let nameRef = myRefs[currentRef].name
    let currentAnswer = myRefs[currentRef].value

    setAnswers(prevAnswers => {
      return {
        ...prevAnswers, 
        [nameRef]: currentAnswer 
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    router.push({
      pathname: '/controlla',
      query: { data: JSON.stringify({
        answers,
        provaId: provaId,
        esercizioId: esercizioId[0]
      }) }
    })
    
    return
  }

  return (
    <>
      <header>
        <h1>{`Prova ${prova.id}: ${prova.name}`}</h1>
        <p>{esercizio.sezione}</p>
        <p>
          <span>2. </span>
          {esercizio.consegna}
        </p>
      </header>

      <article>
        {esercizio.article}
      </article>

      <form action="#" id="es02">
        <div>
          <ol>
          {esercizio.frasi.map((frase, idx) => (
            <div key={idx}>
              <div>
                <li>
                  {/* <span>A.</span> */}
                  {frase.text}
                </li>
              </div>
              <div>
                <label htmlFor="yes">Sì</label>
                <input type="radio" name={frase.name} value="true" id="yes" ref={saveThisRef} onChange={handleChange} />
                <label htmlFor="no">No</label>
                <input type="radio" name={frase.name} value="false" id="no" ref={saveThisRef} onChange={handleChange} />
              </div>
            </div>
          ))}
          </ol>
        </div>

        <div>
          <button onClick={handleSubmit} type="submit">Controlla la tua risposta</button>
        </div>
      </form>
    </>
  )
}

export default IsInfoInTheText