import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function Home() {
  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
      gap={'1rem'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 190px)'}>
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'image of developer'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '22vh', sm: '26vh', md: '28vh', lg: '32vh' }}
        height={{ xs: '22vh', sm: '26vh', md: '28vh', lg: '32vh' }}
        borderRadius={'50%'}
        // p={'0.25rem'}
        mb={{ xs: '3rem', md: '1rem' }}
        mr={{ xs: '0rem', md: '2rem' }}
      />
      <Box>
        <h1 className={Style.name}>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            {info.firstName + info.lastName}
          </span>
          <span className={Style.hand}>🤘🏻</span>
        </h1>
        <h2 className={Style.title}>I'm {info.position}.</h2>
        <Box component={'ul'} m={'1rem 1rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet className='li' key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={{ xs: '1.5rem', sm: '2rem', md: '4rem' }}
          justifyContent={'center'}
          fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
