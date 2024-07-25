'use client';
import Image from "next/image";
import { Center, Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading ,Text, Stack, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from "react";
import image1 from './0W2A2657.jpg'
import image2 from './0W2A2657.jpg'


const ablockflats =  [222, 223, 224, 225, 422, 423, 424, 425, 313, 314, 315, 316, 513, 514, 515, 516, 613, 614, 615, 616, 713, 714, 715, 716, 813, 814, 815, 816, 913, 914, 915, 916, ]
export default function Home() {
  const [flat, setFlat] = useState('')
  const [dir, setDir] = useState('')
 const onChange = (value: any) => {
  setFlat(value)
 }

  const onSubmit = () => {
    const leftdir = ablockflats.includes(Number(flat))
    if (leftdir) {
      setDir('left')
    }
    else setDir('right')
    setFlat('')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Center>
      <Stack spacing='24px'>
      <Heading>Welcome to Mahima Studio Panache</Heading>
      <Text>Enter flat number where you want to go just number, don't add A,B,C,D</Text>
      <HStack align={'center'}>
        <PinInput value={flat} onChange={onChange}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
        <Button onClick={() => onSubmit()} colorScheme='blue'>Button</Button>
        {dir == 'left' ? <><Image src={image1}  alt="left" /> <Text>Left</Text></> : <><Image src={image2}  alt="right" />  <Text>Right</Text></> } 
      </Stack>
      </Center>

    </main>
  );
}
