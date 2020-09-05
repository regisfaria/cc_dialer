import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { FiExternalLink, FiUsers } from 'react-icons/fi';

import SideMenu from '../../components/SideMenu';
import SearchBar from '../../components/SearchBar';

import {
  IncomingTasks,
  RecentLeads,
  CalendarSection,
  Task,
  Tag,
  Lead,
} from './styles';

import ProfileImg from '../../assets/profile-assets/me.jpeg';

const Dashboard: React.FC = () => {
  return (
    <>
      <SideMenu />
      <SearchBar />

      <IncomingTasks>
        <Task>
          <Link to="/task/id">
            <div id="title">
              <strong>Review leads</strong>
              <span>Reminder</span>
            </div>

            <div id="dates">
              <span>Due date:</span>
              <p>July 30, 2020</p>
            </div>

            <div id="info">
              <img src={ProfileImg} alt="user-pic" />

              <p>Régis Faria</p>
              <Tag>
                <span>Active</span>
              </Tag>
            </div>
          </Link>
        </Task>

        <Task>
          <Link to="/task/id">
            <div id="title">
              <strong>Review leads</strong>
              <span>Reminder</span>
            </div>

            <div id="dates">
              <span>Due date:</span>
              <p>July 30, 2020</p>
            </div>

            <div id="info">
              <img src={ProfileImg} alt="user-pic" />

              <p>Régis Faria</p>
              <Tag>
                <span>On-Hold</span>
              </Tag>
            </div>
          </Link>
        </Task>

        <Task>
          <Link to="/task/id">
            <div id="title">
              <strong>Review leads</strong>
              <span>Reminder</span>
            </div>

            <div id="dates">
              <span>Due date:</span>
              <p>July 30, 2020</p>
            </div>

            <div id="info">
              <img src={ProfileImg} alt="user-pic" />

              <p>Régis Faria</p>
              <Tag>
                <span>Completed</span>
              </Tag>
            </div>
          </Link>
        </Task>

        <Task>
          <Link to="/task/id">
            <div id="title">
              <strong>Review leads</strong>
              <span>Reminder</span>
            </div>

            <div id="dates">
              <span>Due date:</span>
              <p>July 30, 2020</p>
            </div>

            <div id="info">
              <img src={ProfileImg} alt="user-pic" />

              <p>Régis Faria</p>
              <Tag>
                <span>Ended</span>
              </Tag>
            </div>
          </Link>
        </Task>
        <Link id="show-opt" to="/tasks">
          Show more
        </Link>
      </IncomingTasks>

      <CalendarSection>
        <Calendar className="react-calendar" />
      </CalendarSection>

      <RecentLeads>
        <div id="recent-leads-title">
          <strong>
            Recent Leads <FiUsers />
          </strong>
        </div>

        <Lead>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead alterColor>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead alterColor>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead alterColor>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>

        <Lead alterColor>
          <div>
            <p>
              <strong>Regis Faria</strong> created a new lead.
            </p>
            <Link to="/leads/id" target="_blank">
              <FiExternalLink size={14} />
            </Link>
          </div>
          <p>X Hours ago</p>
        </Lead>
      </RecentLeads>
    </>
  );
};

export default Dashboard;
