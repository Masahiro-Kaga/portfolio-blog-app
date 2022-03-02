import Head from "next/head";
import React, { Fragment } from 'react'
import ContactForm from '../components/contact/contact-form'

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        {/* <meta name=''></meta> */}
      </Head>
    <ContactForm></ContactForm>
    </Fragment>
  )
}

export default ContactPage