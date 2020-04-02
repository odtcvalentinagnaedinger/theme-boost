import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

import Input from 'Atoms/input'
import Button from 'Atoms/button'

const NewsletterBlock = ({ intl }) => {
    const placeholder = intl.formatMessage({ id: 'myEmail' })

    return (
        <div className='bg-gray-800 rounded'>
            <div className='px-6 py-10 mx-auto w-full sm:w-fix-560px'>
                <p className='mb-1 text-sm text-center text-white leading-tight'>
                    <FormattedMessage id='joinNewsletter' />
                </p>
                <p className='text-2xl lg:text-3xl text-center text-white font-bold leading-none'>
                    <FormattedMessage id='exclusiveAccess' />
                </p>

                <div className='my-6 flex flex-col sm:flex-row'>
                    <div className='w-full mb-2 sm:mb-0 mr-0 sm:-mr-2 lg:mr-2'>
                        <Input
                            type='email'
                            placeholder={placeholder}
                            className='form-input h-10'
                        />
                    </div>

                    <div className='w-full sm:max-w-126px'>
                        <Button variant='btn btn-indigo w-full h-10'>
                            <FormattedMessage id='submit' />
                        </Button>
                    </div>
                </div>

                <p className='px-4 sm:px-24 text-xs text-center text-gray-500 leading-tight'>
                    <FormattedMessage id='submitAgree' />
                </p>
            </div>
        </div>
    )
}

NewsletterBlock.propTypes = {
    intl: intlShape.isRequired,
}

NewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('NewsletterBlock', injectIntl(NewsletterBlock))