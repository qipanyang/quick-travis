import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Course from './components/Course/Course'

test('render course', async () => {
    // const jsdomAlert = window.alert;
    // window.alert = () => {};
    var course = {"id":"F101", "meets":"MWF 11:00-11:50", "title":"Computer Science: Concepts, Philosophy, and Connections"}
    var selected = []
    const setselected = jest.fn()
    var user = "qipanyang"
    const { getByText } = render(
    <Course  course = {course} state = {{selected, setselected}} user = {user}
    />)
    // expect(getByText('Create New Event')).toBeInTheDocument()
    // fireEvent.click(getByText('Create New Event'))
})