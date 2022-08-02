import React from 'react'
import './progress.css'

const progress = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='skills-bar'>
                <div className='bar'>
                    <div className='info'>
                        <span>HTML</span>
                    </div>
                    <div className='progress-line html'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Python</span>
                    </div>
                    <div className='progress-line python'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Ci/CD</span>
                    </div>
                    <div className='progress-line cicd'><span></span></div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span>Django</span>
                    </div>
                    <div className='progress-line django'><span></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default progress