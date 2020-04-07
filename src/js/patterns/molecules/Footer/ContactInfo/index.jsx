import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ChatIcon } from 'Icons/tailwind-icons/icon-chat.svg'

const ContactInfo = ({ header, phoneNumber, email }) => {
    return (
        <div className='flex flex-col text-sm'>
            <div className='mb-4 font-bold leading-tight text-gray-100'>
                <ChatIcon className='mr-3 w-4 h-4 inline-block text-gray-500 fill-current' />
                {header}
            </div>

            <ul className='flex flex-col ml-6 leading-tight text-gray-200'>
                <li className='mb-2'>
                    {phoneNumber}
                </li>
                <li className='mb-2'>
                    {email}
                </li>
            </ul>
        </div>
    )
}

ContactInfo.propTypes = {
    header: PropTypes.object,
    phoneNumber: PropTypes.object,
    email: PropTypes.object,
}

export default ContactInfo