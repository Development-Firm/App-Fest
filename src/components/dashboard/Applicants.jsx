import { Table, Tooltip } from 'antd';
import React from 'react'
import Header from '../generic/Header';
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  EditOutlined,
  SendOutlined
} from '@ant-design/icons'


const ApplicantTable=() => {
  const dataSource=[
    {
      key: '1',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Uzair',
      email: 'uzair@gmail.com'
    },
    {
      key: '2',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Muzamil',
      email: 'muzamil@gmail.com'
    },
    {
      key: '3',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Fasih',
      email: 'fasih@gmail.com'
    },

  ];

  const columns=[
    {
      title: 'Team name',
      dataIndex: 'teamName',
      key: 'teamName',
    },
    {
      title: 'No. of members',
      dataIndex: 'noOfMembers',
      key: 'noOfMembers',
    },
    {
      title: 'Team Lead',
      dataIndex: 'teamLead',
      key: 'teamLead',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'action',
      align: 'center',
      render: ( _, record ) => (
        <>
          <Tooltip title='View Team info'>
            <span
              onClick={() => {
                // let data = JSON.parse(record._streamingLinks)
                // data = data.sort((a, b) => a.priority - b.priority)
                // setModalContent(data)
                // showModal(true)
              }}
              style={{
                fontSize: '1.3rem',
                color: '#45bf55',
                cursor: 'pointer'
              }}
            >
              <EyeOutlined />
            </span>
          </Tooltip>
          <Tooltip title='Approve and send email'>
            <span
              onClick={() => {
                // let data = JSON.parse(record._streamingLinks)
                // data = data.sort((a, b) => a.priority - b.priority)
                // setModalContent(data)
                // showModal(true)
              }}
              style={{
                fontSize: '1.3rem',
                color: '#050816',
                cursor: 'pointer',
                marginLeft: '10px'

              }}
            >
              <SendOutlined />
            </span>
          </Tooltip>
        </>
      )
    }

  ];

  const showDeleteConfirm=record => {
    confirm( {
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you want to delete?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      // async onOk () {
      //   await deleteDeviceId(record.key)
      // },
      onCancel() { }
    } )
  }

  // useEffect(() => {
  //   if ( !isLoading&&data ) {
  //     let _data = data.data.map((device, i) => {
  //       return {
  //         key: device._id,
  //         no: i + 1,
  //         deviceids: device.device_id
  //       }
  //     })
  //     setDevicedata(_data)
  //   }
  // }, [data, isLoading])


  return (
    <>
      <div className=''>
        {(
          <Table columns={columns} dataSource={dataSource} size='middle' />
        )}
      </div>
    </>
  )
}

const Applicants=() => {

  return (
    <div className='px-[100px]'>
      <Header heading='Applicants' add_btn={false} />
      <div style={{ marginTop: '2rem' }}>
        <ApplicantTable />
      </div>
    </div>
  )
}

export default Applicants