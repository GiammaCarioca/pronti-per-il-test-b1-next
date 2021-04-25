import { useRef } from 'react'
import Button from '@/components/ui/Button'

function ExerciseSearch(props) {
  const levelInputRef = useRef()
  const skillInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault();

    const selectedLevel = levelInputRef.current.value;
    const selectedSkill = skillInputRef.current.value;

    // console.log(selectedLevel, selectedSkill)

    props.onSearch(selectedLevel, selectedSkill);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="level">Livello</label>
          <select name="" id="level" ref={levelInputRef}>
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="b1">B1</option>
          </select>
        </div>
        <div>
          <label htmlFor="skill">Abilità</label>
          <select name="" id="skill" ref={skillInputRef}>
            <option value="oral">Comprensione orale</option>
            <option value="written">Comprensione scritta</option>
            <option value="grammar">Grammatica</option>
          </select>
        </div>
      </div>
      <Button>Cerca esercizio</Button>
    </form>
  )
}

export default ExerciseSearch