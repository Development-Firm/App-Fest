import { Modal, Table, Tooltip } from 'antd';
import React, { useState } from 'react'
import Header from '../generic/Header';
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  EditOutlined,
  SendOutlined
} from '@ant-design/icons'


const InfoModel=( { modalContent, handleOk, handleCancel, isModalOpen } ) => {
  return (
    <Modal
      title='Team Info'
      footer={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {/* <Collapse>
        {modalContent.map( ( el, i ) => {
          return (
            <Panel header={el.name} key={i}>
              <Descriptions layout='vertical' bordered>
                <Descriptions.Item
                  labelStyle={{ fontWeight: 'bold' }}
                  style={{ textAlign: 'center' }}
                  label='Url'
                >
                  {el.url}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontWeight: 'bold' }}
                  style={{ textAlign: 'center' }}
                  label='Priority'
                >
                  {el.priority}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontWeight: 'bold' }}
                  style={{ textAlign: 'center' }}
                  label='Token'
                >
                  {el.token}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontWeight: 'bold' }}
                  style={{ textAlign: 'center' }}
                  label='Request Header'
                >
                  {el.request_header}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontWeight: 'bold' }}
                  style={{ textAlign: 'center' }}
                  label='Player Header'
                >
                  {el.player_header}
                </Descriptions.Item>
              </Descriptions>
            </Panel>
          )
        } )}
      </Collapse> */}
    </Modal>
  )
}

const ApplicantTable=() => {
  const [ isModalOpen, setIsModalOpen ]=useState( false )

  const showModal=() => {
    setIsModalOpen( true )
  }
  const handleOk=() => {
    setIsModalOpen( false )
  }
  const handleCancel=() => {
    setIsModalOpen( false )
  }

  const dataSource=[
    {
      key: '1',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Uzair',
      email: 'uzair@gmail.com',
      competition: 'Web Hackathon'
    },
    {
      key: '2',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Muzamil',
      email: 'muzamil@gmail.com',
      competition: 'App Hackathon'

    },
    {
      key: '3',
      teamName: 'Devfum',
      noOfMembers: 3,
      teamLead: 'Fasih',
      email: 'fasih@gmail.com',
      competition: 'Code Bees'
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
      title: 'Competition Type',
      dataIndex: 'competition',
      key: 'competition',
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
                showModal( true )
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
        <InfoModel modalContent={[]} isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
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