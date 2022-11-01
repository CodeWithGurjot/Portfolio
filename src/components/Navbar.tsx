import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ModeSwitch } from './ModeSwitch';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItem = ({ children, onClick }: Props) => {
    return (
      <Text
        cursor='pointer'
        onClick={onClick}
        className='hover-underline-animation'
        color='white'
        fontSize='18px'
      >
        {children}
      </Text>
    );
  };

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Box
        justifyContent='space-around'
        p={4}
        bgColor='purple.500'
        display={{ base: 'none', lg: 'flex' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
        alignItems='center'
      >
        <Text fontSize='35px' fontFamily='e' fontWeight='600' mt='1' color='white'>
          Gurjot Gill
        </Text>
        <HStack spacing={8}>
          <NavItem>HOME</NavItem>
          <NavItem>ABOUT</NavItem>
          <NavItem>PROJECTS</NavItem>
          <NavItem>EXPERIENCE</NavItem>
        </HStack>
        <Flex>
          <ModeSwitch />
          <Button ml={5} rounded='2xl'>
            LET'S CHAT
          </Button>
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box
        justifyContent='space-between'
        p={5}
        bgColor='purple.500'
        display={{ base: 'flex', lg: 'none' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
      >
        <Text fontSize='25px' fontFamily='e' fontWeight='600' mt='1' color='white'>
          Gurjot Gill
        </Text>
        <Box>
          <ModeSwitch />
          <IconButton ml={5} aria-label='menu-button' onClick={onOpen} icon={<FiMenu />} />
        </Box>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent borderRight='2px' borderColor='white' bgColor='purple.500'>
            <DrawerCloseButton color='white' m={4} size='lg' />
            <DrawerHeader my={2}>
              <Text fontSize='25px' fontFamily='e' fontWeight='600' mt='1' color='white'>
                Gurjot Gill
              </Text>
            </DrawerHeader>
            <Divider />
            <DrawerBody mt='4'>
              <VStack spacing='7' alignItems='flex-start'>
                <NavItem onClick={handleNavClick}>HOME</NavItem>
                <Divider />
                <NavItem onClick={handleNavClick}>ABOUT</NavItem>
                <Divider />
                <NavItem onClick={handleNavClick}>WORK</NavItem>
                <Divider />
                <NavItem onClick={handleNavClick}>EXPERIENCE</NavItem>
                <Divider />
                <Button onClick={handleNavClick}>CONTACT ME</Button>
                <Divider />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
