using {approvalWorkflow.hrms as hrms} from '../db/Students';

service mysrvdemo {

    @readonly
    entity GetStudent as projection on hrms.Students;

    @updateonly
    entity UpdateStudent as projection on hrms.Students;

    // function myfoobar() returns String;

    // function mytoobar() returns String;

}