import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

// const fontSizes = { xs: '0.5rem', md: '1rem' };

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box
        component={'img'}
        src={image}
        width={{ xs: '18rem', sm: '24rem', md: '28rem' }}
        height={{ xs: '18rem', sm: '24rem', md: '28rem' }}
        mt={'3rem'}
        mb={{ xs: '-5rem', sm: '-6rem', md: '-6rem' }}
        alt={'mockup'}
      />
      <h1 style={{ fontSize: '1.2rem', margin: '0 -.5rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'row'}
        gap={'.5rem'}
        alignItems={'center'}
        fontSize={{ xs: '0.5rem', sm: '.75rem', md: '1rem' }}
        py={'.5rem'}>
        <Box p={1} border={'2px solid black'} borderRadius={'15px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'15px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
