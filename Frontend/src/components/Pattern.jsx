import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className='flex flex-col sm:flex-row'>
          <Card title={'AI Map Creation'} heading={'Generate structured, connected maps instantly from just a single topic.'} icon={'ri-mind-map text-white text-8xl'} />
          <Card title={'Ask AI'} heading={'Get instant explanations or discover hidden connections between nodes.'} icon={'ri-chat-ai-fill text-white text-8xl'} />
          <Card title={'Export & Share'} heading={'Download as PNG or PDF, or import into other tools for seamless use.'} icon={'ri-share-2-line text-white text-8xl'} />


        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.container {
  width: 100%;
  height: 30rem; /* Full screen height */
  background-color: black;
  
  /* First layer: fade from black to transparent */
  background-image: 
    linear-gradient(to bottom, black 0%, rgba(0,0,0,0) 40%),
    radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
  
  /* Dot grid spacing */
  background-size: 100% 100%, 30px 30px;
  background-position: 0 0, -5px -5px;
}
`;

export default Pattern;
