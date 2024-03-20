import React from 'react'
import { useState, useEffect } from 'react';

const Nav = () => {
    const [color, setcolor] = useState('red')
    useEffect(() => {
        alert('color was changed')
    }, [color]);
    return (
        <div>the color of nav is {color}</div>
    )
}

export default Nav