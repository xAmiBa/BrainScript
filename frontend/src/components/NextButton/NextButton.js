import React from "react";

const NextButton = ( { onClick } ) => {
    
    return(
        <div>
            <button onClick={ onClick }>
                {/* replace with image */}
                next
            </button>
        </div>
    )
}

export default NextButton;