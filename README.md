# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Filter items based on category
- Clear cart on button click
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- View current selection while using the Tab key

### Screenshot

![](/public/screenshots/desktop-screenshot.jpeg)

### Links

- Solution URL: [FrontendMentors](https://www.frontendmentor.io/solutions/desserts-product-list-with-cart-main-a8iK8Hanff)
- Live Site URL: [Desserts Product Cart](https://desserts-product-cart.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Tailwind CSS
- [React](https://react.dev/) - JS library

### What I learned

This project helped me cement my knowledge of the useContext and useReducer hooks in ReactJS. UseContext to share data between components, whether parent and child components or siblings, and useReducer to effectively manage state logic in my app.

This is also my first project using Tailwind CSS. I like that it helps me write less CSS and I know the styles affecting each component.

I also checked out the Tailwind CSS Intellisense extension. It was very helpful for my usage.

```react
  import React, {useContext,useReducer} from 'react'
  <button className="p-2 text-green-400" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
```

### Continued development

I want to continue learning about Cross Browser Compatibility and Accessibility for people with disabilities, and gain more knowledge on form validation. Another major thing is Performance and testing. 

I also want to strengthen my knowledge of other React hooks. I will continue to use the useContext hook from now on. 

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - This helped me a lot, It is the cheatsheet itself. I really liked it and will use it going forward.
- [Code 15 React Projects - Complete Course](https://www.youtube.com/watch?v=a_7Z7C_JCyo) - John is simply the best, he explains the concepts so well my 8-year-old brother would get it. This is an amazing tutorial that has helped me finally understand React. I'd recommend it to anyone still learning React.

## Author

- Website - [Simon-Gabriel](https://simon-gabriel.netlify.app/)
- Github - [i-Strider243](https://github.com/i-Strider243)
- Frontend Mentor - [@Simon Gabriel](https://www.frontendmentor.io/profile/i-Strider243)
- Twitter - [@strider18](https://x.com/Strider18)
- LinkedIn - [Simon Gabriel](https://www.linkedin.com/in/gabriel-o-simon/)

## Acknowledgments

My credit goes to God Almighty for bringing another project to completion. I also want to thank myself for showing up for me from day one. I couldn't have done it without me. Special shoutout to John Smilga for my ReactJS knowledge.
