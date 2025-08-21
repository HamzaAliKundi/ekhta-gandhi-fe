import HomePageHeader from "../../components/Home/Header";
import HomePageSteps from "../../components/Home/Steps";
import HomePageText from "../../components/Home/Text";
import HomePageCounselors from "../../components/Home/Counselors";
import StudentFirstSection from "../../components/Home/Student";

const HomePage = () => {
    return(
        <>
        <div className="max-w-[1680px] mx-auto">
            <HomePageHeader />
            <HomePageSteps />
            <HomePageText />
            <HomePageCounselors />
            <StudentFirstSection />
        </div>
        </>
    )
}

export default HomePage;