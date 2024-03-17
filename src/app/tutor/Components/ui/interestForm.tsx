"use client"

import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
import { Input } from "./input";
import { Label } from "./label";
import { cn } from "../../utils/cn";
import { ValidationError, useForm } from "@formspree/react";
import { Select } from "./select";
import { Toggle } from "./toggle";
import React from "react";
import { Button } from "./button";
import { BackgroundGradient } from "./background-gradient";


export function InterestedForm(
    { className }: { className?: string }
) {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted");
    // };
    const [studentFormState, handleStudentFormSubmit2, resetStudentForm] = useForm("studentInterestForm");
    const [parentFormState, handleParentFormSubmit, resetParentForm] = useForm("parentInterestForm");
    const handleStudentFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Student Form Submitted", e);
        handleStudentFormSubmit2(e);
    }
    const formTypes = ["I'm a Student", "I'm a Parent"];
    const [studentType, setStudentType] = React.useState(formTypes[0]);
    const [studentName, setStudentName] = React.useState("your student");
    const submitted = studentFormState.succeeded || parentFormState.succeeded;

    const studentForm = (
        <form className="mt-8" onSubmit={handleStudentFormSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Your First Name" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Your Last Name" type="text" required />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" placeholder="Your Email Address" type="email" required />
                <ValidationError field="email" prefix="Email" errors={studentFormState.errors} className="text-red" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" placeholder="Your Age" type="number" min={10} max={99} />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                <Label htmlFor="tutorType">Tutoring In</Label>
                <Select id="tutorType" name="tutorType" options={
                    ["Introduction to Programming", "Specific Type of Development (Note which type in message)", "AP Computer Science", "Math Homework", "Other (Please specify in message)"]
                } required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" placeholder="Tell me a bit about what you want help with." type="textarea" required />
            </LabelInputContainer>
            <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                disabled={studentFormState.submitting}
            >
                Send &rarr;
                <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-5 h-[1px] w-full" />
        </form>
    );

    const parentForm = (
        <form className="mt-8" onSubmit={handleParentFormSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Your First Name" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Your Last Name" type="text" required />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" placeholder="Your Email Address" type="email" required />
                <ValidationError field="email" prefix="Email" errors={parentFormState.errors} className="text-red" />
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="studentFirstName">Student's First Name</Label>
                    <Input id="studentFirstName" name="studentFirstName" placeholder="Student's First Name" type="text" required onInput={(e => {
                        if (e.currentTarget.value === "") {
                            setStudentName("your student");
                        }
                        else {
                            setStudentName(e.currentTarget.value);
                        }
                    })} />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="studentLastName">Student's Last Name</Label>
                    <Input id="studentLastName" name="studentLastName" placeholder="Student's Last Name" type="text" required />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="age">Student's Age</Label>
                <Input id="age" name="studentAge" placeholder="Student's Age" type="number" min={10} max={99} />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                <Label htmlFor="tutorType">Tutoring In</Label>
                <Select id="tutorType" name="tutorType" options={
                    ["Introduction to Programming", "Specific Type of Development (Note which type in message)", "AP Computer Science", "Math Homework", "Other (Please specify in message)"]
                } required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" placeholder={`Tell me a bit about what ${studentName} wants help with.`} type="textarea" required />
            </LabelInputContainer>
            <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                disabled={parentFormState.submitting}
            >
                Send &rarr;
                <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-5 h-[1px] w-full" />
        </form>
    );

    const successMessage = (
        <div className="mt-4 flex flex-col justify-center">
            <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
                🎉 Success!
            </h2>
            <p className="text-neutral-600 text-sm text-center max-w-sm mt-2 dark:text-neutral-300">
                📬 I'll get back to you as soon as possible.
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />

            <Button className="self-center" onClick={() => {
                resetStudentForm();
                resetParentForm();
            }}>
                Submit Again
            </Button>
        </div>
    );

    return (
        <BackgroundGradient className={cn(`max-w-md w-full mx-auto rounded-3xl p-4 md:p-8 shadow-input bg-white dark:bg-black`, className)}>
            {submitted ?
                successMessage :
                <>
                    <h2 className="font-bold text-3xl text-center text-neutral-800 dark:text-neutral-200">
                        🤔 Interested?
                    </h2>
                    <p className="text-neutral-600 text-xl text-center max-w-sm mt-2 dark:text-neutral-300">
                        ✍️ Please fill out this form to get started.
                    </p>

                    <div className="w-full flex flex-col justify-center mt-4">
                        <Toggle options={formTypes} state={
                            { value: studentType, setValue: setStudentType }
                        } />
                    </div>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
                    {studentType === formTypes[0] ? studentForm : parentForm}
                </>}

        </BackgroundGradient>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};