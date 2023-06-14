
import "./Form.css";
import {BtnInputWhite} from "./Buttons"

function Form({handleSubmit, handleTypeInInput}){

    return (
        <form onSubmit={handleSubmit} className="formWrapper">
            <input required className="form-text-input" placeholder="Type a song..." type="text" onChange={handleTypeInInput}/>
            <BtnInputWhite copy="Search" />
        </form>
    );

};

export default Form;