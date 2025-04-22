import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import * as api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated } = useAuth();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated) {
      navigate('/dashboard-pages/main-dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await api.login(loginId, password);
      if (response.access_token) {
        authLogin(); // Update auth context
        navigate('/dashboard-pages/main-dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(typeof err === 'string' ? err : 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="sign-in-page d-md-flex align-items-center custom-auth-height">
        <Container className="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
          <Row>
            <Col md={6} className="text-center z-2">
              <div className="sign-in-detail text-white">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <div style={{ width: '300px', height: '300px', marginBottom: '2rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
                      <g fill="#FFFFFF">
                        <path d="M397.5 186.5h-84v-84c0-11.6-9.4-21-21-21h-84c-11.6 0-21 9.4-21 21v84h-84c-11.6 0-21 9.4-21 21v84c0 11.6 9.4 21 21 21h84v84c0 11.6 9.4 21 21 21h84c11.6 0 21-9.4 21-21v-84h84c11.6 0 21-9.4 21-21v-84c0-11.6-9.4-21-21-21zm0 105c0 0-84 0-84 0 -11.6 0-21 9.4-21 21v84h-84v-84c0-11.6-9.4-21-21-21h-84v-84h84c11.6 0 21-9.4 21-21v-84h84v84c0 11.6 9.4 21 21 21h84v84z"/>
                      </g>
                    </svg>
                  </div>
                  <h1 className="text-white mb-3" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1EBCB7' }}>MediXscan</h1>
                  <h3 className="text-white mb-4" style={{ letterSpacing: '5px', color: '#1EBCB7' }}>RUG-REL</h3>
                  <p className="text-white text-center px-4">
                    Advanced AI-powered analysis of radiology reports,
                    helping medical professionals make better diagnostic decisions.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="position-relative z-2">
              <div className="sign-in-from d-flex flex-column justify-content-center">
                <h1 className="mb-0">Sign In</h1>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <p>Enter your Gmail or username and password to access admin panel.</p>
                  <div className="form-group">
                    <label htmlFor="loginId">Gmail or Username</label>
                    <FormControl 
                      type="text" 
                      className="form-control" 
                      id="loginId" 
                      placeholder="Enter Gmail or username"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="d-flex justify-content-between form-group mb-0">
                    <label htmlFor="password">Password</label>
                  </div>
                  <Form.Control 
                    type="password" 
                    id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                  <div className="d-flex w-100 justify-content-between align-items-center mt-3">
                    <label className="d-inline-block form-group mb-0 d-flex">
                      <input type="checkbox" className="me-2" />
                      <span>Remember me</span>
                    </label>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                  </div>
                  {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {error}
                    </div>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SignIn