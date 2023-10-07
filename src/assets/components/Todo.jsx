// https://dev.to/shaifarfan08/a-complete-react-todo-app-using-react-redux-framer-motion-2hk0

import React, { useState } from 'react'
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
  // Add Modal
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  // Edit Modal
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  // Add Todo
  const [inpVal, setInpVal] = useState("");
  const [selectVal, setSelectVal] = useState("incomplete");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    // Structure
    const obj = {
      todo: inpVal,
      status: selectVal,
      time: new Date().toLocaleString(),
    }
    if (!inpVal) {
      alert("Enter Todo First!")
    } else {
      setTodoList(prev => [...prev, obj])
      setInpVal("")
      onAddClose();
    }
  }
  // Filter
  const selectChange = (val) => {
    console.log(val)
  }

  // Delete
  const deleteTodo = (index) => {
    // console.log(index);
    var deletedArr = todoList.filter((e, i) => i !== index);
    setTodoList(deletedArr)
  }

  // Edit

  // const [editObj, setEditObj] = useState({});
  const [defEditVal, setDefEditVal] = useState([]);
  const [editIndex, setEditIndex] = useState('');

  const isEditFunc = (val, i) => {
    onEditOpen();
    setDefEditVal(val)
    setEditIndex(i);
  }
  // console.log(editIndex)
  // console.log(editValidation, defEditVal.todo)
  const editTodo = () => {
    // console.log(defEditVal, index)
    let newArr = [...todoList];
    newArr[editIndex] = defEditVal;
    setTodoList([...newArr])
    onEditClose();
    console.log(index)
    // console.log(todoList)
    // console.log(newArr[2].todo = "abc")
  }

  return (
    <div>
      <p className='heading'>Todo list</p>
      <div className='main-sec'>
        <div className='btn-sec'>
          <div>
            <button onClick={onAddOpen} className='add-btn'>add task</button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isAddOpen}
              onClose={onAddClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Todo</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input ref={initialRef} value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='abc..' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Status</FormLabel>
                    <Select onChange={(e) => setSelectVal(e.target.value)}>
                      <option value='incomplete'>Incomplete</option>
                      <option value='complete'>Complete</option>
                    </Select>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button onClick={addTodo} colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onAddClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <div>
            <select onChange={e => selectChange(e.target.value)} className='button_button__RygOL button_button__select__r3jlh' id="">
              <option value="all">All</option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
        </div>
        <div className='main-todo-sec'>
          {todoList && Array.isArray(todoList) && todoList.length > 0 ?
            (
              todoList.map((e, i) => {
                return (
                  <div className='todo-sec' key={i}>
                    <div className='left-side'>
                      <div>
                        <label class="container">
                          {e.todo}
                          <br />
                          <p>
                            {e.time}
                          </p>
                          <input type="checkbox" checked={e.status === "incomplete" ? false : true} />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className='right-side'>
                      <div style={{ display: 'flex', gap: '10px', marginTop: 15 }}>
                        {/* Edit Modal */}
                        <Modal
                          initialFocusRef={initialRef}
                          finalFocusRef={finalRef}
                          isOpen={isEditOpen}
                          onClose={onEditClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Add Todo</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                              <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input ref={initialRef} onChange={(e) => setDefEditVal({ ...defEditVal, todo: e.target.value })} defaultValue={defEditVal.todo} placeholder='abc..' />
                              </FormControl>

                              <FormControl mt={4}>
                                <FormLabel>Status</FormLabel>
                                <Select onChange={(e) => setDefEditVal({ ...defEditVal, status: e.target.value })}>
                                  <option selected={defEditVal.status === "incomplete" ? true : false} value='incomplete'>Incomplete</option>
                                  <option selected={defEditVal.status === "complete" ? true : false} value='complete'>Complete</option>
                                </Select>
                              </FormControl>
                            </ModalBody>

                            <ModalFooter>
                              <Button colorScheme='blue' mr={3} onClick={editTodo}>
                                Save
                              </Button>
                              <Button onClick={onEditClose}>Cancel</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                        <p onClick={() => deleteTodo(i)} className='icons'><i class="fa-solid fa-trash"></i></p>
                        <p onClick={() => isEditFunc(e, i)} className='icons'><i class="fa-solid fa-pen"></i></p>
                      </div>
                    </div>
                  </div>
                )
              })
            )
            :
            (
              <div className='no-todo'>
                <p>no todo found</p>
              </div>

            )
          }
        </div>
      </div>
    </div >
  );


}


export default Todo;