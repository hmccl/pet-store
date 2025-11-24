function List() {
  const words = ['Inglês', 'Português', 'Francês'];

  return (
    <>
      <ul>
        {words.map((word) => {
          return <li key={word}>{word}</li>;
        })}
      </ul>
    </>
  )
}

export default List
