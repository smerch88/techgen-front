import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import AboutUs from 'pages/AboutUs/AboutUs';
import { history } from 'helpers/history';
import { checkSession } from 'helpers/session';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { USER_ROLES } from 'helpers/roles';
import { PrivateRoute } from 'components/PrivateRoute';

const BlogPage = lazy(() => import('../pages/Blog/Blog'));
const DevelopmentPage = lazy(() => import('../pages/Development/Development'));
const JobPage = lazy(() => import('pages/Job/Job'));
const MentorshipPage = lazy(() => import('../pages/Mentorship'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const RoadmapsPage = lazy(() => import('../pages/Roadmaps/Roadmaps'));
const HelpfulPage = lazy(() => import('../pages/Helpful/Helpful'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));

export const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route
            path="/development"
            element={
              <RestrictedRoute
                redirectTo={'/job'}
                roles={[USER_ROLES.user, USER_ROLES.admin]}
                component={<DevelopmentPage />}
              />
            }
          />
          <Route path="/job" element={<JobPage />} />
          <Route
            path="/mentorship"
            element={
              <PrivateRoute redirectTo={'/'} component={<MentorshipPage />} />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/helpful" element={<HelpfulPage />} />
          <Route path="*" element={<AboutUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
