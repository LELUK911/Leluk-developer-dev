import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const AllertSubmit = () => {
  return (
    <Alert
      status="success"
      position='fixed'
      zIndex={3}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="131px"
      width='320px'
      backgroundColor='#009c4e'
      opacity= "0.9"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Richiesta inviata!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Grazie, ti contattero al più presto
      </AlertDescription>
    </Alert>
  );
};


export default AllertSubmit
