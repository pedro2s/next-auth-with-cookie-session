import React from 'react';
import LoginForm from '../components/login-form';

const page = () => {
	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="text-3xl leading-8">Welcome Login Page</h1>
			<LoginForm />
		</div>
	);
};

export default page;
