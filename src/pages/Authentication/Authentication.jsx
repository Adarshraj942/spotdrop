import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import './Authentication.css'
import iconone from '../../assets/iconone.png'
import ebay from '../../assets/ebay.png'
import wcom from '../../assets/wcom.png'
import etc from '../../assets/etc.png'

function Authentication() {
  return (
    <div  style={{backgroundColor:'#32333A'}}>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2' style={{borderColor:"10px solid yellow;"}} >
                <Sidebar />
            </div>
            <div className='col-10'  >
                <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 10px',width:'auto', padding:'30px'}}>
                    <div className='flexl'>
                        <div className='flexk'> <img src={iconone} alt="" /> Connect With Shopify</div>
                        <div className='fln'><button>Connect</button></div>
                    </div>
                    <hr />
                    <div className='flexl'>
                        <div className='flexk'><img src={etc} style={{height:'50px'}}   alt="" />  Connect with Etsy</div>
                        <div className='fln'><button>Connect</button></div>
                    </div>
                     <hr />
                    <div className='flexl'>
                        <div className='flexk'><img style={{height:'50px'}} src={wcom} alt="" />Connect with Woo Commerce</div>
                        <div className='fln'><button>Connect </button></div>
                    </div>
                     <hr />
                    <div className='flexl'>
                        <div className='flexk'> <img style={{height:'50px'}} src={ebay} alt="" />Connect with Ebay</div>
                        <div className='fln'><button>Connect </button></div>
                    </div>
                  
                </div>
            </div>
        </div>

    </div>
  )
}

export default Authentication