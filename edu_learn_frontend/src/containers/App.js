import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseList from '../components/CourseList';
import CourseForm from '../components/CourseForm';
import { CourseProvider } from '../contexts/CourseContext';
import RegistrationPage from '../pages/registration';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MyProfilePage from '../pages/myProfilePage';
// import CourseCatalogPage from '../pages/0courseCatalogPage';
import CourseCatalogPage from '../pages/courseCatalogPage';
import CourseDetailsPage from '../pages/courseDetailsPage';
import EnrolledCoursesPage from '../pages/enrolledCoursesPage';
import CourseDashboardPage from '../pages/CourseDashboardPage';


const App = () => {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/" element={<DashboardPage />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/myPP" element={<myProfilePage />} /> */}
          <Route path="/myPP" element={<MyProfilePage />} />
          

          <Route path="/courses" element={<CourseCatalogPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/enrolled-courses" element={<EnrolledCoursesPage />} />
          {/* <Route path="/" element={<CourseList />} /> */}
          <Route path="/create-course" element={<CourseForm />} />
          <Route path="/CourseDashboard" element={<CourseDashboardPage />} />
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );

};

export default App;