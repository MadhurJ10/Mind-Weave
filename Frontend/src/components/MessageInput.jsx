import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { addData, setLatest } from '../features/conceptMapSlice';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'




const MessageInput = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    // Add this selector to monitor your state
    const conceptMapData = useSelector((state) => state.conceptMap.data);
    const latestData = useSelector((state) => state.conceptMap.latest);

    async function cleanAndParse(jsonString) {
        const cleared = jsonString.replace(/```json|```/g, "").trim();

        return JSON.parse(cleared);
    }

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/map/create", {
                content: data.text,
                depth: "3"
            }, {
                headers: {
                    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZGFhMGEzLTY3MzgtNDhkYi1iYzcwLWFiMDYxN2QzNzkwOSIsImlhdCI6MTc1NTc1MzQyMiwiZXhwIjoxNzU1ODM5ODIyfQ.yNywrb548HzyfmX8cbWtELF307PHFyzMqhTdCrUlFHM",
                }
            });

            const cleaned = await cleanAndParse(response.data.text);
            // Remove the 'heheh' dispatch and only dispatch the cleaned data
            dispatch(addData(cleaned));
            dispatch(setLatest(cleaned));

            // Add this to verify the data was dispatched
            console.log('Updated store data:', latestData);

            reset();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log('latest map data changed:', latestData);
        console.log('map data changed:', conceptMapData);
    }, [ latestData ]);

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
