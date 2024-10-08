import { Button, Input, Link, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import TestimonialSlider from '../Elements/TestimonialSlider';

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!firstName) newErrors.firstName = 'First name is required';
        if (!lastName) newErrors.lastName = 'Last name is required';
        if (!emailAddress) newErrors.emailAddress = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(emailAddress)) newErrors.emailAddress = 'Email is invalid';
        if (!phone) newErrors.phone = 'Phone number is required';
        if (!message) newErrors.message = 'Message is required';

        return newErrors;
    };

    const sendEmail = async () => {
        setLoading(true);
        setErrors(null);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        const body = {
            text: message,
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
        };

        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(body),
        }).then((res) => res.json());

        if (res.error) {
            console.error(res.error);
            setLoading(false);
            return;
        } else {
            if (res.status === 'Email sent') {
                setSuccessMessage('Thanks for your message! We will get back to you shortly.');
            }
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            setLoading(false);
        }
    };

    return (
        <div
            className="bg-[#0EC167] max-w-7xl mx-auto md:rounded-lg mt-10 pt-10 sm:shadow-2xl"
            data-aos="fade-in"
        >
            <div data-aos="fade-in" className="text-center max-w-7xl mx-auto mb-5">
                <h2 className="h-92 font-bold md:text-4xl text-2xl text-white">
                    Testimonials from our clients!
                </h2>
            </div>
            <TestimonialSlider />
            <div data-aos="fade-up" className="text-center max-w-7xl mx-auto mb-10">
                <h2 className="h-92 font-bold md:text-7xl text-4xl pt-10 text-white">
                    What can we help you with?
                </h2>
            </div>
            {successMessage && (
                <div className="text-center text-white bg-green-500 p-4 rounded-lg shadow-lg my-4 animate-bounce">
                    <p className="md:text-2xl font-bold">{successMessage}</p>
                    <span role="img" aria-label="party popper" className="text-4xl">
                        🎉
                    </span>
                </div>
            )}
            <form className="flex flex-col gap-4 mx-5 md:mx-0 md:px-20">
                <div className="flex space-x-6">
                    <Input
                        required
                        errorMessage="Please enter a first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="first_name"
                        isRequired
                        placeholder="First Name"
                        type="text"
                    />
                    <Input
                        value={lastName}
                        errorMessage="Please enter a last name"
                        onChange={(e) => setLastName(e.target.value)}
                        name="last_name"
                        isRequired
                        placeholder="Last Name"
                        type="text"
                    />
                </div>
                <div className="flex space-x-6">
                    <Input
                        value={phone}
                        errorMessage="Please enter a phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        name="phone"
                        isRequired
                        placeholder="Phone"
                        type="tel"
                    />
                    <Input
                        value={emailAddress}
                        errorMessage="Please enter an email address"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        isRequired
                        placeholder="Email"
                        type="email"
                    />
                </div>
                <Textarea
                    value={message}
                    errorMessage="Please enter a message"
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    isRequired
                    placeholder="Type your message here!"
                    type="text"
                />
                <div className="flex gap-2 justify-end mb-10">
                    <Button
                        isLoading={loading}
                        onClick={sendEmail}
                        fullWidth
                        color="primary"
                        className="w-72 mx-auto"
                    >
                        Let&apos;s get started!
                    </Button>
                </div>
            </form>
        </div>
    );
}
