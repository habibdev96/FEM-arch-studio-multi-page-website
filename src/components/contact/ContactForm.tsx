import styled from 'styled-components';
import { useGlobalState } from '../../context';
import { textStyles, flexAlign, headingStyles } from '../../abstracts/Mixins';

const StyledForm = styled.form`
  padding: 0 5rem;

  .form-control {
    position: relative;
    margin-bottom: 5rem;
    border-bottom: 0.1rem solid var(--veryDarkBlue);
  }

  .input,
  .textarea {
    ${headingStyles}
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 2rem;
    padding: 1.5rem 2rem;
    resize: none;
    width: 100%;
    color: var(--mediumGrey);
  }

  .icon {
    font-size: var(--xxs);
  }

  .textarea {
    height: 20vh;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    margin: 2rem 0;
  }

  .message {
    ${textStyles}
    ${flexAlign}
    position: absolute;
    top: 2rem;
    right: 0;
    gap: 1rem;
    color: var(--error);
    font-size: 1.2rem;
  }

  .submit-btn {
    ${headingStyles}
    position: relative;
    z-index: 10;
    display: inline-block;
    cursor: pointer;
    padding: 2rem;
    font-size: 1.5rem;
    outline: 0;
    border: 0;
    width: 30%;
    transition: var(--mainTransition);
    background-color: var(--veryDarkBlue);
    color: var(--white);

    &:hover,
    &:focus {
      background-color: var(--darkGrey);
      color: var(--white);
    }
  }
`;

const ContactForm = (): JSX.Element => {
  const { handleSubmit, register, errors, onSubmit } = useGlobalState();

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className={`form-control ${errors.name && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Name'
          autoComplete='off'
          {...register('name', { required: true })}
        />
        {errors.name && <small className='message'>Name is required.</small>}
      </div>
      <div className={`form-control ${errors?.email && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Email'
          autoComplete='off'
          {...register('email', emailValidation)}
        />
        {errors?.email && (
          <small className='message'>{errors.email.message}</small>
        )}
      </div>
      <div className={`form-control ${errors.message && 'input-error'}`}>
        <textarea
          className='textarea'
          placeholder='Message'
          {...register('message', { required: true })}
        ></textarea>
        {errors.message && (
          <small className='message'>Subject message is required.</small>
        )}
      </div>
      <input type='submit' value='Submit' className='submit-btn' />
    </StyledForm>
  );
};

export default ContactForm;
