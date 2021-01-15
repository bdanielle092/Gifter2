import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBar = () => {




    return (
        <>
            <Navbar bg="dark" variant="dark">


                <Nav className="mr-auto">
                    <Nav.Link href="/">Gifter</Nav.Link>
                    <Nav.Link href="/">Feed</Nav.Link>
                    <Nav.Link href="/post/add">New Post</Nav.Link>

                </Nav>

            </Navbar>

        </>
    );
};

export default NavBar;



