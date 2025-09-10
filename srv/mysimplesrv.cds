using {approvalWorkflow.hrms as hrms} from '../db/Students';

// 
service mysrvdemo @(path:'student'){

    @readonly
    entity GetStudent as projection on hrms.Students;
    @updateonly
    entity UpdateStudent as projection on hrms.Students;
    @insertonly
    entity CreateStudent as projection on hrms.Students;
    @deleteonly
    entity RemoveStudent as projection on hrms.Students;

    
    action deleteStudent(ID : UUID) returns Boolean;    
    // function myfoobar() returns String;

    // function mytoobar() returns String;
}