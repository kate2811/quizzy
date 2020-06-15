import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { UserSignInData } from '../../modules/auth/types'
import AuthPageLayout from '../AuthPageLayout'
import FormInput from '../FormInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormCheckbox from '../FormCheckbox'
import { useDispatch } from 'react-redux'
import { actions } from '../../modules/core/actions'

type Props = {
  onSubmit: (userData: UserSignInData) => void
}

const SignInPage: React.FC<Props> = ({ onSubmit }) => {
  const dispatch = useDispatch()
  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    })
  }, [])

  return (
    <AuthPageLayout>
      <div className="pb-13 pt-lg-0 pt-5">
        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Welcome to Quizzy</h3>
        <span className="text-muted font-weight-bold font-size-h4">
          {`New Here? `}
          <Link to="/auth/sign-up" className="text-success font-weight-bolder">
            Create an Account
          </Link>
        </span>
      </div>

      <Formik
        initialValues={{ email: '', password: '', isRemember: true }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <FormInput label="Email" name="email" id="email" />
          <FormInput label="Password" name="password" type="password" id="password" />
          <FormCheckbox name="isRemember">Remember me?</FormCheckbox>
          <button type="submit" className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">
            Sign in
          </button>
        </Form>
      </Formik>

      <button onClick={() => dispatch(actions.getNotification({ type: 'success', text: 'Some information' }))}>
        !
      </button>
    </AuthPageLayout>
  )
}

export default SignInPage
