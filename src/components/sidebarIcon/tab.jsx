import React from "react";
import './tab.css'
let string = {
    info: 'sds'
}
function Tab({svg,name }) {
    return (
        <>
            <div className="tab">
                <i className="tab__icon">{svg}</i>
                <h2 className="tab__info">{name}</h2>
            </div>
        </>
    )
}
export default Tab