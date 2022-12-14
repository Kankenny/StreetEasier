import React from 'react'

import Link from '../../components/ui/Link'

const ApartmentsMenu = () => {
	return (
		<div className="flex items-center space-x-8 min-h-fit">
			<Link linkText="Apartments" urlPath="apartments" />
			<Link linkText="Profile" urlPath="profile" />
		</div>
	)
}

export default ApartmentsMenu
