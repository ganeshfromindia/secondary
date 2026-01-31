
function MyButton(props: { onClick: () => void }) {
 

  return (
    <>
      
       
      <div className="card">
        <button onClick={props.onClick}>
          count 
        </button>
        
      </div>
      
    </>
  )
}

export default MyButton