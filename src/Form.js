import "./Form.css";

function Form(){
    return (
        <form className="formWrapper">
            <input className="form-text-input" placeholder="Type a song..." type="text"/>
            <input className="form-button-input" type="submit" value="Search"/>
        </form>
    );
};

export default Form;