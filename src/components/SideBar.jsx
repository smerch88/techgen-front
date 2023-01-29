import Blog from '../images/icons/Blog.svg';
import Roadmaps from '../images/icons/Roadmaps.svg';
import Mentorship from '../images/icons/Mentorship.svg';
import Helpful from '../images/icons/Helpful.svg';
import Vacancies from '../images/icons/Vacancies.svg';
import Development from '../images/icons/Development.svg';
import AboutUs from '../images/icons/Profiles.svg';
const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li icon={<Blog />}>Blog</li>
        <li icon={<Roadmaps />}>Roadmaps</li>
        <li icon={<Mentorship />}>Mentorship</li>
        <li icon={<Helpful />}>Helpful</li>
        <li icon={<Vacancies />}>Vacancies</li>
        <li icon={<Development />}>Development</li>
        <li icon={<AboutUs />}>About us</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
