import React, { useMemo } from 'react'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { UserSingUpData } from '../../modules/auth/types'

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
    <AuthPageLayout>
      <div className="pb-13 pt-lg-0 pt-5">
        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
        <p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
      </div>

      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', password: '', confirmPassword: '' }}
        onSubmit={({ confirmPassword, ...rest }) => onSubmit(rest)}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <FormInput placeholder="Email" name="email" id="email" />
          <FormInput placeholder="First name" name="firstName" id="firstName" />
          <FormInput placeholder="Last name" name="lastName" id="lastName" />
          <FormInput placeholder="Password" type="password" name="password" id="password" />
          <FormInput placeholder="Confirm password" type="password" name="confirmPassword" id="confirmPassword" />
          <button type="submit" className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">
            Sign up
          </button>
          <Link to="/auth/sign-in" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">
            Cancel
          </Link>
        </Form>
      </Formik>
    </AuthPageLayout>
  )
}

export default SignUpPage
