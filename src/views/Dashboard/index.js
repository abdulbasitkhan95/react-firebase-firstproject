import { useEffect, useState } from 'react';
import { allUsersData } from "../../config/firebase";

function Dashboard() {
    const [user, setUser] = useState([])

    useEffect( async () => {
        const usersData = await allUsersData()
        const tempUser = []
        usersData.forEach(single => {
            const obj = {...single.data(), id: single.id}
            tempUser.push(obj)
        })
        setUser(tempUser)
    }, [user])
    return(
        <div>
            <h1>Dashboard</h1>
            <table border="1" width="500px" style={{margin: "auto"}}>
                <tbody>
                    {
                        user.map((singleUser, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{singleUser.id}</td>
                                <td>{singleUser.email}</td>
                                <td>{singleUser.fullName}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard