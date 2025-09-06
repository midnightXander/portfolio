'use server'

import {z} from 'zod'
import { ContactFormSchema, NewsletterFormSchema } from './schemas'
import { Resend } from 'resend'
import ContactFormEmail from '../../emails/contact-form-email'
import { error } from 'console'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend("re_12u3GDCn_DswRyu62CrdwiiHNGsFXzchV")

export async function sendEmail(data: ContactFormInputs){
    const result = ContactFormSchema.safeParse(data)

    if(result.error){
        return {error : result.error.format() } 
    }

    try {
        const { name, email, message } = result.data
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', 
            to : ['alexngaikama913@gmail.com'],
            cc: ['alexngaikama913@gmail.com'],
            subject: 'Contact Form submission',
            text: `Name: ${name}\nEmail: ${ email }\nMessage: ${ message }`,
            react: ContactFormEmail({ name, email, message })
        })

        if(!data || error){
            throw new Error('Failed to send email')
        }
        return { success: true }
    } catch(error){
        return { error }
    }
}

export async function subscribe(data: {email : string}){
    const result = NewsletterFormSchema.safeParse(data)
 
    if(result.error){
        return {error : result.error.format()}
    }

// TODO: implement actual subscription logic here (e.g., add to database or mailing list)

    return {success: true}
  }