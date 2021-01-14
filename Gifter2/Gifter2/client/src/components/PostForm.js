import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PostManager from "../modules/PostManager";

const PostForm = () => {

    const [postForm, setPostForm] = useState({ Title: "", ImageUrl: "", Caption: "", UserProfileId: 1, DateCreated: "1/13/2021 7:12:20 PM" })


    const handleFieldChange = evt => {
        //stateToChange is current state of PostForm which is empty right now
        const stateToChange = { ...postForm };
        //stateToChange is a dictionary which is a placeholder for updating PostForm State
        stateToChange[evt.target.name] = evt.target.value;
        //SetPostForm is updating PostFormState with stateToChange
        setPostForm(stateToChange);

    }

    const postNewForm = evt => {
        //keep the browser from refreashing after the submit button it hit
        evt.preventDefault()
        if (postForm.Title === "" || postForm.ImageUrl === "" || postForm.Caption === "") {
            window.alert("Please input field");
        } else {
            PostManager.post(postForm)
        };

    }





    return (
        <Form>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                <Form.Label column sm="2" >Title</Form.Label>
                <Col sm="10">
                    <Form.Control name="Title" size="sm" type="text" placeholder="Title" onChange={handleFieldChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                <Form.Label column sm="2" >Image Url</Form.Label>
                <Col sm="10">
                    <Form.Control name="ImageUrl" size="sm" type="text" placeholder="www.gift.com" onChange={handleFieldChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                <Form.Label column sm="2">Caption</Form.Label>
                <Col sm="10">
                    <Form.Control name="Caption" type="text" placeholder="Caption" onChange={handleFieldChange} />
                </Col>
            </Form.Group>
            <Col xs="auto">
                <Button type="submit" className="mb-2" onClick={postNewForm}>
                    Submit
                </Button>
            </Col>

        </Form>
    )
}
export default PostForm