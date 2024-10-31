import { useState,useCallback, useEffect,useRef} from 'react'

function App() {


  const [length, setLength] = useState(30)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)

  const [password,setPassword] = useState("")


  //use ref hook

  const passwordRef = useRef(null)



  const PasswordGenerator = useCallback(()=>
    {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed)
      {
        str+="0123456789"
      }
      if(charAllowed)
      {
        str+="!@#$%^&*()><?"
      }


      for(let i=1;i<=length;i++)
      {
        let char = Math.floor(Math.random()*str.length+1)
        pass +=str.charAt(char);
      }

      setPassword(pass)



    },[length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(1,9);

    window.navigator.clipboard.writeText(password)


  },[password])


    useEffect(()=>{

      PasswordGenerator()

    },[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center mb-3'>Password Generator</h1>

    <div className='flex shadow overflow-hidden mb-4 rounded-lg'>

    <input 
    type='text'
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly 
    ref = {passwordRef}

    />

    <button 
    onClick={copyPasswordToClipboard}
    className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' >Copy</button>


    </div>

    <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input type ="range"
          min={6}
          max={30}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length : {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input
          
            type='checkbox'
            defaultValue={numberAllowed}
            id='numberInput'
            onChange={ () => { setNumberAllowed( (prev) => !prev)}}

          />
          <label htmlFor="numberInput"> Numbers</label>
          <input
          
          type='checkbox'
          defaultValue={charAllowed}
          id='charInput'
          onChange={ () => { setCharAllowed( (prev) => !prev)}}

        />
         <label htmlFor="charInput"> Characters</label>

        </div>

    </div>

</div>
    </>
  )
}

export default App