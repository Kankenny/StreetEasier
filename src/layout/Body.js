import React, { Fragment } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Error404 from '../components/ui/Error404'
import Home from './body/home/Home'
import About from './body/about/About'
import Members from './body/members/Members'
import Contacts from './body/contacts/Contacts'
import UserLoginSignup from './body/user-login-signup/UserLoginSignup'
import SignUp from './body/user-login-signup/signup/SignUp'
import Login from './body/user-login-signup/login/Login'
import Apartments from '../components/apartments/Apartments'
import Profile from '../components/profile/Profile'

import { AnimatePresence } from 'framer-motion'

const Body = () => {
	const location = useLocation()
	return (
		<div className="min-h-[80vh]">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="*" element={<Error404 />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/welcome" element={<Home />}></Route>
					<Route path="/about" element={<About />} />
					<Route path="/members" element={<Members />} />
					<Route path="/contact" element={<Contacts />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/user-login-signup"
						element={<UserLoginSignup />}
					/>
					<Route path="/apartments" element={<Apartments />} />
					{/* <Route path="/apartments" element={<Apartments />} /> */}
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default Body
