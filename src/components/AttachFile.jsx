import React from 'react'
import "./AttachFile.css"
import { ImAttachment } from "react-icons/im"
import { ButtonComp } from './MUI'

const AttachFile = (props) => {
    const {setIsFileAttach} = props

    const uploadBtnHandler = ()=>{
        setTimeout(()=>{
            setIsFileAttach(true)
        },2000)
    }
    return (
        <>
            <div className='attach-file-container'>
                <div className="attach-file-wrapper">
                    <div className='mt-5'>
                        <input type="file" id="files" className="hidden" />
                        <label htmlFor="files" className="cursor-p mt-5">
                            <ImAttachment fontSize={200} />
                        </label>
                    </div>
                    <div className='align-self-end p-5'>
                        <ButtonComp name="UPLOAD" onClick={uploadBtnHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AttachFile