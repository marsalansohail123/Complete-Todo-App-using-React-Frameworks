import React from 'react'
// import Chuchu from '../download/dld';
const Todo = () => {


  return (
    <div>
      <p className='heading'>Todo list</p>
      <div className='main-sec'>
        <div className='btn-sec'>
          <div>
            <button className='add-btn'>add task</button>
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
                <input type="checkbox" />
              </div>
            </div>
            <div className='right-side'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, illum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}


export default Todo;