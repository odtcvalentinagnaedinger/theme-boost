import React, { Component } from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Fieldset from 'js/patterns/atoms/forms/fieldset'
import InputWithLabel from 'js/patterns/molecules/forms/input-with-label'
import RadiobuttonWithLabel from 'js/patterns/molecules/forms/radiobutton-with-label'
import FromTo from 'js/patterns/organisms/form/from-to'

class Contact extends Component {
    render () {
        return (
            <div>
                <h2>Contact Form</h2>
                <form method='' className='o-distance-m'>
                    <Fieldset legend='Kontaktinformationen'>
                        <InputWithLabel id='contact_firstname' label='Firstname' name='contact_firstname' />
                        <InputWithLabel id='contact_lastname' label='Lastname' name='contact_lastname' />

                        <InputWithLabel id='email' label='E-Mail Adress' type='email' />

                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <p className='c-form-label'>Geschlecht wählen</p>
                            <div className='o-distance-s'>
                                <ul className='o-list-inline'>
                                    <li className='o-list-inline__item'>
                                        <RadiobuttonWithLabel label='männlich' id='male' />
                                    </li>
                                    <li className='o-list-inline__item'>
                                        <RadiobuttonWithLabel label='weiblich' id='female' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Fieldset>
                    <Fieldset className='o-distance' legend='Lieferanschrift'>
                        <InputWithLabel id='shipping_firstname' label='Firstname' name='shipping_firstname' />
                        <InputWithLabel id='shipping_lastname' label='Lastname' name='shipping_lastname' />

                        <InputWithLabel id='shipping_address' label='Address' name='shipping_address' />

                        <InputWithLabel id='shipping_expiry_date' label='Ablaufdatum' name='shipping_expiry_date' className='o-form-area__column-3-6 o-form-area__column--breakpoint-l-1-6' />
                        <InputWithLabel id='shipping_cvc' label='CVC' name='shipping_cvc' className='o-form-area__column-3-6 o-form-area__column--breakpoint-l-1-6' />

                        <div className='o-form-area__column-6-6'>
                            <FromTo />
                        </div>

                        <div className='o-form-area__column-6-6'>
                            <label htmlFor='' className='c-form-label'>Credit Card / CVC</label>
                            <div className='o-form-area'>
                                <div className='o-form-area__column-3-6'>
                                    <input type='text' className='o-distance-xs' />
                                </div>
                                <div className='o-form-area__column-3-6'>
                                    <input type='text' className='o-distance-xs' />
                                </div>
                            </div>
                        </div>

                        <div className='o-form-area__column-2-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>ZIP</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                        <div className='o-form-area__column-4-6'>
                            <label htmlFor='' className='c-form-label'>Place</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>Thema auswählen</label>
                            <select name='' id='' className='o-distance-xs'>
                                <option value=''>Allgemeine Anfrage</option>
                                <option value=''>Bestellung</option>
                                <option value=''>Zahlungen</option>
                            </select>
                            <p className='c-help-text o-distance-s'>Damit können wir bessere Vorschläge liefern.</p>
                        </div>
                    </Fieldset>
                    <Fieldset className='o-distance' legend='Zahlungsinformationen'>
                        <div className='o-block-short'>
                            <div className='o-block-short__short-item'>
                                <div className='c-form-checkbox'>
                                    <input
                                        type='checkbox'
                                        id='inp-checkbox-02'
                                        name='checkbox'
                                        className='c-form-checkbox__input'
                                    />
                                    <span className='c-form-checkbox__backdrop' />
                                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                        <path
                                            id='Check'
                                            className='st0'
                                            d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                    c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                    C203,40.1,200.1,25.5,189.3,18.4z'
                                />
                                    </svg>
                                </div>
                            </div>
                            <div className='o-block-short__body'>
                                <label htmlFor='inp-checkbox-02' className='c-form-label'>
                                    Ich habe die AGB und Datenschutzerklärung gelesen und akzeptiere diese.
                                </label>
                            </div>
                        </div>
                        <div className='o-block-short'>
                            <div className='o-block-short__short-item'>
                                <div className='c-form-checkbox'>
                                    <input
                                        type='checkbox'
                                        id='inp-checkbox-02'
                                        name='checkbox'
                                        className='c-form-checkbox__input'
                                    />
                                    <span className='c-form-checkbox__backdrop' />
                                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                        <path
                                            id='Check'
                                            className='st0'
                                            d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                    c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                    C203,40.1,200.1,25.5,189.3,18.4z'
                                />
                                    </svg>
                                </div>
                            </div>
                            <div className='o-block-short__body'>
                                <label htmlFor='inp-checkbox-02' className='c-form-label'>
                                    Ja, ich möchte per E-Mail Newsletter über Trends, Aktionen & Gutscheine informiert werden. Abmeldung jederzeit möglich. (optional)
                                </label>
                            </div>
                        </div>
                    </Fieldset>
                    <div className='o-distance'>
                        <button type='submit' className='c-button c-button--primary c-button--boss'>Abschicken</button>
                    </div>
                </form>
            </div>
        )
    }
}

Contact.propTypes = {
}

Contact.defaultProps = {
}

export default ComponentInjector.return('Contact', Contact)