import  { useState } from 'react';

function Calculator()  {
  const [val, setval] = useState(0);
  const [ans, setans] = useState(0);

  function storedegree(e){
    setval(e.target.value);
  }

  function dosin(){
    setans(Number(Math.sin(val)));
  }
  function docos(){
    setans(Number(Math.cos(val)));
  }

  function dotan(){
    setans(Number(Math.tan(val)));
  }



  return(
    <div>
        <input type='text' name='degrees' onChange={storedegree}/>
        <button onClick={dosin}>sin</button>
        <button onClick={docos}>cos</button>
        <button onClick={dotan}>tan</button>

        <div>
            <h1>
                {ans}
            </h1>
        </div>
    </div>
  );
};

export default Calculator;
