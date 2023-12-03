
import {Signer} from 'ethers';
import {ethers, Contract} from 'ethers';

import projectsJson from '../../../hardhat/artifacts/contracts/Projects.sol/Projects.json';  

// The following is the  Projects address deployed on CELO blockchain
const CELO_PROJECTS_CONTRACT = '0x1007ed8572ba44A934b0EFd49f13CdCA94E44a38';

// Projects service will handle the interactions with the Projecs smart contract
class ProjectsService {
    
    async createProject(signer:Signer) {
        const contract = new Contract(CELO_PROJECTS_CONTRACT, projectsJson.abi, signer);
        console.log("--->",contract);
        const createProjectTx =  await contract.createProject("project santi");
        createProjectTx.wait();
        console.log("--> creating  project has been deployect with:", createProjectTx);
    }

}

export default ProjectsService;
