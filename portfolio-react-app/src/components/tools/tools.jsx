import React,{ useCallback} from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";

import ReactImg from '../../assets/react.png';
import Kube from '../../assets/kube.png';
import Gitlab from '../../assets/gitlab-ci.png';
import Jenkins from '../../assets/jenkins.png';
import Django from '../../assets/django.png';
import Docker from '../../assets/docker.png';
import Python from '../../assets/python.png';
import Bash from '../../assets/bash.png';
import Ansible from '../../assets/ansible.png';
import Puppet from '../../assets/puppet.png';
import Git from '../../assets/git.png';
import Monitoring from '../../assets/grafanaprom.png';
import Bg from '../../assets/bg.png';

const Tools = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div name='tools' className='w-full h-screen text-gray-300'>
            <Particles  options={particlesOptions} init={particlesInit} />
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-container w-full h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Tools</p>
                    <p className='py-4'>Most frequently used tech I've working with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Gitlab} alt="HTML icon" />
                        <p className='my-4'>Gitlab CI/CD</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Jenkins} alt="HTML icon" />
                        <p className='my-4'>Jenkins</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Kube} alt="HTML icon" />
                        <p className='my-4'>Kubernetes</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                        <p className='my-4'>Docker</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bash} alt="HTML icon" />
                        <p className='my-4'>Bash</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Ansible} alt="HTML icon" />
                        <p className='my-4'>Ansible</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Monitoring} alt="HTML icon" />
                        <p className='my-4'>Grafana + Prometheus</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tools