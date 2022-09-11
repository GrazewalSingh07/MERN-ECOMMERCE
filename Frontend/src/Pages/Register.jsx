import {
  Container,
  HStack,
  Input,
  Stack,
  Text,
  Image,
  useDisclosure,
  Heading,
  SlideFade,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { register, resetRegister } from "../redux/Register/action";
import { Navigate } from "react-router-dom";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);
export const Register = () => {
  const RegisterSuccess = useSelector(
    (state) => state.RegisterReducer.registerSuccess
  );
  const RegisterRequest = useSelector(
    (state) => state.RegisterReducer.registerRequest
  );
  const dispatch = useDispatch();
  const [error, setError] = useState("Invalid credentials");
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [data, setData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenErrorModal,
    onOpen: onOpenErrorModal,
    onClose: onCloseErrorModal,
  } = useDisclosure();

  useEffect(() => {
    onToggle();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
  };
  const handleSubmit = () => {
    if (!data?.fullname) {
      setError("Please enter full name");
      setOverlay(<OverlayOne />);
      onOpenErrorModal();
    } else if (!data?.email || !validateEmail(data?.email)) {
      setError("Please enter email");
      setOverlay(<OverlayOne />);
      onOpenErrorModal();
    } else if (!data?.password || !validatePassword(data?.password)) {
      setError("Please enter Strong password");
      setOverlay(<OverlayOne />);
      onOpenErrorModal();
    } else if (!data?.phone || data?.phone.length < 10) {
      setError("Please enter 10 digit phone");
      setOverlay(<OverlayOne />);
      onOpenErrorModal();
    } else if (!data?.role) {
      setError("Please choose your role");
      setOverlay(<OverlayOne />);
      onOpenErrorModal();
    } else {
      dispatch(register(data));
    }
  };

  if (RegisterSuccess) {
    return <Navigate to="/login" />;
  }
  return (
    <Container pt="5rem" textAlign="center" margin="auto" maxW="container.md">
      <Stack p="2rem">
        <Container>
          {" "}
          <Image
            margin="auto"
            width="10rem"
            src="https://static.wixstatic.com/media/0fd671_bee87a7dbc7640129e5477f5f4b84499~mv2.gif"
          />
          <SlideFade in={isOpen} offsetY="20px">
            <Heading fontFamily="cursive" color="maroon">
              Register
            </Heading>
          </SlideFade>
        </Container>
        <InputGroup>
          <InputLeftElement children={<CgProfile />} />
          <Input
            name="fullname"
            onChange={handleChange}
            variant="flushed"
            placeholder="Enter your Full Name"
          />
          <InputRightElement
            children={
              data?.fullname?.length > 3 ? <GiCheckMark color="green" /> : null
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<MdEmail />} />
          <Input
            onChange={handleChange}
            name="email"
            variant="flushed"
            placeholder="Enter your Email"
          />
          <InputRightElement
            children={
              data?.email?.length > 3 && validateEmail(data?.email) ? (
                <GiCheckMark color="green" />
              ) : data?.email?.length > 0 && !validateEmail(data?.email) ? (
                <ImCross color="red" />
              ) : null
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            children={
              data?.password?.length > 6 && validatePassword(data?.password) ? (
                <GiCheckMark color="green" />
              ) : data?.password?.length > 0 &&
                !validatePassword(data?.password) ? (
                <ImCross color="red" />
              ) : (
                <RiLockPasswordFill />
              )
            }
          />
          <Input
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            variant="flushed"
            placeholder="Enter password"
          />
          <InputRightElement
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            children={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<BsFillTelephoneFill />} />
          <Input
            maxLength={10}
            onChange={handleChange}
            name="phone"
            variant="flushed"
            placeholder="Enter your phone number"
          />
          <InputRightElement
            children={
              data?.phone?.length == 10 ? <GiCheckMark color="green" /> : null
            }
          />
        </InputGroup>

        <HStack>
          <Text padding="1rem" color="white" background="maroon">
            Choose your role
          </Text>
          <fieldset>
            <HStack>
              <HStack>
                <label htmlFor="admin">Admin</label>
                <input
                  value="admin"
                  onClick={handleChange}
                  style={{ cursor: "pointer" }}
                  name="role"
                  id="admin"
                  type="radio"
                />
              </HStack>
              <HStack>
                <label htmlFor="user">User</label>
                <input
                  value="user"
                  onClick={handleChange}
                  style={{ cursor: "pointer" }}
                  name="role"
                  id="user"
                  type="radio"
                />
              </HStack>
            </HStack>
          </fieldset>
        </HStack>
      </Stack>
      {RegisterRequest ? (
        <Button
          borderRadius="none"
          _hover={{ background: "maroon", color: "white" }}
          colorScheme="maroon"
          variant="outline"
          width="100%"
        >
          <Spinner />
        </Button>
      ) : (
        <Button
          onClick={handleSubmit}
          borderRadius="none"
          _hover={{ background: "maroon", color: "white" }}
          colorScheme="maroon"
          variant="outline"
          width="100%"
        >
          Register{" "}
        </Button>
      )}
      <Modal
        textAlign="center"
        isCentered
        isOpen={isOpenErrorModal}
        onClose={onCloseErrorModal}
      >
        {overlay}
        <ModalContent>
          <ModalHeader textAlign="center">
            Please enter valid credentials
          </ModalHeader>

          <ModalBody textAlign="center">
            <Text>{error}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseErrorModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
