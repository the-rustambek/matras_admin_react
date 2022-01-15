
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function PrivateRoute(props){
	const [token] = useAuth();
	if (!token) {
		return <Redirect to='/login' />;
	}
	return <Route {...props}  />;
}

