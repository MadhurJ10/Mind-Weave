import React from 'react'
import { useForm } from "react-hook-form";

const MessageInput = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className='flex px-36 py-1.5 rounded-lg '>
            <div className='bg-gray-700 border h-[3.1rem] rounded-3xl px-4  text-white focus:outline-none flex flex-row justify-between'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('text')}
                        type="text"
                        placeholder="Type a message..."
                        className='bg-gray-700 w-[40rem]  h-12 rounded-3xl px-4 text-white focus:outline-none'
                    />
                    <button type='submit' ><i className="ri-send-plane-fill"></i></button>
                </form>

            </div>
        </div>
    )
}

export default MessageInput
