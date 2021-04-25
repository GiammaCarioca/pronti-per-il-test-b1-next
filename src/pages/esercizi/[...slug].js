import { useRouter } from 'next/router'

function FilteredExercise() {
  const router = useRouter()
  const filterData = router.query.slug

  // console.log(filterData)

  if (!filterData) {
    return <p>Loading...</p>
  }

  const filteredLevel = filterData[0]
  const filteredSkill = filterData[1]

  return (
    <>
      <h2>Filtros:</h2>
      <ul>
        {filteredLevel && <li>{filteredLevel}</li>}
        {filteredSkill && <li>{filteredSkill}</li>}
      </ul>
    </>
  )
}

export default FilteredExercise