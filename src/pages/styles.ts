import styled from 'styled-components'

export const LoginContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const Divider = styled.div`
  width: 10rem;
  height: 2px;
  background: var(--border);
  border-radius: 50%;
  align-self: center;
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  margin: 0 auto;
  gap: 2rem;
`

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1rem;

  span {
    align-self: center;
    color: var(--text-100);
  }

  h1 {
    font-weight: 200;
    color: var(--text);
    text-align: center;
    line-height: 3rem;
  }
`

export const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--black);
  border-radius: 0.25rem;
  padding: 3rem 4rem 2rem 4rem;

  gap: 1rem;
`

export const UserTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .userType {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.85rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary);

    color: var(--text-100);

    span {
      font-size: 0.85rem;
    }
  }
`

export const ErrorMessage = styled.span`
  margin: 0;

  color: var(--error);
  font-size: 0.75rem;
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
    font-weight: 600;
    color: var(--text);
    outline: none;
    padding: 0px 1em 0px 3em;
    border-radius: 0.35rem;

    background: var(--black);
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

export const SubmitButton = styled.button`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;
  font-weight: 400;
  background: var(--black-10);
  border: 0;
  border-radius: 0.35rem;
  padding: 0 1rem 0 1.5rem;

  &:hover {
    transform: all 0.5s ease;

    span {
      color: var(--text);
    }

    svg {
      color: var(--text);
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--text-100);
      font-size: 0.75rem;
      font-weight: 500;
    }

    svg {
      color: var(--text-100);
    }
  }
`

export const ForgotPassword = styled.span`
  margin: 0.75rem 0 1.5rem 0;
  font-weight: 300;
  font-size: 0.75rem;
  align-self: center;
  color: var(--text-100);
  cursor: pointer;

  &:hover {
    transform: all 0.35s ease;
    color: var(--primary);
  }
`

export const OptionsLogin = styled.span`
  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 0.35rem;
`

export const OptionsContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  width: 7rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  cursor: pointer;
  background: var(--black);

  &:hover {
    transform: all 0.5s ease;
    color: var(--primary);
    border-color: var(--primary);

    span {
      color: var(--primary);
    }
  }

  span {
    font-weight: 300;
    font-size: 0.75rem;
    text-align: center;
    color: var(--text);
  }

  svg {
    color: var(--white);
  }
`
