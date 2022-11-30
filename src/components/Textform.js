import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

export default function Textform(props) {
    let startUpText;
    if (localStorage.getItem("Text") == null) {
        startUpText = "";
    }
    else {
        startUpText = localStorage.getItem("Text")
    }

    const [Text, setText] = useState(startUpText); //state

    function handleText(e) {
        // console.log("Onchange")
        setText(e.target.value);
    }

    function toUpperCase() {
        if (Text === '') {
            toast.error("Nothing To Change", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            setText(Text.toUpperCase());
            toast.success('Succesfully converted to Uppercase', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function toLowerCase() {
        if (Text === '') {
            toast.error("Nothing To Change", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            setText(Text.toLowerCase());
            toast.success('Succesfully converted to Lowercase', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function rmExtraSpaces() {
        if (Text === '') {
            toast.error("Nothing To Change", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            let newText = Text.split(/[ ]+/);
            newText = newText.join(" ");
            setText(newText);
            toast.success('Succesfully Remove Extra Spaces', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function toTitleCase() {
        if (Text === '') {
            toast.error("Nothing To Change", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
             function toProperCase(str) {
                return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            };
            let newText = toProperCase(Text);
            setText(newText);
            toast.success('Succesfully converted to Titlecase', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function copyToClipboard() {
        if (Text === '') {
            toast.error("Nothing To Copy", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            navigator.clipboard.writeText(Text);
            toast.success('Succesfully copied to clipboard', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function saveText() {
        if (Text === '') {
            toast.error("Nothing To Save", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            localStorage.setItem("Text", Text);
            toast.success('Succesfully saved your text', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    function clearText() {
        if (Text === '') {
            toast.error("Nothing To Clear", {
                autoClose: 3000,
                theme: "light",
            });
        }
        else {
            setText("")
            localStorage.removeItem("Text")
            toast.success('Succesfully clear your text', {
                theme: 'light',
                autoClose: 3000
            });
        }
    }
    return (
        <>
            <div className="my-3 container">
                <h1 className="my-3 ">{props.heading}</h1>
                <textarea className="form-control my-3" rows="8" value={Text} onChange={handleText}></textarea>
                <button className="btn btn-primary ml" onClick={toUpperCase}>Convert To Uppercase</button>
                <button className="btn btn-primary ml" onClick={toLowerCase}>Convert To Lowercase</button>
                <button className="btn btn-primary ml" onClick={toTitleCase}>Convert To Titlecase</button>
                <button className="btn btn-primary ml" onClick={rmExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary ml" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-primary ml" onClick={saveText}>Save Text</button>
                <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
                <ToastContainer />

            </div>
            <div className="container my-3">
                <h2 className='heading'>Your Text Summary</h2>
                <p>{Text === '' ? '0' : Text.split(" ").length} words and {Text.length} characters</p>
                <h2 className="heading">Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
}