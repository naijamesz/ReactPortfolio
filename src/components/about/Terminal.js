import React from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';

const iconClass = 'fa fa-circle';

function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={'section'}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: '98%', sm: '85%', md: '65%' }}
      borderRadius={'1.5rem'}
      m={'2rem 0'}>
      <Box sx={{ backgroundColor: '#808080' }} p={'.25rem'} borderRadius={'0.5rem 0.5rem 0 0'}>
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box
        py={{ xs: '1.25rem', md: '1.25rem' }}
        px={{ xs: '1.25rem', md: '2.25rem' }}
        borderRadius={'0 0 0.5rem 0.5rem'}
        sx={{ backgroundColor: '#3d3d3d' }}
        border={'2px solid #808080'}
        fontFamily={'Menlo'}>
        <p style={{ fontSize: '1.25rem' }}>{text}</p>
      </Box>
    </Box>
  );
}

export default Terminal;
