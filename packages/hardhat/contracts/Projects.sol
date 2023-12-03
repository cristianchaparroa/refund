// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


// The projects contract is in charge to handle all logic related to Projects
contract Projects {

    // Stage where the project is currently.
    struct Stage {
        // current progress percentage
        uint256 percentage;
    }

    // Project struct contains the information related to the project
    struct Project {
        // Project title
        string title;
        // Current state of the project
        string state;
        // The project stages
        mapping (uint => Stage) stages;
        // number of stages
        uint stagesSize;
    }

    // projects contains the projects that currently exist on the system.
    mapping (address => Project) public projects;

    // create a new project add a new project to the map
    function createProject(string calldata title) public payable {
        projects[msg.sender].title=title;
    }

    // The add stage allow to the onwer to the specific project create a new Project stage
    function addStage(uint256  percentage) public payable {
        Project storage project = projects[msg.sender];
        project.stages[project.stagesSize].percentage = percentage;
        project.stagesSize += 1;
    }

    function getStage(uint index) public view returns(Stage memory){
        Project storage project = projects[msg.sender];
        require(index < project.stagesSize, "there is not a stage in the index");
        Stage memory stage = project.stages[index];
        return stage;
    }
}
