import React, { useState } from 'react';
import './Dashboard.scss';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import BarClick from '../../components/Chart/Chart';
import Button from '@mui/material/Button';
import { MdOutlineWidgets } from "react-icons/md";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IoIosMore } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { MdLaunch } from "react-icons/md";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactVirtualizedTable from '../../components/ReactVirtualizedTable/ReactVirtualizedTable';
import { FaUserPlus } from "react-icons/fa6";
import Round from '../../Images/circle.png';
import Ai from '../../Images/ai-review.png';
import Task from '../../Images/task.png';
import Issue from '../../Images/issue.png';
import Forms from '../../Images/form.png';
import Check from '../../Images/check.png';
// import useMediaQuery from '@mui/material/useMediaQuery';

function content1 () {
  return (
    <>
      <div className="work-allocated-cards-grp tasks">
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
      </div>
    </>
  );
}

function content2 () {
  return (
    <>
      <div className="work-allocated-cards-grp issues">
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className="title">
            <p className='id'><FaChevronUp /> ID #3789</p>

            <p className='comment'><FaRegComment /> 14</p>
          </div>

          <h5>How to Manage Stock</h5>

          <div className="date-time-admin">
            <div className="date-time">
              <p className="date"><SlCalender /> 22 June, 2024</p>
              <p className="date"><FaRegClock /> 11:00 am</p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>

          <div className="status">
                <p className="task-status"><CiViewList /> <span className='ongoing'>Ongoing</span></p>
                <p className="task-module"><IoBagOutline /> Inventory</p>
          </div>
        </div>
      </div>
    </>
  );
}

