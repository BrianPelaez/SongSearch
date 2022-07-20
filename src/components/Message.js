import { findByLabelText } from '@testing-library/react';
import React from 'react'

const Message = ({msg, bgColor}) => {

    let styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        backgroundColor: bgColor,
        color: "#000",
        fontWeight: "bold"
    }

    return(
        <div style={styles}>
            <p>{msg}</p>
        </div>
    )
}

export default Message;