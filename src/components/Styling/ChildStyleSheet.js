import React from 'react'

function StyleSheetChild() {
    return (
        <div>
            {/* This CSS className is inherited from parent component - out of scope! */}
            <h3 className='warning'>Child of Stylesheet</h3>
        </div>
    )
}

export default StyleSheetChild
