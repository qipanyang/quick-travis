import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Course from './components/Course/Course'

test('render course', async () => {
    // const jsdomAlert = window.alert;
    // window.alert = () => {};
    var course = {"id":"F101", "meets":"MWF 11:00-11:50", "title":"Computer Science: Concepts, Philosophy, and Connections"}
    var selected = []
    const toggle = jest.fn()
    var user = "qipanyang"
    var buttonname = "Fall CS 101: Computer Science: Concepts, Philosophy, and Connections"
    const { getByTestId } = render(
    <Course  course = {course} state = {{selected, toggle}} user = {user}
    />)

    fireEvent.click(getByTestId('101'))
    expect(toggle).toBeCalledWith(course)
    // expect(getByText('Create New Event')).toBeInTheDocument()
    // fireEvent.click(getByText('Create New Event'))
})