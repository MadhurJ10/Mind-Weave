import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <h1 className='text-white'>snjdnaj</h1>
        <div className='flex flex-col sm:flex-row'>
          <Card title={'AI Map Creation'} heading={'Generate structured, connected maps instantly from just a single topic.'} />
          <Card title={'Ask AI'} heading={'Get instant explanations or discover hidden connections between nodes.'} />
          <Card title={'Export & Share'} heading={'Download as PNG or PDF, or import into other tools for seamless use.'} />
          

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100vh; /* Full screen height */
    background-color: black;
    background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px;
  }
`;

export default Pattern;
