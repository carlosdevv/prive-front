import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 38rem;

  font-family: Inter;
`

export const ModalContent = styled.div`
  background: var(--black);
  width: 100%;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  .loginRedirect {
    margin-top: 1.75rem;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;

    h1 {
      font-weight: 300;
      font-size: 1.5rem;
    }

    span {
      display: flex;

      text-align: center;
    }
  }

  span {
    font-weight: 300;

    button {
      border: 0;
      background: transparent;
      color: var(--primary);
      font-weight: 500;
      font-size: 1rem;
    }
  }
`

export const CloseBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-left: auto;

  svg {
    color: var(--white);
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 2rem auto 0 auto;
  gap: 1rem;

  span {
    width: 100%;
    display: flex;
    align-items: start;
  }
`

export const InputContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  flex: 1 1 0%;

  input {
    width: 100%;
    height: 3.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    outline: none;
    padding: 0px 1em 0px 3em;
    border-radius: 0.35rem;

    background: var(--black-10);
    border: 2px solid var(--border);

    &:focus {
      border: 2px solid var(--primary);
    }

    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: var(--text-100);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    transition: fill 0.2s ease 0s;

    color: var(--primary);
  }

  button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;

    svg {
      color: var(--primary);
      left: 22.5rem;
    }
  }
`
export const ErrorMessage = styled.span`
  margin: 0;

  color: var(--error);
  font-size: 0.75rem;
`
export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;
  font-weight: 400;
  background: var(--primary);
  border-radius: 0.35rem;
  padding: 0 1rem 0 1.5rem;

  &:hover {
    transform: all 0.5s ease;

    span {
      color: var(--black);
    }

    svg {
      color: var(--black);
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--text);
      font-size: 0.75rem;
      font-weight: 500;
    }

    svg {
      color: var(--text);
    }
  }
`
