import React from 'react'
import  Referfriendcard from '../components/Referfriendcard'

const referdata = [
    {
        "name":"Dhiraj Saxsena",
        "date":"14 Sep, 2022",
        "enrolled":6,
        "courses":["UI/UX","Photoshop","Illustrator","Python","MERN","Java"],
        "referal_amount":"₹185"
    },
    {
        "name":"Dhiraj Saxsena",
        "date":"14 Sep, 2022",
        "enrolled":6,
        "courses":["UI/UX","Photoshop","Illustrator","Python","MERN","Java"],
        "referal_amount":"₹185"
    },
    {
        "name":"Dhiraj Saxsena",
        "date":"14 Sep, 2022",
        "enrolled":6,
        "courses":["UI/UX","Photoshop","Illustrator","Python","MERN","Java"],
        "referal_amount":"₹185"
    },
]

const Friendrefer = () => {
    return (
        <div className='friend_refer_container'>
            <div className='friend_refer_heading_container'>
                <span>UI/UX {">"} Refer & Earn {">"} Friends Referred  </span>
            </div>
            <div className='friend_refer_content_container'>
                <div className='friend_refer_code_card'>
                    <h3>Your Referral Code </h3>
                    <div><span>EDCH54</span></div>
                </div>
                <div className='friend_refer_wallet_card'>
                    <h3>Wallet Balance</h3>
                    <h5>₹ 500</h5>
                </div>
            </div>
            <div className='friend_enrolled_container'>
                <h3>Friends who enrolled <span style={{color:'gray'}}>(3)</span></h3>
                <div className='friend_enrolled_card_container'>

                    {
                        referdata.map((item,i)=>(
                            <Referfriendcard
                              item={item}
                              key={i}
                              margin_left={i===0?0:20}
                            />
                        ))
                    }


                </div>
            </div>
            <div className='term_conditions'>
                <a href="/#">Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Friendrefer