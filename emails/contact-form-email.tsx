interface ContactFormEmailProps {
    name: string;
    email: string;
    message: string;
}
const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }: ContactFormEmailProps) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </div>
    );
}


export default ContactFormEmail;