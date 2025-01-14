import logo from './logo.png';
import { Image } from '@chakra-ui/react';

export const Logo = () => (
  <Image
    src={logo}
    alt='plane'
    height='90px'
    width='90px'
    boxShadow='sm'
    borderRadius='full'
  />

);
