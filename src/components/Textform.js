import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

export default function Textform(props) {
    const ModalCloseBtn = useRef(null)
    document.body.style.backgroundColor = props.theme === 'dark' ? '#212529' : 'white';
    document.body.style.color = props.theme === 'dark' ? 'white' : 'black';
    let startUpText, toastifyTheme = props.theme === 'dark' ? 'dark' : 'light';
    if (localStorage.getItem("Text") == null) {
        startUpText = "";
    }
    else {
        startUpText = localStorage.getItem("Text")
    }

    const [Text, setText] = useState(startUpText); //state
    const [Changetext, setChangetext] = useState("");
    const [Replacedtext, setReplacedtext] = useState("");

    function handleChange(e) {
        if (e.target.name === "textArea") {
            setText(e.target.value);
        }
        else if (e.target.name === "changeText") {
            setChangetext(e.target.value);
        }
        else {
            setReplacedtext(e.target.value);
        }
    }

    function toUpperCase() {

        setText(Text.toUpperCase());
        toast.success('Succesfully converted to Uppercase', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });

    }
    function toLowerCase() {
        setText(Text.toLowerCase());
        toast.success('Succesfully converted to Lowercase', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });

    }
    function rmExtraSpaces() {
        let newText = Text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        toast.success('Succesfully Remove Extra Spaces', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });

    }
    function toTitleCase() {
        function toProperCase(str) {
            return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        };
        let newText = toProperCase(Text);
        setText(newText);
        toast.success('Succesfully converted to Titlecase', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });

    }
    function copyToClipboard() {
        navigator.clipboard.writeText(Text).then(() => {
            toast.success('Succesfully copied to clipboard', {
                theme: toastifyTheme,
                position: 'top-center',
                transition: Flip,
                autoClose: 3000
            });
        })
            .catch(() => {
                toast.error("Copy Failed", {
                    autoClose: 3000,
                    theme: toastifyTheme,
                });
            })

    }
    function findAndReplace() {
        setText(Text.replaceAll(Changetext, Replacedtext));

        toast.success('Succesfully replaced text', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });
        setChangetext("");
        setReplacedtext("");
        ModalCloseBtn.current.click();
    }
    function saveText() {
        localStorage.setItem("Text", Text);
        toast.success('Succesfully saved your text', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });

    }
    function clearText() {
        setText("")
        localStorage.removeItem("Text")
        toast.success('Succesfully clear your text', {
            theme: toastifyTheme,
            position: 'top-center',
            transition: Flip,
            autoClose: 3000
        });
    }
    return (
        <>
            <div>
                <div className="my-3 container py-1">
                    <h1 className="my-3 ">{props.heading}</h1>
                    <textarea className="form-control my-3" rows="8" value={Text} onChange={handleChange} style={{ backgroundColor: props.theme === 'dark' ? '#212529' : 'white', color: props.theme === 'dark' ? 'white' : 'black' }} id="textArea" name="textArea"></textarea>
                    <div className="container d-flex" style={{ flexWrap: 'wrap' }}>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={toUpperCase}>Convert To Uppercase</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={toLowerCase}>Convert To Lowercase</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={toTitleCase}>Convert To Titlecase</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={rmExtraSpaces}>Remove Extra Spaces</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Find &amp; Replace</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={copyToClipboard}>Copy to Clipboard</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={saveText}>Save Text</button>
                        <button disabled={Text.length <= 0} className="btn btn-primary ml" onClick={clearText}>Clear Text</button>
                    </div>
                    <ToastContainer />

                </div>
                <div className="container my-3">
                    <h2 className='heading'>Your Text Summary</h2>
                    <p>{Text === '' ? '0' : Text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words and {Text.length} characters</p>
                    <h2 className="heading">Preview</h2>
                    <p>{Text.length > 0 ? Text : "Nothing to preview"}</p>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ backgroundColor: props.theme === 'dark' ? '#212529' : 'white', color: props.theme === 'dark' ? 'white' : 'black' }}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Find &amp; Replace</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" id="modalbody">
                                <h3>Changeable Text</h3>
                                <input type="text" className="form-control mb-3" id="changeableText" name="changeText" onChange={handleChange} value={Changetext} style={{ color: "inherit", backgroundColor: "inherit" }} />
                                <h3>Replaced Text</h3>
                                <input type="text" className="form-control mb-3" id="replaceText" name="Replacedtext" onChange={handleChange} value={Replacedtext} style={{ color: "inherit", backgroundColor: "inherit" }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={ModalCloseBtn}>Close</button>
                                <button type="button" className="btn btn-primary" disabled={Changetext.length <= 0 || Replacedtext.length <= 0} onClick={findAndReplace}>Replace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
}