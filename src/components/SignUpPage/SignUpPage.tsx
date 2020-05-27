import React, { useMemo } from 'react'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { UserSingUpData } from '../../module/auth/types'

type Props = { onSubmit: (userData: UserSingUpData) => void }

const SignUpPage: React.FC<Props> = ({ onSubmit }) => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email()
        .required()
        .test(
          'isEmailUnique',
          'The email address is already registered',
          (value) =>
            value.includes('@') &&
            fetch('http://47.56.144.147:5555/auth/sign-up-check?email=' + value).then((resp) => resp.status === 200)
        ),
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
    })
  }, [])

  return (
    <AuthPageLayout title={'Sign up'}>
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', password: '', confirmPassword: '' }}
        onSubmit={({ confirmPassword, ...rest }) => onSubmit(rest)}
        validationSchema={validationSchema}
      >
        <Form>
          <FormInput label="Email" name="email" icon="fa-envelope" id="email" />
          <FormInput label="First name" name="firstName" icon="fa-user" id="firstName" />
          <FormInput label="Last name" name="lastName" icon="fa-user" id="lastName" />
          <FormInput label="Password" type="password" name="password" icon="fa-lock" id="password" />
          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            icon="fa-lock"
            id="confirmPassword"
          />
          <button type="submit" className="btn btn-secondary btn-block mt-4">
            Sign up
          </button>
        </Form>
      </Formik>

      <p className="text-center mt-4 text-secondary">
        Already have an account?&nbsp;
        <Link to="/auth/sign-in">Sign-in!</Link>
      </p>
    </AuthPageLayout>
  )
}

export default SignUpPage
