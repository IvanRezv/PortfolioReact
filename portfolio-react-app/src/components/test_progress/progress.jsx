import React from 'react'
import './progress.css'
import Image from '../../assets/avatar-2.svg'


const progress = () => {
  return (
    <section className='about container section' id='progress'>
        <h2 className='section_title'>About me</h2>

        <div className='about_container grid'>
            <img src={Image} alt="" className='about_img' />
            <div className='about_data grid'>
                <p className='about_description'>
                    lalalallalalalallalalalallala
                </p>
                <a href="" className='btn'>Download CV</a>
            </div>

            <div className='about_skills grid'>
                
                <div className='skills_data'>
                    <div className='skills_titles'>
                        <h3 className='skills_name'>Devops</h3>
                        <span className='skills_number development'>90%</span>
                    </div>

                    <div className='skills_bar'>
                        <span className='skills_percentage'></span>
                    </div>
                </div>  
            

                <div className='skills_data'>
                    <div className='skills_titles'>
                        <h3 className='skills_name'>UI/UX</h3>
                        <span className='skills_number ui_design'>90%</span>
                    </div>

                    <div className='skills_bar'>
                        <span className='skills_percentage'></span>
                    </div>
                </div>


                <div className='skills_data'>
                    <div className='skills_titles'>
                        <h3 className='skills_name'>TEsting</h3>
                        <span className='skills_number testing'>90%</span>
                    </div>

                    <div className='skills_bar'>
                        <span className='skills_percentage'></span>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default progress