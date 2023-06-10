import "./Buttons.css"

export function BtnLinkGreen(props) {
    return (
        <a className="BtnGreen" href={props.href}>{props.copy}</a>
    );
};

export function BtnGrey(props) {
    return (
        <button className="BtnGrey" onClick={props.handleClick} >{props.copy}</button>
    );
};