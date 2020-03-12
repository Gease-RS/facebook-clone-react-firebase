import React from 'react'
import { TextInput } from 'react-materialize'

export default () => {
    return (
        <div 
            style={{ 
                display: "flex", 
                justifyContent: "center"
            }}
        >
            <div className="outerBox">
                <TextInput label="First Name" xl={12}/>
                <TextInput label="Last Name" xl={12} />
                <TextInput label="Email" xl={12}/>
                <TextInput label="Password" xl={12}/>
            </div>
        </div>
    )
}