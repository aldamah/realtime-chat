import React from "react";
import "./myButton.css";

function MyButton({label}) {

    return <div data-testid="mybutton" className="mybutton-style">{label}</div>
}

export default MyButton;