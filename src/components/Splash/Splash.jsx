import React from 'react'
import "./Splash.css"

const Splash = () => {
    return (
        <div className='splash-screen-container'>
            <div className="wrapper">
                <svg>
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                        Chat PDF
                    </text>
                </svg>
            </div>
        </div>
    )
}

export default Splash