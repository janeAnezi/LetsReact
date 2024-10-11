import {useState} from 'react'

export default function Content() {
    const [name, setName] = useState('Jude')
    const [count, setCount] = useState(0)

    let ChangeName = () => {
        let names = ['Ngozi', 'Shemaiah', 'Ovadia', 'Jane'];
        let nameIndex = Math.floor(Math.random() * 4)
        setName(names[nameIndex])
    }

    let Add = () => {
        setCount(count + 2);
    }
    
  return (
    <div className='content'>
        <h3>Hello {name}</h3>
        <button style={{color: 'green'}} onClick={ChangeName}>Change name</button>

        <p>{count}</p>
        <button onClick={Add} >Add</button>
     
    </div>
  )
}
