import {
  Button,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import projects from '../data/projects.json';

interface Props {
  image: string;
  title: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard = ({ image, title, demoLink, codeLink }: Props) => {
  return (
    <Flex
      bgColor='whiteAlpha.200'
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-anchor-placement='top-bottom'
      ml={{ base: '4%', md: '10%' }}
      _hover={{ shadow: 'dark-lg' }}
      transition='transform 250ms ease-in-out'
      borderRadius='2xl'
      p={5}
      shadow='2xl'
      direction='column'
      w={{ base: '92%', md: '80%' }}
    >
      <Image borderRadius='2xl' src={image} />
      <Text mt={5} fontFamily='h' fontSize='30px'>
        {title}
      </Text>
      <Flex mt={5} justifyContent='space-between'>
        <Button rightIcon={<BiLinkExternal />} w='45%' colorScheme='purple' as='a' href={demoLink}>
          Demo
        </Button>
        <Button rightIcon={<AiOutlineGithub />} w='45%' colorScheme='purple' as='a' href={codeLink}>
          Code
        </Button>
      </Flex>
    </Flex>
  );
};

const Projects = () => {
  return (
    <Flex mt={10} direction='column' alignItems='center'>
      <Text fontFamily='h' fontWeight='700' fontSize='60px'>
        PROJECTS
      </Text>
      <Divider mb={8} borderColor={useColorModeValue('black', 'white')} w='50%' />
      <Flex alignItems='center' justifyContent='center'>
        <SimpleGrid rowGap={8} columns={{ base: 1, md: 2, '2xl': 3 }}>
          {projects.map((project) => (
            <ProjectCard
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              title={project.title}
              image={project.image}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Projects;
