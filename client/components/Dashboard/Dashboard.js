import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Sidebar from "./Sidebar";
import Content from "./Content";

import { 
  PROFILE_TAB,
} from '../../const/common';


class Dashboard extends Component {

  static propTypes = {
    socket: PropTypes.object,
    menuIsOpen: PropTypes.bool,
    toggleMenu: PropTypes.func,
  }

  state = {
    tab: PROFILE_TAB,
    tabProps: {}
  }

  switchTab = (tab, tabProps) => {
    this.setState({ tab, tabProps });
    this.props.toggleMenu(false);
  }

  render() {
    const { tab, tabProps } = this.state;
    const { menuIsOpen, socket } = this.props;
    return (
      <div className='dashboard container'>
        {menuIsOpen && <div className='dashboard-overlay'></div>}
        <Sidebar switchTab={this.switchTab} menuIsOpen={menuIsOpen} />
        <Content 
          tabProps={tabProps} 
          tab={tab} 
          switchTab={this.switchTab} 
          socket={socket}
        />
      </div>
    )
  }
}

export default Dashboard;