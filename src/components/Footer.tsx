import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface SocialIconsProps {
  href: string;
  icon: any;
}

const SocialIcons = ({ href, icon }: SocialIconsProps) => {
  return (
    <IconButton
      as='a'
      target='_blank'
      href={href}
      rel='noreferrer'
      size={{ base: 'sm', md: 'lg' }}
      colorScheme='purple'
      aria-label='github'
      icon={icon}
    />
  );
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems='center'
      bgColor='purple.500'
      color='white'
      px={5}
      py={{ base: 3, md: 6 }}
      mt={14}
      justifyContent='space-around'
    >
      <Text fontFamily='h' fontSize={{ base: '15px', lg: '18px' }}>
        Copyright &copy; {year} - Gurjot Gill
      </Text>
      <Flex mt={{ base: 2, md: 0 }} alignItems='center' gap={{ base: 2, lg: 5 }}>
        <SocialIcons href='https://github.com/CodeWithGurjot' icon={<FaGithub size={28} />} />
        <SocialIcons
          href='https://www.linkedin.com/in/gurjotgill319'
          icon={<FaLinkedin size={28} />}
        />
        <SocialIcons href='mailto:hello@gurjotgill.com' icon={<MdEmail size={28} />} />
      </Flex>
    </Flex>
  );
};

export default Footer;
