import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex items-center gap-2'>
                    {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSddizmVXkOLgyY57p7gDzPl7_UZED4WktUk2ANmT4o028sbVA/viewform?usp=sf_link" target="_blank">
                    <button 
                        className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'
                        // onClick={() => window.open(props.job_link, '_blank')}
                    >
                        Apply
                    </button>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default JobCard