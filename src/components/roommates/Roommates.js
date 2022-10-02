import React from 'react'

import RoommatesList from './RoommatesList'

import Overview from '../ui/Overview'
import Heading from '../ui/Heading'

import { motion } from 'framer-motion'

function Roommates() {
	return (
		<motion.div
			className="min-h-full space-y-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Heading heading="Matched Roommates" className="mt-16" />
			<div>
				<RoommatesList />
			</div>
			<Heading heading="Explore Roommates" />
			<div>
				<RoommatesList />
			</div>
		</motion.div>
	)
}

export default Roommates
