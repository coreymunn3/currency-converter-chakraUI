import { Container, Flex, Box, Text, Link, Divider } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaExternalLinkSquareAlt,
  FaLink,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Layout = ({ children }) => {
  const converterBg = useColorModeValue('gray.50', 'gray.700');
  return (
    <Container maxW='600px'>
      <Flex h='100vh' direction='column'>
        <Flex flex={1} justifyContent='center' alignItems='center'>
          <Box
            w='100%'
            borderRadius='5px'
            shadow='md'
            p={4}
            bgColor={converterBg}
          >
            {children}
          </Box>
        </Flex>
        <Box my={4}>
          <Flex
            p={2}
            direction={['column', 'row']}
            alignItems='center'
            justifyContent='center'
            color='gray.500'
          >
            <Text as='span'>Created by Corey with &nbsp; </Text>
            <FaHeart color='red' />
            <Text as='span'>
              &nbsp; using{' '}
              <Link
                color='blue.400'
                isExternal
                href='https://github.com/facebook/create-react-app'
              >
                Create React App
              </Link>{' '}
              and{' '}
              <Link isExternal color='blue.400' href='https://chakra-ui.com/'>
                Chakra UI
              </Link>{' '}
            </Text>
          </Flex>

          <Divider />

          <Flex direction='row' p={2} justifyContent='center'>
            <IconContext.Provider
              value={{ size: '2rem', color: 'rgb(113, 128, 150)' }}
            >
              <Link isExternal href='https://github.com/coreymunn3' mx={4}>
                <FaGithub />
              </Link>
              <Link
                isExternal
                href='https://www.linkedin.com/in/michael-munn-73228958/'
                target='_blank'
                mx={4}
              >
                <FaLinkedin />
              </Link>
              <Link
                isExternal
                href='https://www.coreymunn.dev'
                target='_blank'
                mx={4}
              >
                <FaExternalLinkSquareAlt />
              </Link>
            </IconContext.Provider>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Layout;
