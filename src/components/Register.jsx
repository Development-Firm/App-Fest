import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";
import { Button, Col, Form, Input, message, Row, Select, Steps, theme, Upload } from 'antd';
import { useState } from 'react';
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
import ImgCrop from 'antd-img-crop'


const { Option }=Select;
function getNumberArray( count ) {
  const numberArray=[];

  for ( let i=1; i<=count; i++ ) {
    numberArray.push( i );
  }

  return numberArray;
}

const Form1=() => {
  const [ form ]=Form.useForm();

  const onFinish=( values ) => {
    console.log( values );
  };
  const onReset=() => {
    form.resetFields();
  };

  return (
    <div className='mt-[120px] mb-20 '>
      <Form
        form={form}
        layout={'vertical'}
        // name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Form.Item
          name="competition"
          label="Competition"
          rules={[
            {
              required: true,
              message: 'Please select competition type!'
            },
          ]}
        >
          <Select
            placeholder="Select competition"
            allowClear
            size='large'
          >
            <Option value="web app hackathon">Web app hackathon</Option>
            <Option value="mobile app hackathon">Mobile app hackathon</Option>
            <Option value="code bees">Code Bees</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>

  )
}

const Form2=() => {
  const [ form ]=Form.useForm();

  const onFinish=( values ) => {
    console.log( values );
  };
  const onReset=() => {
    form.resetFields();
  };

  return (
    <div className='mt-[120px] mb-20 '>
      <Form
        form={form}
        layout='vertical'
        // name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Form.Item
          name="team_name"
          label="Team Name"
          rules={[
            {
              required: true,
              message: 'Please enter team name!',
              type: 'string'
            },
          ]}
        >
          <Input placeholder='Enter your team name'
            size='large' />
        </Form.Item>

        <Form.Item
          name="team_members_count"
          label="No of team members"
          rules={[
            {
              required: true,
              message: 'Please enter no of team members!',
            },
          ]}
        >
          <Input placeholder="Enter no of team members"
            size='large' type='number' />
        </Form.Item>
      </Form>
    </div>

  )
}

const Form3=() => {
  const [ form ]=Form.useForm();
  let members=getNumberArray( 3 );

  const onFinish=( values ) => {
    console.log( values );
  };
  const onReset=() => {
    form.resetFields();
  };

  return (
    <div className='mt-10 mb-20 '>
      <Form
        form={form}
        // name="control-hooks"
        layout='vertical'
        onFinish={onFinish}
        style={{
        }}
      >
        {
          members.map( ( el ) => {
            return ( <>
              <h3 className='text-white font-bold text-center text-[22px]'>Member {el}</h3>
              <hr className='border-[#915EFF]  border-2 mb-10 w-[60px] mx-auto' />
              <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name={`member_${el}_name`}
                    label={`Member ${el} name`}
                    rules={[
                      {
                        required: el===1&&true,
                        message: 'Please enter name!',
                        type: 'string'
                      },
                    ]}
                  >
                    <Input placeholder={`Member ${el} name`}
                      size='large' />
                  </Form.Item>

                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name={`member_${el}_email`}
                    label={`Member ${el} email`}
                    rules={[
                      {
                        required: el===1&&true,
                        message: 'Please enter email!',
                        type: 'email'
                      },
                    ]}
                  >
                    <Input placeholder={`rollno@pucit.edu.pk`}
                      size='large' />
                  </Form.Item>

                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name={`member_${el}_cnic`}
                    label={`Member ${el} CNIC`}
                    rules={[
                      {
                        required: el===1&&true,
                        message: 'Please enter CNIC!',
                        type: 'string'
                      },
                    ]}
                  >
                    <Input placeholder={`0000000000000`}
                      size='large' />
                  </Form.Item>

                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name={`member_${el}_phone`}
                    label={`Member ${el} Phone`}
                    rules={[
                      {
                        required: el===1&&true,
                        message: 'Please enter phone!',
                        type: 'string'
                      },
                    ]}
                  >
                    <Input placeholder={`03*********`}
                      size='large' />
                  </Form.Item>
                </Col>



              </Row>
            </> )
          } )
        }


      </Form>

    </div>

  )
}

const Form4=() => {
  const [ fileList, setFileList ]=useState( [] )
  const [ form ]=Form.useForm();

  const onImgChange=( { fileList: newFileList } ) => {
    setFileList( newFileList )
  }
  const onPreview=async file => {
    let src=file.url
    if ( !src ) {
      src=await new Promise( resolve => {
        const reader=new FileReader()
        reader.readAsDataURL( file.originFileObj )
        reader.onload=() => resolve( reader.result )
      } )
    }
    const image=new Image()
    image.src=src
    const imgWindow=window.open( src )
    imgWindow?.document.write( image.outerHTML )
  }

  const onFinish=( values ) => {
    console.log( values );
  };
  const onReset=() => {
    form.resetFields();
  };

  return (
    <div className='mt-10 mb-20'>
      <p className='text-white font-bold text-[22px]'>Payment Procedure:</p>
      <p
        className='text-secondary text-[14px] leading-[30px] mb-5'
      >
        <ul>
          <li>Pay your dues on Jazzcash account no. 03021947016.</li>
          <li>Upload reciept below.</li>
        </ul>
      </p>
      <ImgCrop rotate>
        <Upload
          listType='picture-card'
          fileList={fileList}
          onChange={onImgChange}
          onPreview={onPreview}
          beforeUpload={() => false}
        >
          {fileList.length<1&&'+ Reciept image'}
        </Upload>
      </ImgCrop>
    </div>

  )
}


const steps=[
  {
    title: 'Competition',
    content: <Form1 />,
  },
  {
    title: 'Team',
    content: <Form2 />,
  },
  {
    title: 'Members Info',
    content: <Form3 />,
  },
  {
    title: 'Payment',
    content: <Form4 />,
  },
];
const StepsForm=() => {
  const { token }=theme.useToken();
  const [ current, setCurrent ]=useState( 0 );
  const next=() => {
    setCurrent( current+1 );
  };
  const prev=() => {
    setCurrent( current-1 );
  };
  const items=steps.map( ( item ) => ( {
    key: item.title,
    title: item.title,
  } ) );
  const contentStyle={

    color: token.colorTextTertiary,
    marginTop: 16,
    minHeight: '400px'
  };
  return (
    <div className='pt-[150px] max-w-6xl mx-auto'>
      <h2 className={`${styles.sectionHeadText} text-center`}>Registration.</h2>
      <hr className='border-[#915EFF] mt-0 border-4 mb-20 w-[120px] mx-auto' />
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[ current ].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current<steps.length-1&&(
          <button onClick={() => next()} className='w-[80px] font-bold h-[40px] text-[18px] bg-[#915EFF] hover:bg-[#6825f7] text-white'  >Next</button>
        )}
        {current===steps.length-1&&(
          <button onClick={() => message.success( 'Processing complete!' )} className='w-[90px] font-bold h-[40px] text-[18px] bg-[#915EFF] hover:bg-[#6825f7] text-white'  >Submit</button>
        )}
        {current>0&&(
          <button onClick={() => prev()} className='w-[100px] ml-3 font-bold h-[40px] text-[18px] bg-[white] hover:bg-[#d2d0d0] text-black'  >Previous</button>
        )}
      </div>
    </div>
  );
};


const Register=() => {
  return (
    <div className='relative z-0 pb-10 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar isExternalLinks />
      </div>
      <StepsForm />

    </div>
  )
}

export default Register

