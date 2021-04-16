import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Container, Form, FormControl, Table } from 'react-bootstrap';
import Drawer from '../Component/Layout/Drawer'

const Data = () => {

    const [sear,setSear] = useState({
        userData:[]
    })

    const [sear1,setSear1] = useState({
        userData1:[]
    })

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{ 
                const person=res.data;
                setSear({userData:person})
                setSear1({userData1:person})
            })
            .catch(err=>{
                
            })
        },[]);

    const onDataSubmit=(e)=>{
        e.preventDefault();
        let se = (e.target.search.value);
        let len = se.length
        if(e.target.search.value)
        {
            let ft = sear.userData.filter((data)=>{return data.email.slice(0, len).toLowerCase() === se.toLowerCase();})
            setSear1({userData1:ft})
        }
        
    }

    const handlechange = (e) =>
    {
        let se = e.target.value;
        let len = se.length
        let ft = sear.userData.filter((data)=>{return data.email.slice(0, len).toLowerCase() === se.toLowerCase();})
        setSear1({userData1:ft})
    }

    const vwall = () =>
    {
        setSear1({userData1:sear.userData})
    }

    return(<>
    <Drawer/>
        <h1 style={{textAlign:"center", margin:"40px"}}>Personal data</h1>
        <Container>

            <Form onSubmit={onDataSubmit}>
                <FormControl type="text" name="search" placeholder="Enter Email To Search" onChange={handlechange} className="mr-sm-2" />
                <p style={{textAlign:"center", marginTop:"1rem"}}>
                    <Button variant="outline-success" type="submit" style={{marginRight:"20px"}}>Search</Button>
                    <Button variant="outline-success" onClick={vwall}>View All</Button>
                </p>
            </Form>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {sear1.userData1.map((e)=>(<tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.username}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.website}</td>
                    </tr>))}
                </tbody>
            </Table>
        </Container>
        </>
    )
}

export default Data