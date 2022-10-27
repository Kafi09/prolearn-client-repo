import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What are the 7 steps of programming?</Accordion.Header>
                <Accordion.Body>
                    1.Defining the problem.
                    2.Planning the solution.
                    3.Coding the program.
                    4.Testing the program.
                    5.Documenting the program.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are the 5 basic concepts of programming language?</Accordion.Header>
                <Accordion.Body>
                   1. Variables. As the foundation of any computer programming language, variables act as “containers” that “hold” information.
                   2. Data Structures. Data structures allow programmers to streamline data collection when a large amount of related information is involved.
                   3. Control Structures
                   4. Syntax.
                   5. Tools.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Faq;