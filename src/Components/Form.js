import React, {useState} from "react"

const Form = (props) => {

    const [formData, setFormData] = useState({
        zipcode:""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.weathersearch(formData.zipcode)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <p>Enter a zipcode in the U.S. of A</p>
            <input 
            type="number" 
            value={formData.searchterm}
            name="zipcode"
            onChange={handleChange}/>
            <br></br>
            <input type="submit" value="Find what the weather's like" />
        </form>
    )
}

export default Form