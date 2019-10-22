import React, { useState } from 'react'

import { withKnobs, boolean } from '@storybook/addon-knobs'

import TemplatesOrderBilling from '../patterns/templates/order/order-billing'
import TemplatesEmptyCart from '../patterns/templates/cart/empty-cart'
import TemplatesFullCart from '../patterns/templates/cart/full-cart'
import TemplatesEmptyWishlist from '../patterns/templates/cart/empty-wishlist'
import TemplatesFullWishlist from '../patterns/templates/cart/full-wishlist'
import TemplatesPassworResetAddMail from '../patterns/templates/passwort-reset/passwort-reset-add-mail'
import TemplatesNewPassword from '../patterns/templates/passwort-reset/new-password'
import TemplatesPasswordResetConfirmation from '../patterns/templates/passwort-reset/password-reset-confirmation'

// import TemplatesHome from '../patterns/templates/home'
// import VerticalSwipe from '../patterns/templates/vertical-swipe'
// import MoleculesProduct from '../patterns/organisms/products/product'
// import MoleculesHeading from '../patterns/molecules/headings/heading'

// import TemplatesFullCart from '../patterns/templates/cart/full-cart'
// import TemplatesEmptyCart from '../patterns/templates/cart/empty-cart'
// import MoleculesCart from '../patterns/molecules/carts/cart'
// import TemplatesSlideIn from '../patterns/templates/slide-in'
// import TemplatesSlideUp from '../patterns/templates/slide-up'
// import TemplatesFilter from '../patterns/templates/filter'
// import TemplatesHelp from '../patterns/templates/help'
// import OrganismsHeaderSlideIn from '../patterns/organisms/base/header-slide-in'
// import OrganismsDeliveryFeatures from '../patterns/organisms/deliveryFeatures/delivery-features'
// import OrganismsMoreInfoProduct from '../patterns/organisms/moreInfoProduct/more-info'
// import TemplatesMyOrders from '../patterns/templates/my-orders'
// import TemplatesMyOrderDetails from '../patterns/templates/my-order-details'
// import TemplatesProductReturn from '../patterns/templates/product-return'
// import TemplatesOrderSuccess from '../patterns/templates/order-success'

export default {
    title: '4.Templates|All',
    decorators: [withKnobs],
}

export const orderBilling = () => {
  return  <TemplatesOrderBilling />
}

orderBilling.story = {
    name: 'Order Billing',
}

export const templateEmptyCart = () => {
  return  <TemplatesEmptyCart />
}

templateEmptyCart.story = {
    name: 'Cart Empty',
}

export const templateFullCart = () => {
  return  <TemplatesFullCart />
}

templateFullCart.story = {
    name: 'Full Cart',
}

export const templateEmptyWishlist = () => {
  return  <TemplatesEmptyWishlist />
}

templateEmptyWishlist.story = {
    name: 'Wishlist Empty',
}

export const templateFullWishlist = () => {
  return  <TemplatesFullWishlist />
}

templateFullWishlist.story = {
    name: 'Full Wishlist',
}

export const templatePasswortResetAddMail = () => {
  return  <TemplatesPassworResetAddMail />
}

templatePasswortResetAddMail.story = {
    name: 'Passwort Reset Add Mail',
}

export const templateNewPassword = () => {
  return  <TemplatesNewPassword />
}

templateNewPassword.story = {
    name: 'New Passwort Setup',
}

export const templatePasswordResetConfirmation = () => {
  return  <TemplatesPasswordResetConfirmation />
}

templatePasswordResetConfirmation.story = {
    name: 'Password Reset Confirmation',
}

// export const home = () => { return <TemplatesHome /> }

// home.story = {
//     name: 'Home',
// }

// export const bestsellerSwipeVertical = () => {
//     return (
//         <div>
//             <MoleculesHeading />
//             <VerticalSwipe sliderId='swipe-content'>
//                 <div style={{ display: 'grid', gridGap: '8px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                     <MoleculesProduct width='150px' />
//                 </div>
//             </VerticalSwipe>
//         </div>
//     )
// }

