import React from 'react'

const Artists: React.FC = () => {
    const artistData = [
        {
            id: 1,
            name: "xxx"
        },
        {
            id: 2,
            name: "xxx"
        },
        {
            id: 3,
            name: "xxx"
        },
        {
            id: 4,
            name: "xxx"
        },
        /*{
            id: 5,
            name: "xxx"
        },
        {
            id: 6,
            name: "xxx"
        },
        {
            id: 7,
            name: "xxx"
        },
        {
            id: 8,
            name: "xxx"
        },
        {
            id: 9,
            name: "xxx"
        },
        {
            id: 10,
            name: "xxx"
        },*/
    ]
  return (
    <div className="flex items-center gap-2 w-[1000px] border">
        {artistData.map((artist) => (
            <div key={artist.id} className='w-[200px] h-[200px] shadow bg-white/50 rounded-md'>
                <p>{artist.name}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Artists
