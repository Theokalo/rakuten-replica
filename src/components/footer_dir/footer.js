import React from 'react'
import './footer.css'
import Device_icon from '../../assets/devices.png'
import Payment_icon from '../../assets/payments.png'
import Info_icon from '../../assets/info.png'
import RakutenLogo from '../../assets/rakutenTv.png'

const footer = () => {
    return (
        <>
        <div className="footer_info">
            <h1 className="footer_info_title">Rakuten TV - Your home theater</h1>
            <p className="footer_info_text">Watch the latest cinema releases on your SMART TV and many other devices in just a few clicks. The blockbuster movies, award-winning classics and TV series available right now. Without contract, without commitment, without headache. Try it now and earn Rakuten Super Points with each purchase.</p>
            <div className="footer_info_block">
                <img src={Device_icon} alt="devices" width="60px" height="40px"/>
                <h1 className="footer_info_block_title">How it works ?</h1>
                <p className="footer_info_block_text">Our content can be viewed on many devices. See the list of our compatible devices.</p>
            </div>
            <div className="footer_info_block">
                <img src={Payment_icon} alt="devices" width="60px" height="40px"/>
                <h1 className="footer_info_block_title">More payment methods</h1>
                <p className="footer_info_block_text">Rakuten TV is compatible with PayPal and Visa and Mastercard credit cards.</p>
            </div>
            <div className="footer_info_block">
                <img src={Info_icon} alt="devices" width="60px" height="40px"/>
                <h1 className="footer_info_block_title">Help and assistance</h1>
                <p className="footer_info_block_text">Are you having problems with our service? Get in touch with our support team</p>
            </div>
        </div>
        <div className="footer_mini">
            <div className="footer_mini_company">
                <img className="footer_mini_company_logo" src={RakutenLogo} width="140" height="35" alt="rakuten logo"/>
                <p className="footer__mini__company__link--nondecored">2009 - 2020 © Rakuten TV Europe, SLU - v 1.823.0</p>
            </div>
        </div>
        </>
    )
}

export default footer;