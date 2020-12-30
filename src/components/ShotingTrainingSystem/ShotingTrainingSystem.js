import React from 'react';
import StyledShotingTrainingSystem from './StyledShotingTrainingSystem';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import {useHistory} from 'react-router-dom'
import Header from '../Header/Header'
import weapon from '../../images/weapon.jpg'
import weapon2 from '../../images/weapon2.jpg'

const ShotingTrainingSystem = () =>{
    const {height}= useWindowDimensions();
    const history = useHistory();
    const changePage = (page) => {
        history.push(page);
    }
    return (
        <StyledShotingTrainingSystem height={height}>
            <Header />
            <div className='ShotingTrainingSystem'>
                <div className='ShotingTrainingSystem-white'>
                    <h1 className='ShotingTrainingSystem-title'>Electronic system for shooting training</h1>
                    <span className='ShotingTrainingSystem-text'>
                    Consist in a embedded system for shooting training using Infrared (IR) technology to  replace the classic training equipment for electronic equipment.
                    Has two parts: <strong>IR Receptor</strong>  Consist in a simile of bulletproof vest with IR receptors to receive the impact of the light beam sended by the IR emitter.

                    <strong>IR Emitter</strong>  Consist in a simile of a assault rifle who send trough the IR emitter a light beam with the shoot signal.
                    Also has the microcontroller in charge to read the receptors message and calculate the health of the user in the simulation. Also take count of the "bullet" used. And send the training data through bluetooth.
                    </span>
                    <div className='ShotingTrainingSystem-buttonContainer'>
                        <div className='ShotingTrainingSystem-button1' onClick={()=>changePage('/iotprojects')}>
                            <span>Back</span>
                        </div>
                        <div className='ShotingTrainingSystem-button2' onClick={()=>changePage('/contact')}>
                            <span>contact me</span>
                        </div>
                    </div>
                </div>
                <div className='ShotingTrainingSystem-blue'>
                    <img src={weapon} alt='profile' className='ShotingTrainingSystem-Pic'/>
                    <img src={weapon2} alt='profile' className='ShotingTrainingSystem-Pic2'/>
                </div>
            </div>
        </StyledShotingTrainingSystem>
    )
}

export default ShotingTrainingSystem;