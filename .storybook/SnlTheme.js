import { create } from '@storybook/theming';
import logo from '../public/snl-skeleton.png';

export default create({
  base: 'dark',
  brandTitle: 'Spirits & Lyrics Storybook',
  brandUrl: 'https://spiritsandlyrics.com',
  brandImage: logo,
  brandTarget: '_self',
});