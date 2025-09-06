import ContactForm from "@/components/contact-form";

export default function Contact(){
    return (
        <section className="pb-24 pt-40">

            <div className="container mx-auto p-4 max-w-3xl">
                <h2 className="title text-3xl font-bold">Let's Talk about your project !!</h2>

                <ContactForm />
            </div>

        </section>
    )
}