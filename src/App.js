
import { useEffect, useState } from "react";
import { Form } from "react-formio";
import axios from 'axios';

const App =({src})=>{
    const [url ,setUrl] =useState('');
    useEffect(()=>{
        const newUrl = document.querySelector('react-wc').getAttribute('url');
        setUrl(newUrl);
    },[src])
   const handleSubmit = (data)=>{
    const formId = data.form;
    const formUrl = `http://206.116.106.143:5000/form/${data.form}/submission/${data._id}`;
    const submissionId = data._id;
    axios.post("http://206.116.106.143:5000/public/application/create",{formId,formUrl,submissionId});
   } 
    return(
        <div>
            <Form 
             src={url}
             onSubmit={(data)=>{
                handleSubmit(data);
             }}
            />
        </div>
    )
}
export default App;