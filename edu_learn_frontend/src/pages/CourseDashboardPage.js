import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { fetchCourseById } from '../api/courses'; // Assuming you're fetching a course by ID
import ProgressPieChart from '../components/ProgressPieChart';
import './CourseDashboardPage.css';

const CourseDashboardPage = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);
        const courseId = 1; // Replace with the actual course ID
        const courseData = await fetchCourseById(courseId);
        const courseProgress = courseData.progress || 0; // Assuming progress is part of courseData
        setCourseDetails(courseData);
        setProgress(courseProgress);
      } catch (err) {
        setError('Failed to load course details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, []);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <Layout>
      <div className="course-dashboard">
        <div className="sidebar">
          <h3>Course Menu</h3>
          <ul>
            <li>Quizzes</li>
            <li>Assignments</li>
            <li>Course Materials</li>
            <li>About Course</li>
            <li>Videos</li>
          </ul>
        </div>

        <div className="course-details">
          <h1>{courseDetails.title}</h1>
          <p>{courseDetails.description}</p>
          <section>
            <h2>About the Course</h2>
            <p>{courseDetails.about}</p>
          </section>
        </div>

        <div className="progress-section">
          <h3>Course Progress</h3>
          <ProgressPieChart progress={progress} />
        </div>
      </div>
    </Layout>
  );
};

export default CourseDashboardPage;
