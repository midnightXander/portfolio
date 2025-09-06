'use client'

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { SubmitHandler, useForm} from 'react-hook-form'; 
import { Button } from './ui/button';
import { Input } from './ui/input';
import {Textarea} from './ui/textarea';
import { toast } from 'sonner';
import { ContactFormSchema } from '@/lib/schemas';
import Link from 'next/link';
import { sendEmail } from '@/lib/actions';


type Inputs = z.Infer<typeof ContactFormSchema>

export default function ContactForm(){
    const {
        register,
        handleSubmit,
        reset,
        formState : { errors, isSubmitting }
    } = useForm<Inputs>({
        resolver : zodResolver(ContactFormSchema),
        defaultValues : {
            name: '',
            email : '',
            message: '',
        }
    })

    const processForm: SubmitHandler<Inputs> = async (data) => {
        
        const result = await sendEmail(data)
        
        if(result?.error){
            toast.error('An error occured! Please try again.')
            return
        }

        toast.success('Message sent succesfully')
        reset()
    }

    return  (
        <section className='relative isolate'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className='absolute inset-0 stroke-zinc-200 -z-10 h-full w-full fill-none'>
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF0080" />
                        <stop offset="100%" stopColor="#7928CA" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="1024" height="1024" fill="url(#gradient)" />
            </svg> */}

            <div className='relative'>
                <form
                onSubmit={handleSubmit(processForm)}
                className='mt-16 lg:flex-auto'
                noValidate
                >

                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>

                        <div>
                            <Input 
                            id='name'
                            type='text'
                            placeholder='Name'
                            autoComplete='given-name'
                            {...register('name')}
                            />

                            {errors.name?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input 
                            id='email'
                            type='text'
                            placeholder='Email'
                            autoComplete='email'
                            {...register('email')}
                            />

                            {errors.email?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className='sm:col-span-2'>
                            <Textarea 
                            rows={4}
                            placeholder='Message'
                            {...register('message')}
                            />

                            {errors.message?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <Button
                        type='submit'
                        disabled = {isSubmitting}
                        className='w-full disabled:opacity-50'
                        >

                            {isSubmitting ? 'Submitting...' : 'Contact-Me'}
                        </Button>
                    </div>

                    <p className='mt-4 text-xs text-muted-foreground'>
                        By Submitting this form, i agree to the {' '}
                        <Link href={'/privacy'} className='font-bold'>
                        Privacy &nbsp; policy.
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    )

}