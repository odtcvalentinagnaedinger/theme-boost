import React from 'react'

import Input from 'Atoms/input'

export default {
    title: 'Form',
}

export const input = () => {
    return (
        <div className='p-4'>
            <Input className='form-input' placeholder='Enter your email' />
        </div>
    )
}
