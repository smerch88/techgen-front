import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const BlogPage = lazy(() => import('../pages/Blog/Blog'));
const DevelopmentPage = lazy(() => import('../pages/Development'));
const HomePage = lazy(() => import('../pages/Home'));
const JobPage = lazy(() => import('../pages/Job'));
const MentorshipPage = lazy(() => import('../pages/Mentorship'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const RoadmapsPage = lazy(() => import('../pages/Roadmaps'));
const UsefulPage = lazy(() => import('../pages/Useful'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/useful" element={<UsefulPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
