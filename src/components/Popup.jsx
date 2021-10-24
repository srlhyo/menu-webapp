import React from 'react';

export default function Popup(props) {
    console.log("my props", props)
    return (props.trigger) ? (
        <div className="bg-modal-close-50 w-full h-screen flex justify-center items-center fixed top-0 left-0 animate-grow-box">
            <div className="relative">
                <button className="absolute -top-12 right-4 text-gray-100 border-2 rounded-full w-8 h-8 border-gray-100" onClick={() => props.setTrigger(false)}>x</button>
                { props.children}
            </div>
        </div>
    ) : "";
}

