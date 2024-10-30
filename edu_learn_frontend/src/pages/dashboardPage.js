
import Layout from "../components/Layout";
import EngagementStats from "../components/EngagementStats";
import CalendarComponent from "../components/CalendarComponent";
import EnrollmentPieChart from "../components/EnrollmentPieChart";
import OngoingCourses from "../components/OngoingCourses";

const DashboardPage = () => {
    return (
        <Layout>
            <div className="dashboard-container">
            <div className="dashboard-section">
                  <h1>Enrolled courses </h1> 
                </div>
                
                {/* <div className="dashboard-section">
                    <CalendarComponent />
                </div> */}
                <div className="dashboard-section">
                    <EnrollmentPieChart />
                </div>
                
                
            </div>
        </Layout>
    );
};

export default DashboardPage;
