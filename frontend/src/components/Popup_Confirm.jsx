import {FaSignOutAlt} from 'react-icons/fa'
import { FaCheckSquare } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import '../assets/scss/popup.scss'

function closePopup(){
    document.getElementById('popup_container').style.cssText = 'display:none';
    document.getElementById('close').style.cssText = 'display:none';
    document.getElementById('open_popup').style.cssText = 'opacity: 100%';
}
function openPopup(){
    document.getElementById('popup_container').style.cssText = 'display:flex';
    document.getElementById('close').style.cssText = 'display:flex';
    document.getElementById('open_popup').style.cssText = 'display:hidden';
}

export default function Popup_Confirm() {
  return (
    <div className='testing-popup'>
        <button onClick={openPopup}>Trial</button>
        <div id='popup_container' onClick={closePopup}>
            <div className='confirmation_popup'>
                <div className='confirmation_header'>
                    <FaCheck className='icon'/>
                </div>
                <div className='popup_text'>
                    <h2>Do you want to approve the request?</h2>
                </div>
                <div className='popup_button'>
                    <button id='btn' className='btnCancel'>Cancel</button>
                    <button id='btn' className='btnConfirm'>Confirm</button>
                </div>
            </div>
        </div>
    </div>
  )
}
