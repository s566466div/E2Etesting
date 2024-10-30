const OngoingCourses = () => {
    const courses = [
        { name: 'React Basics', progress: 60 },
        { name: 'Advanced Node.js', progress: 40 },
        { name: 'UI/UX Design', progress: 75 }
    ];

    return (
        <div className="ongoing-courses">
            <h2>Ongoing Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        {course.name} - {course.progress}% complete
                        <progress value={course.progress} max="100"></progress>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OngoingCourses;
