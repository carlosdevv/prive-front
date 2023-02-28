import {
  BiBuilding,
  BiRightArrowAlt,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiPhone,
  FiX
} from '@/components/Icons'
import { yupResolver } from '@hookform/resolvers/yup'
import Modal from '@mui/material/Modal'
import Tooltip from '@mui/material/Tooltip'
import { SetStateAction, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import * as S from './styles'

type RegisterModalProps = {
  modalIsOpen: boolean
  setModalIsOpen: (value: SetStateAction<boolean>) => void
}

type RegisterModalFormProps = {
  companyName: string
  phone: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterModal({
  modalIsOpen,
  setModalIsOpen
}: RegisterModalProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const schema = Yup.object().shape({
    companyName: Yup.string().required('Nome da empresa obrigatória'),
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um E-mail válido.'),
    phone: Yup.string()
      .length(16, 'Infome um Telefone válido')
      .required('Telefone obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
    confirmPassword: Yup.string()
      .required('Confirmação de senha obrigatória')
      .oneOf([Yup.ref('password')], 'Senhas precisam de iguais para continuar')
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterModalFormProps>({
    resolver: yupResolver(schema)
  })

  const closeModal = useCallback(() => {
    setModalIsOpen(false)
    reset()
  }, [])

  const onSubmit = useCallback((data: RegisterModalFormProps) => {
    console.log('phone', data.phone.replace(/[^a-zA-Z0-9 ]/g, ''))
    console.log('submit', data)
    closeModal()
    reset()
  }, [])

  return (
    <Modal open={modalIsOpen} onClose={closeModal}>
      <S.ModalOverlay>
        <S.ModalContent>
          <div>
            <h1>Faça seu Cadastro</h1>
            <S.CloseBtn type="button" onClick={() => closeModal()}>
              <FiX size={22} />
            </S.CloseBtn>
          </div>

          <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
            <S.InputContainer>
              <BiBuilding size={22} />
              <Tooltip title="Caso não tenha empresa, insira seu nome">
                <input
                  {...register('companyName', { required: true })}
                  name="companyName"
                  placeholder="Nome da empresa *"
                  type="text"
                  autoComplete="off"
                />
              </Tooltip>
            </S.InputContainer>
            {!!errors.companyName && (
              <S.ErrorMessage>{errors.companyName.message}</S.ErrorMessage>
            )}
            <S.InputContainer>
              <FiMail size={22} />
              <input
                {...register('email', { required: true })}
                name="email"
                placeholder="Seu email *"
                type="text"
                autoComplete="off"
              />
            </S.InputContainer>
            {!!errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
            <S.InputContainer>
              <FiPhone size={22} />
              <InputMask
                mask="(99) 9 9999-9999"
                {...register('phone', { required: true })}
                name="phone"
                placeholder="Telefone *"
                type="text"
                autoComplete="off"
              />
            </S.InputContainer>
            {!!errors.phone && (
              <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>
            )}
            <S.InputContainer>
              <FiLock size={22} />
              <input
                {...register('password', { required: true })}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Sua senha *"
                autoComplete="off"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </button>
            </S.InputContainer>
            {!!errors.password && (
              <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
            )}
            <S.InputContainer>
              <FiLock size={22} />
              <input
                {...register('confirmPassword', { required: true })}
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirme sua senha *"
                autoComplete="off"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </button>
            </S.InputContainer>
            {!!errors.confirmPassword && (
              <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
            )}
            <S.SubmitButton>
              <div>
                <span>Registrar</span>
                <BiRightArrowAlt size={24} />
              </div>
            </S.SubmitButton>
          </S.ModalForm>
          <span className="loginRedirect">
            Já é membro?{' '}
            <button type="button" onClick={() => closeModal()}>
              Faça o Login.
            </button>
          </span>
        </S.ModalContent>
      </S.ModalOverlay>
    </Modal>
  )
}
