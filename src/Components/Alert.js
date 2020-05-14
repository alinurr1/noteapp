import React from 'react';

export const Alert = ({alert}) => {
    if(!alert) return null;

    return(
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
            <strong>Warning!</strong> You should not enter an empty text.
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}