function content3 () {
  return (
    <>
      <div className="work-allocated-cards-grp forms">
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
        <div className="work-allocated-card">
          <div className='name-action'>
            <h5>How to Manage Stock</h5>
            <Button><FiEye /></Button>
          </div>

          <div className="response-task-grp">
            <div className="response-task">
              <p className="response">Responses <span>10</span></p>
              <p className='vertical-line'></p>
              <p className="task">Tasks <span>10</span></p>
            </div>

            <div className="admin-profile">
              <h5>A</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function content11 () {

  // const isMobile = useMediaQuery('(max-width:575px)');

  const columns = [
    {
        label: 'Name',
        dataKey: 'Name',
        // style: isMobile ? { width: '200px' } : {},
    },
    {
        label: 'Department',
        dataKey: 'Department',
        // style: isMobile ? { width: '200px' } : {},
    },
    {
        label: 'Assigned',
        dataKey: 'Assigned',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Ongoing',
        dataKey: 'Ongoing',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Overdue',
        dataKey: 'Overdue',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Completed',
        dataKey: 'Completed',
        style: { maxWidth: '198px', textAlign: "center"},
    },
];

const rows = [
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
];
  return (
    <>
     <ReactVirtualizedTable columns11 = {columns} rows11 = {rows}/>
    </>
  );
}

function content22 () {

    const columns = [
    {
        label: 'Name',
        dataKey: 'Name',
    },
    {
        label: 'Department',
        dataKey: 'Department',
    },
    {
        label: 'Assigned',
        dataKey: 'Assigned',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Ongoing',
        dataKey: 'Ongoing',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Overdue',
        dataKey: 'Overdue',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Completed',
        dataKey: 'Completed',
        style: { maxWidth: '198px', textAlign: "center"},
    },
];

const rows = [
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
];

  return (
    <>
      <ReactVirtualizedTable columns11 = {columns} rows11 = {rows}/>
    </>
  );
}

function content33 () {

  const columns = [
    {
        label: 'Name',
        dataKey: 'Name',
    },
    {
        label: 'Department',
        dataKey: 'Department',
    },
    {
        label: 'Assigned',
        dataKey: 'Assigned',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Ongoing',
        dataKey: 'Ongoing',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Overdue',
        dataKey: 'Overdue',
        style: { maxWidth: '198px', textAlign: "center"},
    },
    {
        label: 'Completed',
        dataKey: 'Completed',
        style: { maxWidth: '198px', textAlign: "center"},
    },
];

const rows = [
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
  {Name: "Anita", Department: "IT Services", Assigned: "90", Ongoing: "90", Overdue: "90", Completed: "90%"},
  {Name: "Rahul", Department: "Human Resources", Assigned: "31", Ongoing: "31", Overdue: "31", Completed: "31%"},
  {Name: "Priya", Department: "Sales Division", Assigned: "45", Ongoing: "45", Overdue: "45", Completed: "45%"},
  {Name: "Vikram", Department: "Research and Development", Assigned: "79", Ongoing: "79", Overdue: "79", Completed: "79%"},
];


  return (
    <>
      <ReactVirtualizedTable columns11 = {columns} rows11 = {rows}/>
    </>
  );
}

function tab1 () {
  return(
    <>
      <p>Tasks <span>10</span></p>
    </>
  )
}

function tab2 () {
  return(
    <>
      <p>Issues <span>10</span></p>
    </>
  )
}

function tab3 () {
  return(
    <>
      <p>Forms <span>10</span></p>
    </>
  )
}

function tab11 () {
  return(
    <>
      <p>Tasks <span>10</span></p>
    </>
  )
}

function tab22 () {
  return(
    <>
      <p>Issues <span>10</span></p>
    </>
  )
}

function tab33 () {
  return(
    <>
      <p>Workflows <span>10</span></p>
    </>
  )
}

function tab111 () {
  return(
    <>
      <p>Tasks</p>
    </>
  )
}

function tab222 () {
  return(
    <>
      <p>Issues</p>
    </>
  )
}

function tab333 () {
  return(
    <>
      <p>Forms</p>
    </>
  )
}

function content111 () {
  return(
    <>
      <BarClick />
    </>
  )
}

function content222 () {
  return(
    <>
      <BarClick />
    </>
  )
}

function content333 () {
  return(
    <>
      <BarClick />
    </>
  )
}

function overTable () {
   const columns = [
    {
        label: 'Task Name',
        dataKey: 'TaskName',
        style: { width: '180px' },
    },
    {
        label: 'Assigned to',
        dataKey: 'Assignedto',
        style: { width: '120px' },
    },
    {
        label: 'Status',
        dataKey: 'Status',
        style: { width: '105px' },
    },
    {
        label: 'Due date',
        dataKey: 'Duedate',
        style: { width: '105px' },
    },
    {
        label: 'Reassign',
        dataKey: 'Reassign',
        style: { width: '73px', textAlign: "center"},
    },
];

function statusType (type) {
  let classType = type ? type.toLowerCase() : '';

  return (
    <>
      <span className={classType}>{type}</span>
    </>
  )
}

function actionBtn () {
  return(
    <>
      <Button><FaUserPlus /></Button>
    </>
  )
}

const rows = [
  {TaskName: "Menu Planning", Assignedto: "Ajay", Status: statusType("Overdue"), Duedate: "12-07-2024", Reassign: actionBtn()},
  {TaskName: "Staff Scheduling", Assignedto: "Niraj", Status: statusType("Overdue"), Duedate: "01-08-2023", Reassign: actionBtn()},
  {TaskName: "Inventory management", Assignedto: "Vijay", Status: statusType("Overdue"), Duedate: "02-09-2022", Reassign: actionBtn()},
  {TaskName: "Customer Feedback Analysis", Assignedto: "Arvind", Status: statusType("Overdue"), Duedate: "11-06-2025", Reassign: actionBtn()},
  {TaskName: "Menu Planning", Assignedto: "Ajay", Status: statusType("Overdue"), Duedate: "12-07-2024", Reassign: actionBtn()},
  {TaskName: "Staff Scheduling", Assignedto: "Niraj", Status: statusType("Overdue"), Duedate: "01-08-2023", Reassign: actionBtn()},
  {TaskName: "Inventory management", Assignedto: "Vijay", Status: statusType("Overdue"), Duedate: "02-09-2022", Reassign: actionBtn()},
  {TaskName: "Customer Feedback Analysis", Assignedto: "Arvind", Status: statusType("Overdue"), Duedate: "11-06-2025", Reassign: actionBtn()},
  {TaskName: "Menu Planning", Assignedto: "Ajay", Status: statusType("Overdue"), Duedate: "12-07-2024", Reassign: actionBtn()},
  {TaskName: "Staff Scheduling", Assignedto: "Niraj", Status: statusType("Overdue"), Duedate: "01-08-2023", Reassign: actionBtn()},
];

  return (
    <>
      <ReactVirtualizedTable columns11 = {columns} style={columns.style} rows11 = {rows}/>
    </>
  );
}


const Dashboard = () => {


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [currentImg, setCurrentImg] = useState(Round);
  const [checkedClass, setCheckedClass] = useState('');
  let [count, setCount] = useState(0);
  const handleChangeImage = () => {
    setCount(++count);
    setCurrentImg(Check);
    setCheckedClass('checked');
  }

  const [currentImg1, setCurrentImg1] = useState(Round);
  const [checkedClass1, setCheckedClass1] = useState('');
  let [count1, setCount1] = useState(0);
  const handleChangeImage1 = () => {
    setCount1(++count1);
    setCurrentImg1(Check);
    setCheckedClass1('checked');
  }

  return (

    <>
      <div className="section-header">
        <h2>Good Evening ! Ajay</h2>

        <Button><MdOutlineWidgets /> Add Widget</Button>
      </div>

      <div className="sml-info-tab-grps">
        <div className="sml-info-tab">
          <div className="title">
            <img src={Ai} className='img-fluid' alt="Icon" />
            <h5>22 Ai Review</h5>
          </div>

          <div className="info-grp">
              <div className="info-red">
                  <p>Manually Approve <span>2</span></p>
              </div>

              <div className="info-green">
                  <p>Completed <span>10</span></p>
              </div>

              <div className="info-yellow">
                  <p>Rejected by Ai <span>10</span></p>
              </div>
          </div>
        </div>

        <div className="sml-info-tab">
          <div className="title">
            <img src={Task} className='img-fluid' alt="Icon" />
            <h5>22 Tasks</h5>
          </div>

          <div className="info-grp">
              <div className="info-yellow">
                  <p>Ongoing <span>10</span></p>
              </div>

              <div className="info-red">
                  <p>Overdue <span>2</span></p>
              </div>

              <div className="info-green">
                  <p>Completed <span>10</span></p>
              </div>

              <div className="info-purple">
                  <p>Scheduled <span>10</span></p>
              </div>
          </div>
        </div>

        <div className="sml-info-tab">
          <div className="title">
            <img src={Issue} className='img-fluid' alt="Icon" />
            <h5>22 Issues</h5>
          </div>

          <div className="info-grp">
              <div className="info-red">
                  <p>Ignored <span>2</span></p>
              </div>

              <div className="info-green">
                  <p>Resolved <span>10</span></p>
              </div>

              <div className="info-yellow">
                  <p>Open <span>10</span></p>
              </div>
          </div>
        </div>

        <div className="sml-info-tab">
          <div className="title">
            <img src={Forms} className='img-fluid' alt="Icon" />
            <h5>20 Forms</h5>
          </div>

          <div className="info-grp">
              <div className="info-purple">
                  <p>Open Responses <span>0</span></p>
              </div>

              <div className="info-green">
                  <p>Submitted Responses <span>10</span></p>
              </div>

              <div className="info-yellow">
                  <p>Ongoing Tasks <span>10</span></p>
              </div>
          </div>
        </div>
      </div>


      <div className="work-allocated dashboard-card">
        <div className="title-sec">
          <h5>Work Allocated</h5>

          <div className="action-sec">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={10}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Select Employee</MenuItem>
              </Select>
            </FormControl>

            <Button><IoIosMore /></Button>
          </div>
        </div>

        <CustomTabs con1 = {content1} con2 = {content2} con3 = {content3} tab1={tab1} tab2={tab2} tab3={tab3} />
      </div>


      <div className="employees-wise-progress dashboard-card">
          <div className="title-sec">
            <h5>Employee wise progress</h5>

            <div className="action-sec">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={10}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Select Employee</MenuItem>
                </Select>
              </FormControl>

              <Button><MdLaunch /></Button>

              <Button><IoIosMore /></Button>
            </div>
          </div>

          <CustomTabs con1 = {content11} con2 = {content22} con3 = {content33} tab1={tab11} tab2={tab22} tab3={tab33} />

      </div>


      <div className="sml-cards">
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard-card personal-notes">
              <div className="title-sec">
                <h5>Personal Notepad</h5>

                <div className="action-sec">
                  <Button><MdLaunch /></Button>

                  <Button><IoIosMore /></Button>
                </div>
              </div>
              <div className="personal-notes-main-box">
                <div className={`notes ${checkedClass}`}>
                  <div className="image" onMouseOver={()=> setCurrentImg(Check)} onMouseOut={() => {
                    if (!count) {
                      setCurrentImg(Round)
                    }
                  }} onClick={handleChangeImage}>
                    <img src={currentImg} className="img-fluid" alt="Image" />
                  </div>

                  <div className="cont">
                    <h5 className="title">Make shift & assign</h5>
                    <p className="cont">Assign individuals to specific shifts based on availability and role requirements</p>
                  </div>
                </div>

                <div className={`notes ${checkedClass1}`}>
                  <div className="image1" onMouseOver={()=> setCurrentImg1(Check)} onMouseOut={() => {
                    if (!count) {
                      setCurrentImg1(Round)
                    }
                  }} onClick={handleChangeImage1}>
                    <img src={currentImg1} className="img-fluid" alt="Image" />
                  </div>

                  <div className="cont">
                    <h5 className="title">Menu correction</h5>
                    <p className="cont">Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="dashboard-card action">
              <div className="title-sec">
                <h5>Department wise allocation</h5>

                <div className="action-sec">
                  <Button><IoIosMore /></Button>
                </div>
              </div>
              <CustomTabs con1 = {content111} con2 = {content222} con3 = {content333} tab1={tab111} tab2={tab222} tab3={tab333} />
            </div>
          </div>
        </div>
      </div>

      <div className="sml-cards">
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard-card">
              <div className="title-sec">
                <h5>Overdue tasks <span>10</span></h5>

                <div className="action-sec">
                  <Button><MdLaunch /></Button>

                  <Button><IoIosMore /></Button>
                </div>
              </div>

              <div className="overdue-main-grp">
                  {overTable ()}
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="dashboard-card">
              <div className="title-sec">
                <h5>Workflows</h5>

                <div className="action-sec">
                  <Button><MdLaunch /></Button>

                  <Button><IoIosMore /></Button>
                </div>
              </div>

              <div className="workflow-main-grp">
                  <div className="work-allocated-cards-grp forms">
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                    <div className="work-allocated-card">
                      <div className='name-action'>
                        <h5>How to Manage Stock</h5>
                        <Button><FiEye /></Button>
                      </div>

                      <div className="response-task-grp">
                        <div className="response-task">
                          <p className="response">Responses <span>10</span></p>
                          <p className="vertical-line"></p>
                          <p className="task">Tasks <span>10</span></p>
                        </div>

                        <div className="admin-profile">
                          <h5>A</h5>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

      
    </>

  )
};

export default Dashboard;
