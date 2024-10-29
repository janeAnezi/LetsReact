import { useEffect, useState } from "react"

export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [project, setProject] = useState('')

    useEffect(() => {
        // console.log('Profile component mounted');

        const fetchData = async () => {
            const response = await fetch('http://localhost:300/profile')
            const data = await response.json()
            // console.log({data});
            setFirstName(data.firstname);
            setLastName(data.lastname);
            setProject(data.project);
        }

        fetchData();
    }, [])

  return (
    <div>
      <p><strong>First Name:</strong>{firstName}</p>
      <p><strong>Last Name:</strong>{lastName}</p>
      <p><strong>Project Name:</strong>{project}</p>
    </div>
  )
}
