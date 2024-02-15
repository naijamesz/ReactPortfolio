import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import styles from './Terminal.module.scss';

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about {firstName}{' '}
        </p>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            about {firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          <p style={{ fontSize: '1rem', lineHeight: '1.75rem' }}>{info.bio}</p>
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            {info.firstName.toLowerCase()}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills/tools
        </p>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor, fontSize: '1rem' }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor, fontSize: '1rem' }}> tools</p>
        <ul className={Style.skills}>
          {info.skills.tools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p style={{ fontSize: '1rem' }}>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} ml={'.5rem'} mr={'.5rem'} fontSize={{ xs: '1rem', sm: '1.5rem', md: '1.75rem' }}>
                {hobby.emoji}
              </Box>
              <span style={{ fontSize: '1.25rem' }}>{hobby.label}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2rem'} ml={'1rem'} mr={'1rem'}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
