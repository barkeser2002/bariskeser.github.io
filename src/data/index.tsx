import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import planlarData from './json/planlar.json';
import baData from './json/ba.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Anasayfa',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl="https://github.com/barkeser2002/bariskeser.github.io"
      />
    ),
  },
  {
    name: 'Planlar',
    url: '/planlar',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(planlarData, 0)}%`,
    comp: () => <Diploma diplomaData={planlarData} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'Beceriler.js',
    url: '/beceriler',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'beceriler',
  },
  {
    name: 'Projeler.config',
    url: '/projeler',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projeler',
  },
  {
    name: 'Status.yml',
    url: '/status',
    icon: ['fab', 'buffer'],
    color: green,
    mdFileName: 'status',
  },
];
