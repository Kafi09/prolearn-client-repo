import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';  
// google login part
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        console.log('buttonclicked')
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

// error
    const [error, setError] = useState('');

// email login part

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    // github login part
    

    const githubProvider = new GithubAuthProvider()

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }




    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-4' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

                <div>
                    <div className="d-grid gap-2 pb-4">
                        <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
                            Login with Google
                        </Button>
                        <Button onClick={handleGithubSignIn} variant="secondary" size="lg">
                            Login with Github
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
        
    );
    
};

export default Login;