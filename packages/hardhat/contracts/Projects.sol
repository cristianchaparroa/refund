// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Projects {

    // Project struct contains the information related to the project
    struct Project {
        // Project title
        string title;
        // Current state of the project
        string state;
    }

    // projects contains the projects that currently exist on the system.
    mapping (address => Project) public projects;

    // create a new project add a new project to the map
    function createProject(string calldata title) public payable {
        projects[msg.sender] = Project(title, "created");
    }
}
