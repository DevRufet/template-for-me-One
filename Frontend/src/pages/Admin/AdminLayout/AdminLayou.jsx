import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

function AdminLayou() {
  return (
  <>
  <AdminNavbar></AdminNavbar>
  <Outlet></Outlet>
  </>
  )
}

export default AdminLayou