import React, { Fragment, useContext } from 'react'
import Navbar from './Navbar'
import NotificationContext from '../../store/notification-context'

function Layout(props) {
  const notificationContext = useContext(NotificationContext);

  const activeNotification = notificationContext.notification

  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      {/* <Notification />  Add notification component here */}
    </Fragment>
  )
}

export default Layout