import { forwardRef, useImperativeHandle, useRef } from 'react';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/display-name
const Modal = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  const handleClose = (e) => {
    e.preventDefault();
    modalRef.current.close();
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await fetch('../util/contact-form.php', {
        method: 'POST',
        body: formData,
      });
      toast.success(
        'Thank you for contanting me! I will get back to you shortly.'
      );
    } catch (error) {
      toast.error('Something went wrong.');
      console.log(error);
    }
    modalRef.current.close();
    e.target.reset();
  };

  return (
    <dialog
      id='contact_modal'
      className='modal'
      ref={modalRef}
    >
      <div className='modal-box bg-opacity-90 rounded-lg'>
        <h3 className='font-bold text-lg mb-8'>Contact</h3>
        <div className='modal-action'>
          <form
            className='w-full flex flex-col gap-4'
            onSubmit={submitForm}
          >
            <label className='input input-bordered flex items-center gap-2 rounded-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70 '
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
              </svg>
              <input
                type='text'
                className='grow bg-inherit'
                placeholder='Name'
                name='Name'
                required
              />
            </label>
            <label className='input input-bordered flex items-center gap-2 rounded-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input
                type='text'
                className='grow bg-inherit'
                placeholder='Email'
                name='Email'
                required
              />
            </label>
            <textarea
              className='textarea textarea-bordered textarea-lg rounded-lg'
              placeholder='Message'
              name='Message'
              required
            ></textarea>
            <div className='flex'>
              <button
                className='btn flex-1'
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type='submit'
                className='btn btn-secondary flex-1'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
