import { ReactComponent as Blog } from '../../images/icons/Blog.svg';
import { ReactComponent as Roadmaps } from '../../images/icons/Roadmaps.svg';
import { ReactComponent as Mentorship } from '../../images/icons/Mentorship.svg';
import { ReactComponent as Helpful } from '../../images/icons/Helpful.svg';
import { ReactComponent as Vacancies } from '../../images/icons/Vacancies.svg';
import { ReactComponent as Development } from '../../images/icons/Development.svg';
import { ReactComponent as AboutUs } from '../../images/icons/Profiles.svg';
import { DisabledItem, Item, Link, List } from './sidebar.styled';
const Sidebar = () => {
  return (
    <aside>
      <List>
        <Item>
          <Blog width="20px" height="20px" />
          <Link to="/blog">Blog</Link>
        </Item>
        <DisabledItem>
          <Roadmaps width="20px" height="20px" />
          <Link to="/roadmaps">Roadmaps</Link>
        </DisabledItem>
        <DisabledItem>
          <Mentorship width="20px" height="20px" />
          <Link to="/mentorship">Mentorship</Link>
        </DisabledItem>
        <DisabledItem>
          <Helpful width="20px" height="20px" />
          <Link to="/helpful">Helpful</Link>
        </DisabledItem>
        <DisabledItem>
          <Vacancies width="20px" height="20px" />
          <Link to="/job">Vacancies</Link>
        </DisabledItem>
        <DisabledItem>
          <Development width="20px" height="20px" />
          <Link to="/development">Development</Link>
        </DisabledItem>
        <Item>
          <AboutUs width="20px" height="20px" />
          <Link to="/">About us</Link>
        </Item>
      </List>
    </aside>
  );
};

export default Sidebar;
