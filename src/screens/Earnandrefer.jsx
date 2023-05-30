import React from 'react'
import Howdoesitworkcard from '../components/Howdoesitworkcard'
import inviteIcon from '../assests/inviteIcon.png'
import rupeeIcon from '../assests/rupeeIcon.png'
import walletIcon from '../assests/walletIcon.png'
import purchaseIcon from '../assests/purchaseIcon.png'
import offIcon from '../assests/offIcon.png'

import {Link} from 'react-router-dom'

const work = [
  {
    "title": "Invite your Friends",
    "subtitle": "Share the link tutedude.com with your friends",
    "icon": inviteIcon
  },
  {
    "title": "You get ₹ 200 as referral money",
    "subtitle": "On total purchase the friend makes, into your wallet",
    "icon": rupeeIcon
  },
  {
    "title": "Transfer money from wallet",
    "subtitle": "When the wallet balance reaches ₹200 or more, you can withdraw it",
    "icon": walletIcon
  },
  {
    "title": "Friend purchases any course",
    "subtitle": "Using your REFERRAL CODE in the payments page",
    "icon": purchaseIcon
  },
  {
    "title": "Your Friend gets ₹ 200 Off ",
    "subtitle": "On his overall fee on successful purchase using your referral code ",
    "icon": offIcon
  }
]

const Earnandrefer = () => {
  return (
    <div className='refer_container'>

      <div className='header'>
        <span>UI/UX {">"} Refer & Earn </span>
      </div>

      <div className='sub_container'>

        <div className='refer_card'>
          <div className='refer_card_content'>
            <h5 className='refer_card_content_heading'>Referral Earning</h5>
            <h3 className='refer_card_content_sub_heading'>₹ 2,500</h3>
          </div>

          <div className='refer_card_content'>
            <h5 className='refer_card_content_heading'>Total Referrals</h5>
            <h3 className='refer_card_content_sub_heading'>8</h3>
          </div>

          <div className='refer_card_content'>
            <h5 className='refer_card_content_heading'>Wallet Balance</h5>
            <h3 className='refer_card_content_sub_heading'>₹ 500</h3>
          </div>

          <button>Withdraw Balance</button>
        </div>

        <div className='refer_code'>
          <h1>Your Referral Code </h1>
          <div className='refer_code_container'>
            <div>
              <span>EDCH54</span>
            </div>
          </div>
        </div>


        <div className='how_does_work_conatiner'>
          <span>How does it work ?</span>
          <div className='how_does_work_sub_conatiner'>
            {

              work.map((item, i) => (
                <Howdoesitworkcard
                  item={item}
                  key={i}
                  margin_top={(i === 0 || i === 3) ? 0 : 30}
                />
              ))

            }
          </div>
        </div>

        <div className='link_tag'>
          <Link to = {"/friendrefer"}>Friends Who Enrolled</Link>
          <a href="/#">Terms & Conditions</a>
        </div>
      </div>



    </div>
  )
}

export default Earnandrefer