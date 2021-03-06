import React from 'react'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

import { ReactComponent as IconRocket } from 'Icons/tailwind-icons/icon-rocket.svg'
import { ReactComponent as IconRefresh } from 'Icons/tailwind-icons/icon-refresh.svg'
import { ReactComponent as IconLockClosed } from 'Icons/tailwind-icons/icon-lock-closed.svg'

const FeatureService = () => {
    return (
        <div className='flex flex-col w-full md:flex-row md:w-9/12 md:mx-auto p-5 md:py-5'>
            <div className='w-full h-12 flex items-center justify-start border-b border-solid border-neutral-300 md:border-b-0 md:border-r'>
                <IconRocket className='inline-block mr-3 w-5 h-5 md:w-6 md:h-6 fill-current text-primary-500' />
                <span className='text-sm text-neutral-900 leading-tight'>
                    Free & fast delivery
                </span>
            </div>
            <div className='w-full h-12 flex md:justify-center items-center border-b border-solid  border-neutral-300 md:border-b-0 md:border-r'>
                <IconRefresh className='inline-block mr-3 w-5 h-5 md:w-6 md:h-6 fill-current text-primary-500' />
                <span className='text-sm leading-tight'>
                    Free returns
                </span>
            </div>
            <div className='w-full h-12 flex md:justify-end items-center md:border-b-0 md:pl-8'>
                <IconLockClosed className='inline-block mr-3 w-5 h-5 md:w-6 md:h-6 fill-current text-primary-500' />
                <span className='text-sm text-neutral-900 leading-tight w-auto justify-end'>
                    Safe payment and data protection
                </span>
            </div>
        </div>
    )
}

FeatureService.propTypes = {
}

FeatureService.defaultProps = {
}

export default ComponentInjector.return('FeatureService', FeatureService)
