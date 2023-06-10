
import "./Form.css";

function Form({handleSubmit, handleTypeInInput}){

    return (
        <form onSubmit={handleSubmit} className="formWrapper">
            <input className="form-text-input" placeholder="Type a song..." type="text" onChange={handleTypeInInput}/>
            <input className="form-button-input" type="submit" value="Search"/>
        </form>
    );

};

export default Form;
