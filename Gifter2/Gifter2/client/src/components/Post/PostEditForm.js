// import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import PostManager from "../../modules/PostManager";

// const PostEditForm = props => {

//     const [postEditForm, setPostEditForm] = useState({ Title: "", ImageUrl: "", Caption: "", UserProfileId: 1, DateCreated: "1/13/2021 7:12:20 PM" })
//     const [isLoading, setIsLoading] = useState(false)

//     const handleFieldChange = evt => {
//         //stateToChange is current state of PostEditForm which is empty right now
//         const stateToChange = { ...postEditForm };
//         //stateToChange is a dictionary which is a placeholder for updating PostEditForm State
//         stateToChange[evt.target.name] = evt.target.value;
//         //SetPostForm is updating PostEditFormState with stateToChange
//         setPostEditForm(stateToChange);

//     }

//     const updatedExistingPostForm = evt => {
//         evt.preventDefault()
//         setIsLoading(true);

//         const editedPostEditForm = {
//             id: props.match.params.postId,
//             Title: post.Title,
//             ImageUrl: post.ImageUrl,
//             Caption: post.Caption,
//             userProfileId: post.userProfileId,
//             DateCreated: post.DateCreated

//         };
//     }

//     const postUpdatedForm = evt => {
//         //keep the browser from refreshing after the submit button it hit
//         evt.preventDefault()
//         setIsLoading(true)
//         PostManager.post(postEditForm)
//             .then(() => props.history.push(""));
//     }

//     return (
//         <Form>
//             <Form.Group as={Row} controlId="exampleForm.ControlInput1">
//                 <Form.Label column sm="2" >Title</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="Title" size="sm" type="text" placeholder="Title" onChange={handleFieldChange} />
//                 </Col>
//             </Form.Group>
//             <Form.Group as={Row} controlId="exampleForm.ControlInput1">
//                 <Form.Label column sm="2" >Image Url</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="ImageUrl" size="sm" type="text" placeholder="www.gift.com" onChange={handleFieldChange} />
//                 </Col>
//             </Form.Group>
//             <Form.Group as={Row} controlId="exampleForm.ControlInput1">
//                 <Form.Label column sm="2">Caption</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="Caption" type="text" placeholder="Caption" onChange={handleFieldChange} />
//                 </Col>
//             </Form.Group>
//             <Col xs="auto">
//                 <Button type="submit" className="mb-2" disabled={isLoading} onClick={postUpdateForm}>
//                     Submit
//                 </Button>
//             </Col>

//         </Form>
//     )
// }
// export default PostEditForm