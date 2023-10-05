// https://dev.to/shaifarfan08/a-complete-react-todo-app-using-react-redux-framer-motion-2hk0

import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'

const Todo = () => {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <div>
      <p className='heading'>Todo list</p>
      <div className='main-sec'>
        <div className='btn-sec'>
          <div>
            <button onClick={onOpen} className='add-btn'>add task</button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Todo</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input ref={initialRef} placeholder='abc..' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Status</FormLabel>
                    <Select>
                      <option value='incomplete'>Incomplete</option>
                      <option value='complete'>Complete</option>
                    </Select>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <div>
            <select className='button_button__RygOL button_button__select__r3jlh' id="">
              <option value="all">All</option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
        </div>
        <div className='main-todo-sec'>
          {/* <div className='no-todo'>
            <p>no todo found</p>
          </div> */}
          <div className='todo-sec'>
            <div className='left-side'>
              <div>
                <label class="container">
                  One
                  <br />
                  <p>
                    1:34 AM, 10/05/2023
                  </p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className='right-side'>
              <div style={{ display: 'flex', gap: '10px', marginTop: 15 }}>
                <p className='icons'><i class="fa-solid fa-trash"></i></p>
                <p className='icons'><i class="fa-solid fa-pen"></i></p>
              </div>
            </div>
          </div>
          <div className='todo-sec'>
            <div className='left-side'>
              <div>
                <label class="container">
                  One
                  <br />
                  <p>
                    1:34 AM, 10/05/2023
                  </p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className='right-side'>
              <div style={{ display: 'flex', gap: '10px', marginTop: 15 }}>
                <p className='icons'><i class="fa-solid fa-trash"></i></p>
                <p className='icons'><i class="fa-solid fa-pen"></i></p>
              </div>
            </div>
          </div>
          <div className='todo-sec'>
            <div className='left-side'>
              <div>
                <label class="container">
                  One
                  <br />
                  <p>
                    1:34 AM, 10/05/2023
                  </p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className='right-side'>
              <div style={{ display: 'flex', gap: '10px', marginTop: 15 }}>
                <p className='icons'><i class="fa-solid fa-trash"></i></p>
                <p className='icons'><i class="fa-solid fa-pen"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}


export default Todo;