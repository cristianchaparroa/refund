
import {Signer} from 'ethers';
import {ethers, Contract} from 'ethers';

import projectsJson from '../../../hardhat/artifacts/contracts/Projects.sol/Projects.json';  

// The following is the  Projects address deployed on CELO blockchain
const CELO_PROJECTS_CONTRACT = '0xD39e3DB1ecc1EDac88693E0F957E871B8c5C2Dd2';

// Projects service will handle the interactions with the Projecs smart contract
class ProjectsService {
    
    async createProject(signer:Signer, title:string) {
        const contract = new Contract(CELO_PROJECTS_CONTRACT, projectsJson.abi, signer);
        console.log("--->",contract);
        const createProjectTx =  await contract.createProject(title);
        createProjectTx.wait();
        console.log("--> creating  project has been deployect with:", createProjectTx);
        return createProjectTx;
    }

}

export default ProjectsService;
