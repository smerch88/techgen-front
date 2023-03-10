import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const BlogPage = lazy(() => import('../pages/Blog/Blog'));
const DevelopmentPage = lazy(() => import('../pages/Development/Development'));
const JobPage = lazy(() => import('pages/Job/Job'));
const MentorshipPage = lazy(() => import('../pages/Mentorship'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const RoadmapsPage = lazy(() => import('../pages/Roadmaps/Roadmaps'));
const HelpfulPage = lazy(() => import('../pages/Helpful/Helpful'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const AboutUsPage = lazy(() => import('pages/AboutUs/AboutUs'));

export const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/helpful" element={<HelpfulPage />} />
          <Route path="*" element={<AboutUsPage />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};
