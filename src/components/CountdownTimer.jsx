import React, { useState, useEffect } from 'react';
const DateTimeDisplay=( { value, type, isDanger } ) => {
  return (
    <span className={isDanger? 'bg-red':'bg-[#915EFF] text-white p-3 font-bold text-[30px]'}>
      <span>{value} </span>
      <span>{type} </span>
    </span>
  );
};

const useCountdown=( targetDate ) => {
  const countDownDate=new Date( targetDate ).getTime();

  const [ countDown, setCountDown ]=useState(
    countDownDate-new Date().getTime()
  );

  useEffect( () => {
    const interval=setInterval( () => {
      setCountDown( countDownDate-new Date().getTime() );
    }, 1000 );

    return () => clearInterval( interval );
  }, [ countDownDate ] );

  return getReturnValues( countDown );
};

const getReturnValues=( countDown ) => {
  // calculate time left
  const days=Math.floor( countDown/( 1000*60*60*24 ) );
  const hours=Math.floor(
    ( countDown%( 1000*60*60*24 ) )/( 1000*60*60 )
  );
  const minutes=Math.floor( ( countDown%( 1000*60*60 ) )/( 1000*60 ) );
  const seconds=Math.floor( ( countDown%( 1000*60 ) )/1000 );

  return [ days, hours, minutes, seconds ];
};

const ExpiredNotice=() => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Sorry you can apply next year.</p>
    </div>
  );
};

const ShowCounter=( { days, hours, minutes, seconds } ) => {
  return (
    <div className="show-counter mt-4">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days<=3} />
        <span className='mr-3'></span>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <span className='mr-3'></span>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <span className='mr-3'></span>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer=( { targetDate } ) => {
  const [ days, hours, minutes, seconds ]=useCountdown( targetDate );

  if ( days+hours+minutes+seconds<=0 ) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
