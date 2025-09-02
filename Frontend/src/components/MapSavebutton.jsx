import React from 'react'
import ApiClient from '../services/ApiClient'


const MapSavebutton = ({ data, depth }) => {
    async function click() {
        console.log('working')
        console.log(data)
        console.log(depth)
        const fix = Number(depth)
        console.log(typeof fix)

        try {
            const mapSave = await ApiClient.post('map/save',
                {
                    title: "test3",
                    data: {data},
                    depth: fix
                }
            )
            console.log('send')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <button className='bg-red-500 border border-dashed' onClick={click}>Save Map</button>
        </div>
    )
}

export default MapSavebutton
