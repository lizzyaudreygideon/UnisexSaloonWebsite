import React from 'react';

const AboutDta = (props) => {
  return (
    <div className='slider'>
      <img 
        src={require(`./Gallery2/${props.image}`)} 
        alt='professional' 
        className='profImage'
      />
      <p>{props.description}</p>
    </div>
  );
};

export default AboutDta;
