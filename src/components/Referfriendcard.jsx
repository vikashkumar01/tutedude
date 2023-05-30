import React, { useEffect ,useState} from 'react'

 const Referfriendcard = ({item,margin_left}) => {
   
  const [marginStyle, setMarginStyle] = useState({}); // Initial state is an empty object

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 428) {
        setMarginStyle({ marginTop: margin_left });
      } else {
        setMarginStyle({ marginLeft: margin_left });
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [margin_left]);

  return (
    <div className='referral_card_container' style={marginStyle}>
        <div className='referral_heading'>
            <h3>{item.name}</h3>
            <h4>{item.date}</h4>
        </div>
        <div className='enrolled_content'>
            <h3>Course Enrolled <span>({item.enrolled})</span></h3>
            <div>
                {
                    item.courses.map((course,i) => (
                        <span className='enrolled_card' key={i}>{course}</span>
                    ))
                }
            </div>      
        </div>
        <div className='referral_amounts'>
            <h3>Referral Amounts <span>{item.referal_amount}</span></h3>
        </div>
    </div>
  )
}

export default Referfriendcard 
