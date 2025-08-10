import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <h1 className='text-white'>snjdnaj</h1>
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
