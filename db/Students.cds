using { cuid, managed } from '@sap/cds/common';

namespace approvalWorkflow.hrms;

entity Students : cuid, managed {
    @unique
    email : String @assert.format : '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    firstName: String;
    lastName: String;
    dateSignUp: type of managed: createdAt;
}



