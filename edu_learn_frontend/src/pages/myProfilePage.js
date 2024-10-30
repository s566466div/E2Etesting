import Layout from "../components/Layout";
import EngagementStats from "../components/EngagementStats";
import CalendarComponent from "../components/CalendarComponent";
import EnrollmentPieChart from "../components/EnrollmentPieChart";
import OngoingCourses from "../components/OngoingCourses";

const myProfilePage = () => {
    return (
        <Layout>
            <div className="profile-container">
                <div className="profile-section">
                    <EngagementStats />
                </div>
                {/* <div className="dashboard-section">
                    <CalendarComponent />
                </div> */}
                <div className="profile-section">
                    <EnrollmentPieChart />
                </div>
                <div className="profile-section">
                    <OngoingCourses />
                </div>
            </div>
        </Layout>
    );
};

export default myProfilePage;
