import { Flex, Image, Text } from '@chakra-ui/react';
import skills from '../data/skills.json';

const SkillsIcon = ({ img, name }: { img: string; name: string }) => {
  return (
    <Flex
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-anchor-placement='top-bottom'
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Flex bgColor='purple.200' rounded='full' p={2}>
        <Image objectFit='cover' src={img} boxSize='60px' cursor='pointer' />
      </Flex>
      <Text mt={2} fontFamily='p' fontSize='15px'>
        {name}
      </Text>
    </Flex>
  );
};

const Skills = () => {
  return (
    <Flex mb={10} alignItems='center' justifyContent='center' mt={10} direction='column'>
      <Text textAlign='center' fontFamily='h' fontWeight='700' fontSize='60px'>
        SKILLS
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '70%' }}>
        <Flex
          alignItems='center'
          justifyContent='center'
          width={{ base: '100%', md: '50%' }}
          px={5}
          gap={8}
          wrap='wrap'
        >
          {skills.map((skill) => (
            <SkillsIcon key={skill.id} img={skill.icon} name={skill.name} />
          ))}
        </Flex>
        <Flex w={{ base: '100%', md: '50%' }}></Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
