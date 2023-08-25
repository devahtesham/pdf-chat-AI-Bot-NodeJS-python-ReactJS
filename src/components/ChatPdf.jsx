import React from 'react'
import "./ChatPdf.css"
import { AiOutlineSend } from "react-icons/ai"
import { ButtonComp } from './MUI'

const ChatPdf = () => {
    return (
        <>
            <div className='chatPdf-wrapper'>
                <div className='chatPdf-container'>
                    <div className='responseBox'>
                        <p></p>
                    </div>

                    <div className='queryBox'>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <ButtonComp name={<AiOutlineSend fontSize={22} />} onClick={() => {}} />
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChatPdf