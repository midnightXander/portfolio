'use client'

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { SubmitHandler, useForm} from 'react-hook-form'; 
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { NewsletterFormSchema } from '@/lib/schemas';
import Link from 'next/link';
import { subscribe } from '@/lib/actions';
import { Card, CardContent } from './ui/card';



type Inputs = z.Infer<typeof NewsletterFormSchema>

export default function NewsletterForm(){
    const {
        register,
        handleSubmit,
        reset,
        formState : { errors, isSubmitting }
    } = useForm<Inputs>({
        resolver : zodResolver(NewsletterFormSchema),
        defaultValues : {
            email : '',
        }
    })

    const processForm: SubmitHandler<Inputs> = async (data) => {
        
        const result = await subscribe(data)
        
        if(result?.error){
            toast.error('An error occured! Please try again.')
            return
        }

        toast.success('Subscribed succesfully')
        reset()
    }

    return  (
        <section className=''>

            <Card className = "rounded-lg border-0 dark:border">
                <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-center'>
                    <div>
                        <h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
                        <p className='text-muted-foreground'>
                            Get updates on my work and projects. No spam, I promise!
                        </p>
                    </div>

                    <form
                    onSubmit={handleSubmit(processForm)}
                    className='flex flex-col items-start gap-3'
                    >

                        <div className='w-full'>
                            <Input 
                            type='email'
                            id='email'
                            autoComplete='email'
                            placeholder='Email'
                            className='w-full'
                            {...register('email')}
                            />

                            {errors.email?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className='w-full'>
                        <Button
                        type='submit'
                        disabled = {isSubmitting}
                        className='w-full disabled:opacity-50'
                        >

                            {isSubmitting ? 'Submitting...' : 'Subscribe'}
                        </Button>
                    </div>

                    <p className='mt-4 text-xs text-muted-foreground'>
                        I care about your data, read the  {' '}
                        <Link href={'/privacy'} className='font-bold'>
                        Privacy &nbsp; policy.
                        </Link>
                    </p>
                    </form>
                </CardContent>
            </Card>            
        </section>
    )

}