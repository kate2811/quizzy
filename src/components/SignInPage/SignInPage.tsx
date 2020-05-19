import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { UserSignInData } from '../../module/types'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormCheckbox from '../FormCheckbox'

type Props = {
  onSubmit: (userData: UserSignInData) => void
}

const SignInPage: React.FC<Props> = ({ onSubmit }) => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    })
  }, [])

  return (
    <AuthPageLayout title="Sign in">
      <Formik
        initialValues={{ email: '', password: '', isRemember: true }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        <Form>
          <FormInput label='Email' name='email' icon='fa-user' id='email' />
          <FormInput label='Password' name='password' type='password' icon='fa-lock' id='password' />
          <FormCheckbox name='isRemember'>Remember me?</FormCheckbox>
          <button type="submit" className="btn btn-secondary btn-block mt-4">
            Sign in
          </button>
        </Form>
      </Formik>

      <p className="text-center mt-4 text-secondary">
        Don't have an account yet?&nbsp;
        <Link to="/auth/sign-up">Sign-up!</Link>
      </p>
    </AuthPageLayout>
  )
}

export default SignInPage
