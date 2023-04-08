import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import {  useHistory } from "react-router-dom"

export default function NavbarComponent() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

    async function handleLogout() {
      setError("")

      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  return (
    <Navbar bg="light" expand="sm" >
      <Navbar.Brand  as={Link} to="/" > 
        <b>FireVault</b>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link onClick={handleLogout}>
          Log Out
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}