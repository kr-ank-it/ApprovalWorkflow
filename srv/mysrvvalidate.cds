using mysrvdemo from './mysimplesrv';
using {approvalWorkflow.hrms as hrms} from '../db/Students';

extend service mysrvdemo with @(impl:'srv/mysrvvalidate.js'){

    @readonly
    entity GetCustomStudent as select from hrms.Students{
        key email,
        firstName,
        lastName,
        firstName ||' '|| lastName as fullName:String
    }
} 
