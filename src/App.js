
import { useEffect, useState } from "react"
import { Form } from "react-formio"
import axios from 'axios';

const App =({src})=>{
    
    const [url ,setUrl] =useState('')

    useEffect(()=>{
        console.log("url in app",src)
        const newUrl = document.querySelector('react-wc').getAttribute('url')
        setUrl(newUrl)
    },[src])
    return(
        <div>
            <h1>{url}</h1>
            <Form 
            src={url}
            onSubmit={(data)=>{
                axios.post("http://206.116.106.143:5000/public/application/create",{formId:data.form,formUrl:`http://206.116.106.143:5000/form/${data.form}/submission/${data._id}`, submissionId:data._id})
            }}
            />
        </div>
    )
}


export default App