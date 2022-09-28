import React, { useState } from 'react'

import Input from '../../../../components/ui/Input'
import SolidButton from '../../../../components/ui/button/SolidButton'
import LoginSignUpPrompter from '../../../../components/ui/login_signup/LoginSignUpPrompter'

import img from '../../../../assets/signup-login/login.jpg'
import Overview from '../../../../components/ui/Overview'
import Card from '../../../../components/ui/Card'

import { motion } from 'framer-motion'

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		emailAddress: '',
		password: '',
	})

	const emailChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			emailAddress: e.target.value,
		}))
	}

	const passwordChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			password: e.target.value,
		}))
	}

	const onUserSubmitHandler = (e) => {
		e.preventDefault()
		console.log(userInfo)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="Welcome Back!"
				subtitle="It's great to see you again!"
			/>
			<Card className="max-w-6xl container mx-auto flex flex-col md:flex-row space-x-8">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem] max-w-sm">
					<h1 className="text-2xl font-bold">
						Enter User Details
					</h1>
					<form className="flex flex-col mt-4">
						<Input
							type="email"
							name="email"
							placeholder="Email Address"
							value={userInfo.emailAddress}
							onChange={emailChangeHandler}
							required={true}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							value={userInfo.password}
							onChange={passwordChangeHandler}
							required={true}
						/>
						<LoginSignUpPrompter
							question="Forgot Password?"
							action="Reset Password"
						/>
						<SolidButton
							buttonType="submit"
							buttonText="Login"
							className="my-4"
							onClick={onUserSubmitHandler}
						/>
						<LoginSignUpPrompter
							question="Don't have an account?"
							action="Register here"
							isLoggingIn={false}
							isRouterLink={true}
						/>
					</form>
				</div>
				<img
					src={img}
					alt="bed"
					className="max-h-[100rem] h-50 max-w-lg rounded-xl shadow-2xl sm:mx-auto"
				/>
			</Card>
		</motion.div>
	)
}

export default Login