import React, { useMemo } from 'react'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

type Props = { onSubmit: (userData: any) => void }

const SignUpPage: React.FC<Props> = ({ onSubmit }) => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
    })
  }, [])

  return (
    <AuthPageLayout title={'Sign up'}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={({ confirmPassword, ...rest }) => onSubmit(rest)}
        validationSchema={validationSchema}
      >
        <Form>
          <FormInput label="First name" name="firstName" icon="fa-user" id="firstName" />
          <FormInput label="Last name" name="lastName" icon="fa-user" id="lastName" />
          <FormInput label="Email" name="email" icon="fa-envelope" id="email" />
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
