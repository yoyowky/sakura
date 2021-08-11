import React from 'react'

export default function MessageBox(props) {
    // {props.children} pass parent content
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>{props.children}</div>
    )
}
