import './App.css';
import Me from './assets/pic.jpg';
import BG from './assets/bg.jpg';
import { useRef } from 'react';
import Modal from './components/Modal';

function App() {
  const modalRef = useRef(null);

  const handleClick = () => {
    modalRef.current.open();
  };

  return (
    <>
      <div
        className='hero min-h-screen items-center bg-base-200'
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        <div className='hero-overlay bg-opacity-80'></div>
        <div className='flex w-full max-w-screen-lg bg-none sm:bg-white rounded-lg overflow-hidden p-2'>
          <div className='flex-1 bg-none sm:bg-zinc-500 p-8 rounded-l-lg flex flex-col justify-between'>
            <span className='font-bold'>Dogukan (aka Dodo) Yigiter</span>
            <div className='mt-8'>
              <h1 className='text-3xl font-bold mb-4'>
                Front-End Developer from Victoria, BC
              </h1>
              <p className='font-medium'>
                While I am working on the second version of my webpage, you can
                check out my projects from my{' '}
                <a
                  className='link'
                  href='https://github.com/DodoBey'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
                , or read something from my{' '}
                <a
                  className='link'
                  href='https://dogukanyigiter.notion.site/dogukanyigiter/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blog
                </a>
                . If you like to get in touch with me, you can send me a message
                via{' '}
                <a
                  className='link'
                  href='https://www.linkedin.com/in/dogukanyigiter/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>{' '}
                or fill out the form. I will get back to you shortly!
              </p>
            </div>
            <button
              className='btn btn-primary rounded-lg mt-8 sm:w-1/4'
              onClick={handleClick}
            >
              Get in touch
            </button>
          </div>
          <div className='hidden sm:flex flex-1'>
            <img
              src={Me}
              alt='Picture of myself'
              className='w-full h-full object-cover rounded-r-lg'
            />
          </div>
        </div>
      </div>
      <Modal ref={modalRef} />
    </>
  );
}
export default App;
