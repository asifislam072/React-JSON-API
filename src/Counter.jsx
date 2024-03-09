import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function incress() {
    const newcount = count + 1;
    setcount(newcount);
    
  }
  function discriss() {
    if(count < 1){
        return
    }
    const newcount = count - 1;
    setcount(newcount);
  }
// not working lassden 0
//   function discriss(newcount) {
//     if(newcount > 0){
//         const updated = count -1;
//         setcount(updated)
//     }
//     else{
//         alert('wrong number')
//     }
//   }
  return (
    <div style={{ border: "2px solid red " }}>
      <h3>Counter:{count}</h3>
      <button onClick={incress}>Incress</button>

      <button onClick={discriss}>Discress</button>
    </div>
  );
}
