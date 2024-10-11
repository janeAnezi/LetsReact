import React from 'react'

export default function Content() {
    let handleNameChange = () => {
        let userNames = ['Blessing', 'James', 'Berry', 'Andy'];
        let num = Math.floor((Math.random) * 4);
        return userNames[num]
    }

    let handleClick = () => {
        alert(' button clicked!');
    }
    let handleClick2 = (name) => {
        alert(` button clicked!  ${name}`);
    }
  return (
    <div className='content'>
      <h3>Let's Shop {handleNameChange()}</h3>
      <button style={{color: "brown"}} onClick={handleClick}>Click Me</button>

      <p><button style={{color: "gray"}} onClick={() => {handleClick2('Anezi')}}>Click Again</button></p>
    </div>
  )
}
