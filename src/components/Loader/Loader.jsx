import { Box } from 'components/Box';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () =><Box position="absolute" as="div"><ThreeDots color="#3f51b5" height={100} width={100} ariaLabel='loading' /></Box>