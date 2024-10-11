import {useState} from 'react'

export default function Content() {
    const [name, setName] = useState('Jude')

    let ChangeName = () => {
        let names = ['Ngozi', 'Shemaiah', 'Ovadia', 'Jane'];
        let nameIndex = Math.floor(Math.random() * 4)
        setName(names[nameIndex])
    }
    
  return (
    <div className='content'>
        <h3>Hello {name}</h3>
        <button style={{color: 'green'}} onClick={ChangeName}>Change name</button>
     
    </div>
  )
}