// bestsellerSwipeVertical.story = {
//     name: 'Bestseller Swipe Vertical',
// }

// export const leererWarenkorb = () => { return <TemplatesEmptyCart /> }

// leererWarenkorb.story = {
//     name: 'Leerer Warenkorb',
// }

// export const meinWarenkorb = () => {
//     return (
//         <div>
//             <TemplatesFullCart />
//         </div>
//     )
// }

// meinWarenkorb.story = {
//     name: 'Mein Warenkorb',
// }

// export const interactiveCart = () => {
//     const emptyCart = boolean('Empty cart', true)

//     if (emptyCart) { return <TemplatesEmptyCart /> } else { return <TemplatesFullCart /> }
// }

// interactiveCart.story = {
//     name: 'Interactive Cart',
// }

// export const cartSlideIn = () => {
//     const [isOpen, setIsOpen] = useState(false) // eslint-disable-line react-hooks/rules-of-hooks
//     const emptyCart = boolean('Empty cart', false)

//     return [
//         <div
//             key='cart-icon'
//             onClick={() => {
//                 setIsOpen(true)
//             }}
//             >
//             <MoleculesCart />
//         </div>,
//         <TemplatesSlideIn
//             key='slide-in-content'
//             isOpen={isOpen}
//             header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
//             >
//             {emptyCart ? (
//                 <TemplatesEmptyCart setIsOpen={setIsOpen} />
//             ) : (
//                 <TemplatesFullCart setIsOpen={setIsOpen} />
//             )}
//         </TemplatesSlideIn>,
//     ]
// }

// cartSlideIn.story = {
//     name: 'Cart Slide In',
// }

// export const cartSlideUp = () => {
//     const [isOpen, setIsOpen] = useState(false) // eslint-disable-line react-hooks/rules-of-hooks
//     const emptyCart = boolean('Empty cart', false)

//     return [
//         <div
//             key='cart-icon'
//             onClick={() => {
//         setIsOpen(true)
//       }}
//             >
//             <MoleculesCart />
//         </div>,
//         <TemplatesSlideUp
//             key='slide-in-content'
//             isOpen={isOpen}
//             setIsOpen={setIsOpen}
//             header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
//             >
//             {emptyCart ? (
//                 <TemplatesEmptyCart setIsOpen={setIsOpen} />
//       ) : (
//           <TemplatesFullCart setIsOpen={setIsOpen} />
//       )}
//         </TemplatesSlideUp>,
//     ]
// }

// cartSlideUp.story = {
//     name: 'Cart Slide Up',
// }

// export const filter = () => {
//     return (
//         <div className='fit-view'>
//             <TemplatesFilter />
//         </div>
//     )
// }

// filter.story = {
//     name: 'Filter',
// }

// export const help = () => { return <TemplatesHelp /> }

// help.story = {
//     name: 'Help',
// }

// export const deliveryFeatrues = () => { return <OrganismsDeliveryFeatures /> }

// deliveryFeatrues.story = {
//     name: 'Delivery featrues',
// }

// export const moreInfoProduct = () => { return <OrganismsMoreInfoProduct /> }

// moreInfoProduct.story = {
//     name: 'More info product',
// }

// export const myOrders = () => {
//     return (
//         <div className='fit-view'>
//             <TemplatesMyOrders />
//         </div>
//     )
// }

// myOrders.story = {
//     name: 'My Orders',
// }

// export const myOrdersDetails = () => {
//     return (
//         <div className='fit-view'>
//             <TemplatesMyOrderDetails products={[{}, {}]} />
//         </div>
//     )
// }

// myOrdersDetails.story = {
//     name: 'My Orders - Details',
// }

// export const productReturnView = () => {
//     return (
//         <div className='fit-view'>
//             <TemplatesProductReturn />
//         </div>
//     )
// }

// productReturnView.story = {
//     name: 'Product return - view',
// }

// export const orderSuccess = () => { return <TemplatesOrderSuccess /> }

// orderSuccess.story = {
//     name: 'Order Success',
// }