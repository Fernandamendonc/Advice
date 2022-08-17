export function Button(){
  return(
        
    {advice.map((adv, key) => {
      return(
        <div key={key}>
          <h1>{adv.advice}</h1>
        </div>
      )
    })}
  )
}