import React from "react";
import PageLayout from "./FormPageLayout";
import { CheckBox, InputDefault } from "./InputField";
import { InputPrimary } from "./InputField";
import { TextareaDefault } from "./InputField";
import { PrimaryButton } from "./Button";
import { Footer } from "./Footer";

const Contact = () => {
    
    return ( 
        <>
        <PageLayout pageTitle="Contact Me">
            <p className="text-gray-600 text-body-2">Hi there, contact me to ask me about anything you have in mind.</p>
            <form className="mt-[38px]">
                    <div className="flex justify-between">
                        <div id="first_name">
                            <InputDefault 
                                labelProps={{
                                    title: 'First name'
                                }}
                                inputProps={{
                                    type: 'text',
                                    placeholder: 'Enter your first name',
                                    name: 'firstName'
                                }}
                                id="first_name"
                            />
                        </div>
                        <div id="last_name">
                            <InputDefault 
                                labelProps={{
                                    title: 'Last name'
                                }}
                                inputProps={{
                                    type: 'text',
                                    placeholder: 'Enter your last name',
                                    name: 'lastName'
                                }}
                                id="last_name"
                            />
                        </div>
                    </div>
                    <div id="email">
                        <InputPrimary 
                            labelProps={{
                                title: 'Email'
                            }}
                            inputProps={{
                                type: 'email',
                                placeholder: 'yourname@email.com',
                                name: 'email'
                            }}
                            id="email"
                        />
                    </div>
                    <div id="message">
                        <TextareaDefault 
                            labelProps={{
                                title: 'Message'
                            }}
                            inputProps={{
                                type: 'text',
                                placeholder: 'Send me a message and I will reply you as soon as possible...',
                                name: 'message'
                            }}
                            id="message"
                        />
                    </div>
                     <CheckBox label="You agree to providing your data to {name} who may contact you." />
                    <PrimaryButton className="h-[48px]" id="btn__submit">Send message</PrimaryButton>        
            </form>
        </PageLayout>
        <Footer />
        </>
     );
}
 
export default Contact;