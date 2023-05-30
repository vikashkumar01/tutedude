import React, { useEffect ,useState} from 'react'

const Howdoesitworkcard = ({ item,margin_top }) => {

  const [marginStyle, setMarginStyle] = useState({}); // Initial state is an empty object

  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 428) {
        setMarginStyle({ marginTop: "20px" });
      } else {
        setMarginStyle({ marginTop: margin_top });
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [margin_top]);

  return (
    <div className='work_card' style={marginStyle}>
      <div>
        <img src={item?.icon} alt="not_found" />
      </div>
      <div>
        <h3>{item?.title}</h3>
        <h5>{item?.subtitle}</h5>
      </div>
    </div>
  )
}

export default Howdoesitworkcard