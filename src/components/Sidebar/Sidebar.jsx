import { ReactComponent as Blog } from '../../images/icons/Blog.svg';
import { ReactComponent as Roadmaps } from '../../images/icons/Roadmaps.svg';
import { ReactComponent as Mentorship } from '../../images/icons/Mentorship.svg';
import { ReactComponent as Helpful } from '../../images/icons/Helpful.svg';
import { ReactComponent as Vacancies } from '../../images/icons/Vacancies.svg';
import { ReactComponent as Development } from '../../images/icons/Development.svg';
import { ReactComponent as AboutUs } from '../../images/icons/Profiles.svg';
import { Item, Link } from './sidebar.styled';
const Sidebar = () => {
  return (
    <aside>
      <ul>
        <Item>
          <Blog width="20px" height="20px" />
          <Link to="/blog">Blog</Link>
        </Item>
        <Item>
          <Roadmaps width="20px" height="20px" />
          <Link to="/roadmaps">Roadmaps</Link>
        </Item>
        <Item>
          <Mentorship width="20px" height="20px" />
          <Link to="/mentorship">Mentorship</Link>
        </Item>
        <Item>
          <Helpful width="20px" height="20px" />
          <Link to="/useful">Helpful</Link>
        </Item>
        <Item>
          <Vacancies width="20px" height="20px" />
          <Link to="/job">Vacancies</Link>
        </Item>
        <Item>
          <Development width="20px" height="20px" />
          <Link to="/development">Development</Link>
        </Item>
        <Item>
          <AboutUs width="20px" height="20px" />
          <Link>About us</Link>
        </Item>
      </ul>
    </aside>
  );
};

export default Sidebar;
